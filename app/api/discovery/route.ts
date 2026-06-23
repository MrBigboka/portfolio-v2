import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

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
      `Délai: ${data.timeline || '—'}`,
      ``,
      `👤 CONTACT`,
      `Nom: ${data.name || '—'}`,
      `Email: ${data.email || '—'}`,
      `Téléphone: ${data.phone || '—'}`,
      `Message: ${data.message || '—'}`,
    ];

    const body = lines.join('\n');

    // Send via Resend if configured, otherwise log
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
