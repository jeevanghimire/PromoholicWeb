    /**
 * Navbar — fixed top navigation for the single-page site.
 * Becomes solid white with a subtle border once the user scrolls.
 * Includes a responsive mobile menu.
 */
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Wordmark } from '../components/Wordmark';

const NAV_LINKS = [
{ label: 'Work', href: '#work' },
{ label: 'Services', href: '#services' },
{ label: 'Clients', href: '#clients' },
{ label: 'About', href: '#about' },
{ label: 'Contact', href: '#contact' }];


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header data-ev-id="ev_e9deae08a3"
    className={[
    'fixed inset-x-0 top-0 z-50 transition-all duration-300',
    scrolled ? 'bg-white/90 backdrop-blur border-b border-border' : 'bg-transparent'].
    join(' ')}>

			<nav data-ev-id="ev_98b36315f7" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
				<a data-ev-id="ev_0b5ab6d6e5" href="#home" aria-label="Promoholic home">
					<Wordmark tone={scrolled ? 'ink' : 'ink'} className="text-xl" />
				</a>

				{/* Desktop links */}
				<div data-ev-id="ev_b9860bc0f7" className="hidden items-center gap-8 md:flex">
					{NAV_LINKS.map((link) =>
          <a data-ev-id="ev_32d1aca404"
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-ink-soft transition-colors hover:text-brand">

							{link.label}
						</a>
          )}
					<a data-ev-id="ev_e5ffd0d6dd"
          href="#contact"
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand">

						Start a project
					</a>
				</div>

				{/* Mobile toggle */}
				<button data-ev-id="ev_5be441dd78"
        type="button"
        className="md:hidden text-ink"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu">

					{open ? <X size={24} /> : <Menu size={24} />}
				</button>
			</nav>

			{/* Mobile menu */}
			{open &&
      <div data-ev-id="ev_0a91026cc3" className="md:hidden border-t border-border bg-white">
					<div data-ev-id="ev_c4283622bf" className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
						{NAV_LINKS.map((link) =>
          <a data-ev-id="ev_1460ed9d3d"
          key={link.href}
          href={link.href}
          onClick={() => setOpen(false)}
          className="rounded-lg px-2 py-3 text-base font-medium text-ink transition-colors hover:bg-brand-soft hover:text-brand">

								{link.label}
							</a>
          )}
						<a data-ev-id="ev_78929aa94d"
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-2 rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-white">

							Start a project
						</a>
					</div>
				</div>
      }
		</header>);

}