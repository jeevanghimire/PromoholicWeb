/**
 * Work — the featured portfolio grid (designs & videos).
 *
 * Design items are simple image cards. Video items show a play button and
 * open a lightweight modal. Replace `videoUrl` in `portfolio.ts` with a real
 * embed URL to make the player live — the modal already renders an <iframe>.
 */
import { useState } from 'react';
import { Play, X, ArrowUpRight } from 'lucide-react';
import { workItems, type WorkItem } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';

export function Work() {
  const [activeVideo, setActiveVideo] = useState<WorkItem | null>(null);

  return (
    <section data-ev-id="ev_b822163d60" id="work" className="scroll-mt-20 bg-surface-alt py-20 md:py-28">
			<div data-ev-id="ev_cbf2ddc9ba" className="mx-auto max-w-7xl px-6">
				<div data-ev-id="ev_6e0a5154ac" className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
					<SectionHeading
            label="Selected work"
            title="Designs & videos that deliver"
            intro="A snapshot of the brands we have helped look sharper, sound louder and grow faster." />

				</div>

				<div data-ev-id="ev_3d139e9dfd" className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{workItems.map((item) =>
          <article data-ev-id="ev_4acd286895"
          key={item.id}
          className="group relative overflow-hidden rounded-2xl border border-border bg-white">

							<div data-ev-id="ev_c7d7761d37" className="relative aspect-[4/3] overflow-hidden">
								<img data-ev-id="ev_8f4d8c17c9"
              src={item.image}
              alt={`${item.client} — ${item.title}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />

								<div data-ev-id="ev_69f68ae03b" className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

								{/* Video play button */}
								{item.type === 'video' &&
              <button data-ev-id="ev_701c9bf2ef"
              type="button"
              onClick={() => setActiveVideo(item)}
              aria-label={`Play ${item.title}`}
              className="absolute inset-0 flex items-center justify-center">

										<span data-ev-id="ev_273cefbb38" className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-brand shadow-lg transition-transform duration-300 group-hover:scale-110">
											<Play size={26} className="ml-1" fill="currentColor" />
										</span>
									</button>
              }

								{/* Type badge */}
								<span data-ev-id="ev_7b4c5ccbc6" className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink">
									{item.type === 'video' ? 'Video' : 'Design'}
								</span>
							</div>

							<div data-ev-id="ev_ba8397ea75" className="p-5">
								<p data-ev-id="ev_7f735b0183" className="text-xs font-semibold uppercase tracking-wide text-brand">{item.category}</p>
								<h3 data-ev-id="ev_e49c9c771c" className="mt-1.5 font-display text-lg font-bold text-ink">{item.title}</h3>
								<p data-ev-id="ev_31ef6812f5" className="mt-1 text-sm text-ink-soft">{item.client}</p>
							</div>
						</article>
          )}
				</div>

				<div data-ev-id="ev_583d294a98" className="mt-12 flex justify-center">
					<a data-ev-id="ev_5663ea5fc7"
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white">

						Have a project in mind?
						<ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
					</a>
				</div>
			</div>

			{/* Video lightbox */}
			{activeVideo &&
      <div data-ev-id="ev_a5f9816ee4"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4 backdrop-blur"
      onClick={() => setActiveVideo(null)}
      role="dialog"
      aria-modal="true">

					<div data-ev-id="ev_4b539cda78" className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
						<button data-ev-id="ev_14b865ce87"
          type="button"
          onClick={() => setActiveVideo(null)}
          className="absolute -top-11 right-0 flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white">

							Close <X size={18} />
						</button>
						<div data-ev-id="ev_392f2c0cfb" className="aspect-video overflow-hidden rounded-xl bg-black">
							{activeVideo.videoUrl && activeVideo.videoUrl !== '#' ?
            <iframe data-ev-id="ev_36651ffdac"
            src={activeVideo.videoUrl}
            title={activeVideo.title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen /> :


            <div data-ev-id="ev_bddc654189" className="flex h-full flex-col items-center justify-center gap-2 text-center text-white/70">
									<Play size={40} className="text-brand" />
									<p data-ev-id="ev_b626138b24" className="font-display text-lg font-bold text-white">{activeVideo.title}</p>
									<p data-ev-id="ev_1975776d1e" className="max-w-sm text-sm">
										Add a real embed URL in <code data-ev-id="ev_ddf8df4a35" className="text-brand">portfolio.ts</code> to play this video.
									</p>
								</div>
            }
						</div>
					</div>
				</div>
      }
		</section>);

}