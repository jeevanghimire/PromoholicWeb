/**
 * Services — grid of what Promoholic offers. Data comes from `portfolio.ts`.
 */
import { services } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';

export function Services() {
  return (
    <section data-ev-id="ev_de954eac59" id="services" className="scroll-mt-20 bg-white py-20 md:py-28">
			<div data-ev-id="ev_578ac39b42" className="mx-auto max-w-7xl px-6">
				<SectionHeading
          label="What we do"
          title="Everything your brand needs to stand out"
          intro="From the first sketch to the final export, we handle design, video and everything in between under one roof." />


				<div data-ev-id="ev_dc759530ee" className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{services.map((service) => {
            const Icon = service.icon;
            return (
              <article data-ev-id="ev_d55aea2d51"
              key={service.title}
              className="group rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-xl hover:shadow-brand/10">

								<div data-ev-id="ev_330d01bb2d" className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
									<Icon size={22} />
								</div>
								<h3 data-ev-id="ev_cdace1140d" className="mt-5 font-display text-xl font-bold text-ink">{service.title}</h3>
								<p data-ev-id="ev_f87e1853ee" className="mt-2 text-sm leading-relaxed text-ink-soft">{service.description}</p>
							</article>);

          })}
				</div>
			</div>
		</section>);

}