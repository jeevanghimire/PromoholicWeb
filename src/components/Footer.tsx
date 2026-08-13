/**
 * Footer — brand mark, quick nav and copyright.
 */
import { Wordmark } from '../components/Wordmark';

const LINKS = [
{ label: 'Work', href: '#work' },
{ label: 'Services', href: '#services' },
{ label: 'Clients', href: '#clients' },
{ label: 'About', href: '#about' },
{ label: 'Contact', href: '#contact' }];


export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer data-ev-id="ev_492e262b31" className="border-t border-border bg-white">
			<div data-ev-id="ev_1449c863b1" className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
				<Wordmark tone="ink" className="text-lg" />

				<nav data-ev-id="ev_ce0ffc3174" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
					{LINKS.map((link) =>
          <a data-ev-id="ev_e144361a96" key={link.href} href={link.href} className="text-sm text-ink-soft transition-colors hover:text-brand">
							{link.label}
						</a>
          )}
				</nav>

				<p data-ev-id="ev_8ff1286c62" className="text-xs text-ink-soft">© {year} Promoholic. All rights reserved.</p>
			</div>
		</footer>);

}