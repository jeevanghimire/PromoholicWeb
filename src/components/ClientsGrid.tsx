/**
 * ClientsGrid — the "brands we have worked with" section.
 * Client logos scroll horizontally in a continuous full‑width marquee.
 */
import { clients } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';


export function ClientsGrid() {
  const duplicated = [...clients, ...clients]; // duplicate for seamless loop
  return (
    <section data-ev-id="ev_cfa2f85c25" id="clients" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="w-full px-6">
        <SectionHeading
          align="center"
          label="Trusted by"
          title="Brands we have worked with"
          intro="From hospitality and healthcare to food and beverage — we are proud to partner with brands across every sector." />

        <div className="mt-14 overflow-hidden">
          <div className="flex animate-marquee" style={{ width: 'max-content' }}>
            {duplicated.map((client, idx) => {
              const isPabitra = client.name === "Pabitra's Ice Cream";
              return (
                <div
                  key={`${client.name}-${idx}`}
                  className="flex items-center justify-center min-w-[260px] px-8 py-6"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={`max-h-24 w-auto object-contain transition-all duration-300 ${
                      isPabitra ? 'max-h-32' : ''
                    } opacity-100 hover:scale-110`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>);
}