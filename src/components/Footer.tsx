/**
 * Footer — brand mark, quick nav and copyright.
 */
import { Mail, Phone, MessageSquare } from 'lucide-react';
import logoHorizontal from '../assets/uploads/PromoholicLogo2Line.png';

function InstagramIcon({className}:{className?:string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function FacebookIcon({className}:{className?:string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}
function LinkedinIcon({className}:{className?:string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

const LINKS = [
{ label: 'Work', href: '#work' },
{ label: 'Services', href: '#services' },
{ label: 'Clients', href: '#clients' },
{ label: 'About', href: '#about' },
{ label: 'Contact', href: '#contact' }];




export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer data-ev-id="ev_492e262b31" className="bg-ink text-white">
			<div data-ev-id="ev_1449c863b1" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="md:col-span-1">
						<img src={logoHorizontal} alt="Promoholic" className="h-10 w-auto mb-4" />
						<p className="text-white/70 text-sm leading-relaxed max-w-xs">
							Promoholic — creative studio crafting bold identities, striking designs and scroll‑stopping videos for brands people remember.
						</p>
					</div>

					<nav>
						<h4 className="font-semibold text-lg mb-3">Quick Links</h4>
						<ul className="space-y-2">
							{LINKS.map((link) => (
								<li key={link.href}>
									<a href={link.href} className="text-white/70 hover:text-brand transition-colors text-sm">
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</nav>

					<div>
						<h4 className="font-semibold text-lg mb-3">Contact</h4>
						<ul className="space-y-2 text-white/70 text-sm">
							<li className="flex items-center gap-2">
								<Mail size={14} /> <a href="mailto:promoholicofficial@gmail.com" className="hover:text-brand transition-colors">promoholicofficial@gmail.com</a>
							</li>
							<li className="flex items-center gap-2">
								<Phone size={14} /> <a href="tel:+9779860094185" className="hover:text-brand transition-colors">+977 9860094185</a>
							</li>
							<li className="flex items-center gap-2">
								<MessageSquare size={14} /> <a href="https://wa.me/9779860094185" target="_blank" rel="noreferrer" className="hover:text-brand transition-colors">WhatsApp</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold text-lg mb-3">Follow Us</h4>
						<div className="flex gap-4">
							<a href="https://instagram.com/promoholicofficial" target="_blank" rel="noreferrer" className="text-white/70 hover:text-brand transition-colors">
								<InstagramIcon className="w-6 h-6" />
							</a>
							<a href="https://www.facebook.com/profile.php?id=61570831964417" target="_blank" rel="noreferrer" className="text-white/70 hover:text-brand transition-colors">
								<FacebookIcon className="w-6 h-6" />
							</a>
							<a href="https://www.linkedin.com/company/promoholic" target="_blank" rel="noreferrer" className="text-white/70 hover:text-brand transition-colors">
								<LinkedinIcon className="w-6 h-6" />
							</a>
						</div>
					</div>
				</div>

				<div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
					© {year} Promoholic. All rights reserved.
				</div>
			</div>
		</footer>);
}