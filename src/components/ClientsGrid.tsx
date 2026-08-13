/**
 * ClientsGrid — the "brands we have worked with" section.
 * Client logos are displayed with a subtle hover lift effect.
 */
import { clients } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';


export function ClientsGrid() {
  return (
    <section data-ev-id="ev_cfa2f85c25" id="clients" className="scroll-mt-20 bg-white py-20 md:py-28">
			<div data-ev-id="ev_ae0ed948b5" className="mx-auto max-w-7xl px-6">
				<SectionHeading
          align="center"
          label="Trusted by"
          title="Brands we have worked with"
          intro="From hospitality and healthcare to food and beverage — we are proud to partner with brands across every sector." />


				<div data-ev-id="ev_167bf1a9b3" className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
					{clients.map((client) =>
          <div data-ev-id="ev_6b3810b36a"
          key={client.name}
          className="group flex items-center justify-center rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5">

							<img data-ev-id="ev_7238c5865b"
            src={client.logo}
            alt={client.name}
            className="max-h-20 w-auto object-contain grayscale opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100" />

						</div>
          )}
				</div>
			</div>
		</section>);

}