import { TrendingUp, Target, Zap } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const achievements = [
  {
    icon: TrendingUp,
    title: 'Pabitra Dairy',
    description: 'Increased sales by 30% through targeted video campaigns and social media strategy.',
  },
  {
    icon: Target,
    title: 'D Global Café',
    description: 'Doubled revenue within 1 month with influencer collaborations and a focused content calendar.',
  },
  {
    icon: Zap,
    title: 'Vegan Bite Nepal',
    description: 'Built digital presence from zero; grew leads and sales 2× with branding, video, and paid boost.',
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-20 bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Highlights"
          title="Results we’re proud of"
          intro="Real numbers, real growth — a snapshot of the impact we’ve delivered for our partners."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => (
            <article
              key={a.title}
              className="group rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-xl hover:shadow-brand/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <a.icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{a.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}