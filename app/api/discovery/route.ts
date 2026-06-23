import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { createHash } from 'crypto';

// Simple in-memory rate limit (resets on cold start — suffisant pour un portfolio)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;       // max 3 soumissions
const RATE_WINDOW = 60_000; // par minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

export async function POST(req: Request) {
  try {
    // ── Anti-spam: rate limit par IP ──────────────────────────────────────────
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ ok: false, error: 'rate_limit' }, { status: 429 });
    }

    const data = await req.json();

    console.log('[Discovery] received:', JSON.stringify({ email: data.email, name: data.name, _hp: data._hp }));

    // ── Anti-spam: honeypot field (doit être vide) ────────────────────────────
    if (data._hp && data._hp.trim() !== '') {
      console.log('[Discovery] honeypot triggered');
      return NextResponse.json({ ok: true }); // silently ignore bots
    }

    // ── Validation minimale: nom + email requis ────────────────────────────
    if (!data.name || !data.email) {
      console.log('[Discovery] missing name or email:', { name: data.name, email: data.email });
      return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 });
    }

    const ipHash = createHash('sha256').update(ip).digest('hex');

    const lines = [
      `📋 NOUVELLE DEMANDE DE DÉCOUVERTE`,
      ``,
      `🏢 PROJET`,
      `Type: ${data.projectType || '—'}`,
      `Entreprise: ${data.businessName || '—'}`,
      `Zone: ${data.serviceArea || '—'}`,
      `Clientèle: ${data.targetAudience || '—'}`,
      ``,
      `✅ CE QUI EXISTE`,
      `Logo: ${data.hasLogo || '—'}`,
      `Photos HD: ${data.hasPhotos || '—'}`,
      `Textes rédigés: ${data.hasTexts || '—'}`,
      `Google Business: ${data.hasGoogleBusiness || '—'}`,
      `Réseaux sociaux: ${data.existingSocials || '—'}`,
      ``,
      `⚙️ FONCTIONNALITÉS`,
      `Sélectionnées: ${data.features?.join(', ') || '—'}`,
      `Formulaire devis: ${data.wantsQuoteForm || '—'}`,
      `Bilingue: ${data.wantsBilingual || '—'}`,
      `Forfait entretien: ${data.wantsMaintenancePlan || '—'}`,
      ``,
      `💰 BUDGET & DÉLAI`,
      `Budget: ${data.budget || '—'}`,
      `Montant exact: ${data.budgetExact || '—'}`,
      `Délai: ${data.timeline || '—'}`,
      `Précisions budget: ${data.budgetNotes || '—'}`,
      ``,
      `👤 CONTACT`,
      `Nom: ${data.name || '—'}`,
      `Email: ${data.email || '—'}`,
      `Téléphone: ${data.phone || '—'}`,
      `Message: ${data.message || '—'}`,
    ];

    // ── Supabase: vérifier doublons récents (même email, < 10 min) ───────────
    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000).toISOString();
    const { data: existing } = await supabaseAdmin
      .from('discovery_submissions')
      .select('id')
      .eq('email', data.email)
      .gte('created_at', tenMinutesAgo)
      .limit(1);

    if (existing && existing.length > 0) {
      return NextResponse.json({ ok: false, error: 'duplicate' }, { status: 429 });
    }

    // ── Supabase: insérer la soumission ───────────────────────────────────────
    const { error: insertError } = await supabaseAdmin
      .from('discovery_submissions')
      .insert({
        ip_hash: ipHash,
        project_type: data.projectType,
        business_name: data.businessName,
        service_area: data.serviceArea,
        target_audience: data.targetAudience,
        has_logo: data.hasLogo,
        has_photos: data.hasPhotos,
        has_texts: data.hasTexts,
        has_google_business: data.hasGoogleBusiness,
        existing_socials: data.existingSocials,
        features: data.features,
        wants_quote_form: data.wantsQuoteForm,
        wants_bilingual: data.wantsBilingual,
        wants_maintenance_plan: data.wantsMaintenancePlan,
        budget: data.budget,
        budget_exact: data.budgetExact,
        timeline: data.timeline,
        budget_notes: data.budgetNotes,
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });

    if (insertError) {
      console.error('[Discovery Form] Supabase insert error:', insertError);
    }

    // ── Email via Resend (optionnel) ──────────────────────────────────────────
    const body = lines.join('\n');
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'SmartScaling <noreply@smartscaling.dev>',
          to: ['miguel.boka@smartscaling.dev'],
          subject: `🚀 Nouvelle demande — ${data.businessName || 'Sans nom'} (${data.projectType || '?'})`,
          text: body,
          reply_to: data.email || undefined,
        }),
      });
    } else {
      console.log('[Discovery Form]', body);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[Discovery Form] Error:', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
