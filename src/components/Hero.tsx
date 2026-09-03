/**
 * Hero — full-height opening section with headline, CTAs and the brand visual.
 */
import { ArrowUpRight, Play } from 'lucide-react';
import { stats } from '../data/portfolio';
import logoHorizontal from '../assets/uploads/PromoholicLogo2Line.png';

export function Hero() {
  return (
    <section data-ev-id="ev_3597852944" id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
			{/* Soft brand wash background */}
			<div data-ev-id="ev_e8a2b217be" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-soft/70 to-white" />
			{/* Animated gradient blobs */}
			<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-brand/20 blur-3xl animate-pulse-slow" />
				<div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-brand-dark/10 blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}} />
			</div>

			<div data-ev-id="ev_8e2559e009" className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
				{/* Copy */}
				<div data-ev-id="ev_b58e349df2">
					<img src={logoHorizontal} alt="Promoholic" className="h-10 w-auto" />

					<h1 data-ev-id="ev_31989f53d4" className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl text-balance">
						We make brands <span data-ev-id="ev_294aee5d40" className="text-brand">impossible</span> to ignore.
					</h1>

					<p data-ev-id="ev_84c2694988" className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft text-pretty">
						Promoholic is a creative studio crafting bold identities, striking designs and
						scroll-stopping videos for the brands people remember.
					</p>

					<div data-ev-id="ev_86b21a3ccc" className="mt-8 flex flex-wrap items-center gap-4">
						<a data-ev-id="ev_aea6f0337b"
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark">

							View our work
							<ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
						</a>
						<a data-ev-id="ev_c4497897a8"
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white">

							<Play size={16} /> Let&apos;s talk
						</a>
					</div>

					{/* Stats */}
					<dl data-ev-id="ev_2e9464f787" className="mt-12 grid grid-cols-4 gap-4 border-t border-border pt-8">
						{stats.map((s) =>
            <div data-ev-id="ev_6fc9268010" key={s.label}>
								<dt data-ev-id="ev_6a3b948c4c" className="font-display text-2xl font-extrabold text-ink sm:text-3xl">{s.value}</dt>
								<dd data-ev-id="ev_ca82a541cf" className="mt-1 text-xs text-ink-soft">{s.label}</dd>
							</div>
            )}
					</dl>
				</div>

				{/* Visual */}
				<div data-ev-id="ev_e44e42f2d9" className="relative">
					<div className="relative h-96 w-full max-w-lg mx-auto animate-float">
						<div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-dark to-brand rounded-3xl blur-2xl opacity-60" />
						<div className="relative h-full w-full rounded-3xl bg-gradient-to-tr from-white/10 to-transparent border border-white/20 backdrop-blur flex items-center justify-center">
							<div className="text-center text-ink-soft">
								<p className="font-display text-xl font-bold">Creative Studio</p>
								<p className="text-sm">Design · Video · Growth</p>
							</div>
						</div>
					</div>
					<div data-ev-id="ev_649468beda" className="absolute -bottom-5 -left-5 hidden rounded-xl bg-ink px-5 py-4 text-white shadow-xl sm:block">
						<p data-ev-id="ev_97bb81a53d" className="font-display text-lg font-extrabold leading-none">Design · Video · Growth</p>
						<p data-ev-id="ev_9bbfabbd77" className="mt-1 text-xs text-white/70">One studio, every creative need</p>
					</div>
				</div>
			</div>
		</section>);
}