/**
 * SectionHeading — reusable label + title + optional intro block.
 * Keeps section headers visually consistent across the whole page.
 */
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
}

export function SectionHeading({ label, title, intro, align = 'left' }: SectionHeadingProps) {
  return (
    <div data-ev-id="ev_9d4ea2a260" className={['max-w-2xl', align === 'center' ? 'mx-auto text-center' : ''].join(' ')}>
			<span data-ev-id="ev_594db8de99" className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">{label}</span>
			<h2 data-ev-id="ev_4ddcc2a1ad" className="mt-3 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl text-balance">
				{title}
			</h2>
			{intro && <p data-ev-id="ev_99bb44f1c2" className="mt-4 text-base leading-relaxed text-ink-soft text-pretty">{intro}</p>}
		</div>);

}