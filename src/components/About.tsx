import { Check } from 'lucide-react';
import studioImage from '../assets/generated/studio.png';

const POINTS = [
'A single team for design, video and growth',
'Concept-to-delivery, done in-house',
'Obsessed with clean, modern, on-brand work',
'Fast turnarounds without cutting corners'];


export function About() {
  return (
    <section data-ev-id="ev_5a69c4b8ee" id="about" className="scroll-mt-20 bg-surface-alt py-20 md:py-28">
			<div data-ev-id="ev_b0fcb9e674" className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
				{/* Visual */}
				<div data-ev-id="ev_adf1002fb0" className="order-2 lg:order-1">
					<div data-ev-id="ev_ee4464f452" className="overflow-hidden rounded-2xl border border-border shadow-xl">
						<img data-ev-id="ev_828ca52345" src={studioImage} alt="Creative studio workspace with team" className="h-full w-full object-cover" />
					</div>
				</div>

				{/* Copy */}
				<div data-ev-id="ev_44fb62453d" className="order-1 lg:order-2">
					<span data-ev-id="ev_9e5633c2f1" className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Who we are</span>
					<h2 data-ev-id="ev_9dcfc18f7d" className="mt-3 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl text-balance">
						A creative studio addicted to great promotion.
					</h2>
					<p data-ev-id="ev_2d7bc50ac0" className="mt-5 text-base leading-relaxed text-ink-soft text-pretty">
						Promoholic blends sharp design thinking with cinematic storytelling. We help ambitious
						brands show up boldly — across print, screen and social — with work that is minimal,
						modern and unmistakably theirs.
					</p>

					<ul data-ev-id="ev_b7522fa3f9" className="mt-8 flex flex-col gap-3">
						{POINTS.map((point) =>
            <li data-ev-id="ev_ea9ade342d" key={point} className="flex items-center gap-3 text-sm text-ink">
								<span data-ev-id="ev_71b3f84013" className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand text-white">
									<Check size={14} />
								</span>
								{point}
							</li>
            )}
					</ul>
				</div>
			</div>
		</section>);

}