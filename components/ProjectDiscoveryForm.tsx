'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Loader2, Globe, ShoppingBag, Briefcase, Zap, ChevronRight } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  // Step 1 — Le projet
  projectType: string;
  businessName: string;
  serviceArea: string;
  targetAudience: string;

  // Step 2 — Ce qui existe
  hasLogo: string;
  hasPhotos: string;
  hasTexts: string;
  hasGoogleBusiness: string;
  existingSocials: string;

  // Step 3 — Fonctionnalités
  features: string[];
  wantsQuoteForm: string;
  wantsBilingual: string;
  wantsMaintenancePlan: string;

  // Step 4 — Budget & délai
  budget: string;
  timeline: string;

  // Step 5 — Contact
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialData: FormData = {
  projectType: '',
  businessName: '',
  serviceArea: '',
  targetAudience: '',
  hasLogo: '',
  hasPhotos: '',
  hasTexts: '',
  hasGoogleBusiness: '',
  existingSocials: '',
  features: [],
  wantsQuoteForm: '',
  wantsBilingual: '',
  wantsMaintenancePlan: '',
  budget: '',
  timeline: '',
  name: '',
  email: '',
  phone: '',
  message: '',
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function OptionCard({
  icon: Icon,
  label,
  sublabel,
  selected,
  onClick,
}: {
  icon?: React.ElementType;
  label: string;
  sublabel?: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative w-full text-left rounded-xl border p-4 transition-all duration-200 ${
        selected
          ? 'border-purple-500/60 bg-purple-500/10 shadow-[0_0_0_1px_rgba(168,85,247,0.4)]'
          : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]'
      }`}
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${selected ? 'bg-purple-500/20' : 'bg-white/5'}`}>
            <Icon className={`h-4 w-4 ${selected ? 'text-purple-400' : 'text-gray-400'}`} />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <p className={`text-sm font-medium ${selected ? 'text-white' : 'text-gray-300'}`}>{label}</p>
          {sublabel && <p className="mt-0.5 text-xs text-gray-500">{sublabel}</p>}
        </div>
        <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all ${selected ? 'border-purple-500 bg-purple-500' : 'border-white/20'}`}>
          {selected && <Check className="h-3 w-3 text-white" />}
        </div>
      </div>
    </button>
  );
}

function FeatureChip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
        selected
          ? 'border-purple-500/60 bg-purple-500/15 text-purple-300'
          : 'border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/20 hover:text-gray-300'
      }`}
    >
      {label}
    </button>
  );
}

function InputField({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  required,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium text-gray-400">
        {label} {required && <span className="text-purple-400">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition-all focus:border-purple-500/50 focus:bg-white/[0.06] focus:shadow-[0_0_0_1px_rgba(168,85,247,0.25)]"
      />
    </div>
  );
}

// ─── Steps ───────────────────────────────────────────────────────────────────

const PROJECT_TYPES = [
  { id: 'site-vitrine', label: 'Site vitrine', sublabel: 'Présenter mon entreprise', icon: Globe },
  { id: 'e-commerce', label: 'Boutique en ligne', sublabel: 'Vendre mes produits', icon: ShoppingBag },
  { id: 'saas', label: 'App / SaaS', sublabel: 'Un outil web sur mesure', icon: Zap },
  { id: 'autre', label: 'Autre', sublabel: 'Refonte, landing page…', icon: Briefcase },
];

const TARGET_AUDIENCES = [
  { id: 'corpo', label: 'Entreprises (B2B)' },
  { id: 'particuliers', label: 'Particuliers (B2C)' },
  { id: 'les-deux', label: 'Les deux' },
];

const FEATURES_LIST = [
  'Formulaire de devis/contact',
  'Galerie / portfolio',
  'Menu / catalogue PDF',
  'Calendrier de réservation',
  'Blogue / actualités',
  'FAQ',
  'Infolettre (capture emails)',
  'Paiement en ligne',
  'Espace client',
  'Calculateur en ligne',
  'Fiche Google Business',
  'SEO local',
];

const BUDGETS = [
  { id: '1k-3k', label: '1 000 – 3 000 $', sublabel: 'Site essentiel' },
  { id: '3k-6k', label: '3 000 – 6 000 $', sublabel: 'Site pro avec formulaire' },
  { id: '6k-15k', label: '6 000 – 15 000 $', sublabel: 'App / SaaS / sur mesure' },
  { id: '15k+', label: '15 000 $+', sublabel: 'Projet ambitieux' },
];

const TIMELINES = [
  { id: 'urgent', label: 'Urgent (< 1 mois)' },
  { id: '1-3', label: '1 à 3 mois' },
  { id: '3-6', label: '3 à 6 mois' },
  { id: 'flexible', label: 'Flexible, pas de rush' },
];

// ─── Step Components ──────────────────────────────────────────────────────────

function Step1({ data, update }: { data: FormData; update: (p: Partial<FormData>) => void }) {
  return (
    <div className="space-y-5">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Type de projet</p>
        <div className="space-y-2">
          {PROJECT_TYPES.map((t) => (
            <OptionCard
              key={t.id}
              icon={t.icon}
              label={t.label}
              sublabel={t.sublabel}
              selected={data.projectType === t.id}
              onClick={() => update({ projectType: t.id })}
            />
          ))}
        </div>
      </div>
      <InputField
        label="Nom de l'entreprise"
        placeholder="Ex: Traiteur Chez Martin"
        value={data.businessName}
        onChange={(v) => update({ businessName: v })}
        required
      />
      <InputField
        label="Zone desservie"
        placeholder="Ex: Montréal + Rive-Sud"
        value={data.serviceArea}
        onChange={(v) => update({ serviceArea: v })}
      />
      <div className="space-y-2">
        <p className="text-xs font-medium text-gray-400">Clientèle cible</p>
        <div className="flex flex-wrap gap-2">
          {TARGET_AUDIENCES.map((a) => (
            <FeatureChip
              key={a.id}
              label={a.label}
              selected={data.targetAudience === a.id}
              onClick={() => update({ targetAudience: a.id })}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Step2({ data, update }: { data: FormData; update: (p: Partial<FormData>) => void }) {
  const YesNo = ({ field, label }: { field: keyof FormData; label: string }) => (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
      <p className="text-sm text-gray-300">{label}</p>
      <div className="flex gap-2">
        {['Oui', 'Non'].map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => update({ [field]: opt } as Partial<FormData>)}
            className={`rounded-lg px-3 py-1 text-xs font-medium transition-all ${
              data[field] === opt
                ? 'bg-purple-500/20 text-purple-300 shadow-[inset_0_0_0_1px_rgba(168,85,247,0.5)]'
                : 'bg-white/5 text-gray-500 hover:bg-white/10 hover:text-gray-300'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Ce qui existe déjà</p>
      <YesNo field="hasLogo" label="Tu as un logo (idéalement en vectoriel)?" />
      <YesNo field="hasPhotos" label="Tu as des photos HD (produits/services/équipe)?" />
      <YesNo field="hasTexts" label="Les textes du site sont déjà rédigés?" />
      <YesNo field="hasGoogleBusiness" label="Tu as une fiche Google Business à jour?" />
      <InputField
        label="Réseaux sociaux existants à lier (optionnel)"
        placeholder="Ex: instagram.com/chez.martin"
        value={data.existingSocials}
        onChange={(v) => update({ existingSocials: v })}
      />
    </div>
  );
}

function Step3({ data, update }: { data: FormData; update: (p: Partial<FormData>) => void }) {
  const toggleFeature = (f: string) => {
    const current = data.features;
    const next = current.includes(f) ? current.filter((x) => x !== f) : [...current, f];
    update({ features: next });
  };

  const YesNo = ({ field, label, sublabel }: { field: keyof FormData; label: string; sublabel?: string }) => (
    <div className="flex items-start justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
      <div>
        <p className="text-sm text-gray-300">{label}</p>
        {sublabel && <p className="mt-0.5 text-xs text-gray-500">{sublabel}</p>}
      </div>
      <div className="flex shrink-0 gap-2">
        {['Oui', 'Non'].map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => update({ [field]: opt } as Partial<FormData>)}
            className={`rounded-lg px-3 py-1 text-xs font-medium transition-all ${
              data[field] === opt
                ? 'bg-purple-500/20 text-purple-300 shadow-[inset_0_0_0_1px_rgba(168,85,247,0.5)]'
                : 'bg-white/5 text-gray-500 hover:bg-white/10 hover:text-gray-300'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-5">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Fonctionnalités souhaitées</p>
        <div className="flex flex-wrap gap-2">
          {FEATURES_LIST.map((f) => (
            <FeatureChip
              key={f}
              label={f}
              selected={data.features.includes(f)}
              onClick={() => toggleFeature(f)}
            />
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Options clés</p>
        <YesNo
          field="wantsQuoteForm"
          label="Formulaire de devis structuré?"
          sublabel="Qualifie tes leads automatiquement"
        />
        <YesNo
          field="wantsBilingual"
          label="Site bilingue (FR + EN)?"
        />
        <YesNo
          field="wantsMaintenancePlan"
          label="Forfait entretien mensuel?"
          sublabel="Mises à jour, hébergement géré, support"
        />
      </div>
    </div>
  );
}

function Step4({ data, update }: { data: FormData; update: (p: Partial<FormData>) => void }) {
  return (
    <div className="space-y-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Budget approximatif</p>
        <div className="space-y-2">
          {BUDGETS.map((b) => (
            <OptionCard
              key={b.id}
              label={b.label}
              sublabel={b.sublabel}
              selected={data.budget === b.id}
              onClick={() => update({ budget: b.id })}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Délai souhaité</p>
        <div className="flex flex-wrap gap-2">
          {TIMELINES.map((t) => (
            <FeatureChip
              key={t.id}
              label={t.label}
              selected={data.timeline === t.id}
              onClick={() => update({ timeline: t.id })}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Step5({ data, update }: { data: FormData; update: (p: Partial<FormData>) => void }) {
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Tes coordonnées</p>
      <InputField label="Ton nom" placeholder="Marie Tremblay" value={data.name} onChange={(v) => update({ name: v })} required />
      <InputField label="Adresse courriel" placeholder="marie@exemple.com" type="email" value={data.email} onChange={(v) => update({ email: v })} required />
      <InputField label="Téléphone (optionnel)" placeholder="+1 514 000-0000" type="tel" value={data.phone} onChange={(v) => update({ phone: v })} />
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-gray-400">Quelque chose à ajouter?</label>
        <textarea
          rows={3}
          value={data.message}
          onChange={(e) => update({ message: e.target.value })}
          placeholder="Contexte, contraintes, inspirations…"
          className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition-all focus:border-purple-500/50 focus:bg-white/[0.06] focus:shadow-[0_0_0_1px_rgba(168,85,247,0.25)]"
        />
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const STEPS = [
  { id: 1, title: 'Le projet', subtitle: 'C\'est quoi, ce qu\'on construit?' },
  { id: 2, title: 'Ce qui existe', subtitle: 'On part de zéro ou pas?' },
  { id: 3, title: 'Les fonctions', subtitle: 'Ce que tu veux sur le site' },
  { id: 4, title: 'Budget & délai', subtitle: 'Pour qu\'on soit alignés' },
  { id: 5, title: 'Tes coordonnées', subtitle: 'Pour te revenir rapidement' },
];

interface ProjectDiscoveryFormProps {
  onBack: () => void;
}

export default function ProjectDiscoveryForm({ onBack }: ProjectDiscoveryFormProps) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (partial: Partial<FormData>) => setData((prev) => ({ ...prev, ...partial }));

  const canContinue = () => {
    if (step === 1) return data.projectType !== '' && data.businessName.trim() !== '';
    if (step === 5) return data.name.trim() !== '' && data.email.trim() !== '';
    return true;
  };

  const goNext = () => {
    if (!canContinue()) return;
    setDirection(1);
    setStep((s) => Math.min(s + 1, STEPS.length));
  };

  const goPrev = () => {
    if (step === 1) { onBack(); return; }
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = async () => {
    if (!canContinue()) return;
    setIsSubmitting(true);
    try {
      await fetch('/api/discovery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch {
      // silent — show success anyway, email fallback
    }
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
  };

  const currentStep = STEPS[step - 1];

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-6 py-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.3)]"
        >
          <Check className="h-10 w-10 text-purple-400" />
        </motion.div>
        <div>
          <h3 className="text-xl font-semibold text-white">Bien reçu, {data.name.split(' ')[0]}!</h3>
          <p className="mt-2 text-sm text-gray-400">
            Je reviens vers toi dans les 24h pour discuter de{' '}
            <span className="text-white font-medium">{data.businessName}</span>.
          </p>
        </div>
        <div className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left">
          <p className="text-xs text-gray-500">En attendant, tu peux aussi</p>
          <a
            href="https://calendly.com/bokamiguel"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
          >
            Réserver un appel directement <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="mb-6">
        <div className="mb-4 flex items-center gap-3">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-white/20 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Étape {step} sur {STEPS.length}</span>
              <span className="text-xs font-medium text-purple-400">{Math.round((step / STEPS.length) * 100)}%</span>
            </div>
            <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"
                animate={{ width: `${(step / STEPS.length) * 100}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <h3 className="text-lg font-semibold text-white">{currentStep.title}</h3>
          <p className="text-sm text-gray-400">{currentStep.subtitle}</p>
        </motion.div>
      </div>

      {/* Step Content */}
      <div className="relative min-h-0 flex-1 overflow-y-auto pr-1">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {step === 1 && <Step1 data={data} update={update} />}
            {step === 2 && <Step2 data={data} update={update} />}
            {step === 3 && <Step3 data={data} update={update} />}
            {step === 4 && <Step4 data={data} update={update} />}
            {step === 5 && <Step5 data={data} update={update} />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA */}
      <div className="mt-6 pt-4 border-t border-white/10">
        {step < STEPS.length ? (
          <button
            type="button"
            onClick={goNext}
            disabled={!canContinue()}
            className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 ${
              canContinue()
                ? 'bg-white text-black hover:bg-gray-100 active:scale-[0.98]'
                : 'cursor-not-allowed bg-white/10 text-gray-600'
            }`}
          >
            Continuer <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canContinue() || isSubmitting}
            className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 ${
              canContinue() && !isSubmitting
                ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:from-purple-500 hover:to-fuchsia-500 active:scale-[0.98] shadow-lg shadow-purple-500/25'
                : 'cursor-not-allowed bg-white/10 text-gray-600'
            }`}
          >
            {isSubmitting ? (
              <><Loader2 className="h-4 w-4 animate-spin" /> Envoi en cours…</>
            ) : (
              <><Check className="h-4 w-4" /> Envoyer ma demande</>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
