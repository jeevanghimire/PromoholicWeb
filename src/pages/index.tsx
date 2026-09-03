/**
 * Index — the single-page Promoholic portfolio.
 * Each section is a self-contained component (see `src/components/`).
 * Reorder or remove sections here freely; content is edited in
 * `src/data/portfolio.ts`.
 */
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { ClientsGrid } from '../components/ClientsGrid';
import { Achievements } from '../components/Achievements';
import { Process } from '../components/Process';
import { Work } from '../components/Work';
import { Contact } from '../components/Contacts';
import { Footer } from '../components/Footer';

export default function Index() {
	return (
		<div data-ev-id="ev_58ba824b00" className="min-h-screen bg-white font-sans text-ink">
			<Navbar />
			<main data-ev-id="ev_e6f659a1b0">
				<Hero />
				<About />
				<Services />
				<ClientsGrid />
				<Achievements />
				<Process />
				<Work />
				<Contact />
			</main>
			<Footer />
		</div>);
}