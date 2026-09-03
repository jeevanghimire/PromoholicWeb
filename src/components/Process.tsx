import { Search, Calendar, Video, Layers, Megaphone, Users } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const steps = [
  {
    icon: Search,
    title: 'Research & USP Discovery',
    description:
      "We analyse the client's unique selling points and craft new USPs that differentiate them from the market.",
  },
  {
    icon: Calendar,
    title: 'Content Calendar',
    description:
      'A month‑long content calendar is planned, aligning themes, formats, and publishing dates.',
  },
  {
    icon: Video,
    title: 'Shoot Scheduling',
    description:
      'Shoot days are fixed with mutual consent, ensuring smooth production and client involvement.',
  },
  {
    icon: Layers,
    title: 'Content Pipeline',
    description:
      'Editing → internal review → client review → publish → paid boosting for maximum reach.',
  },
  {
    icon: Megaphone,
    title: 'Influencer Collaboration',
    description:
      'We identify and onboard relevant influencers, delivering strong ROI on every partnership.',
  },
  {
    icon: Users,
    title: 'Ongoing Optimisation',
    description:
      'Performance data drives continuous tweaks to creative, targeting, and spend.',
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="How we work"
          title="A proven, end‑to‑end creative process"
          intro="From insight to impact — every project follows the same disciplined workflow."
          align="center"
        />

        <div className="mt-14 space-y-8">
          {steps.map((step) => (
            <article
              key={step.title}
              className="flex gap-6 rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5"
            >
              <div className="flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-brand-soft text-brand">
                <step.icon size={22} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}