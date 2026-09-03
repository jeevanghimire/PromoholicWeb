
import { useState, type FormEvent } from 'react';
import { Mail, Phone, Send, Camera, MessageSquare } from 'lucide-react';
import { Wordmark } from './Wordmark';

export function Contact() {
	const [sent, setSent] = useState(false);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// TODO: replace with a real submission handler.
		setSent(true);
	};

	return (
		<section data-ev-id="ev_c2acefaf3d" id="contact" className="scroll-mt-20 bg-ink py-20 text-white md:py-28">
			<div data-ev-id="ev_1cb11e7492" className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
				{/* Left — pitch */}
				<div data-ev-id="ev_5a85660650">
					<span data-ev-id="ev_406dd3baa6" className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Let&apos;s create</span>
					<h2 data-ev-id="ev_0c383bc8df" className="mt-3 font-display text-4xl font-black leading-tight sm:text-5xl text-balance">
						Got a brand to promote? Let&apos;s make it addictive.
					</h2>
					<p data-ev-id="ev_711157eb17" className="mt-5 max-w-md text-base leading-relaxed text-white/70 text-pretty">
						Tell us about your project and we will get back to you within one business day.
					</p>

					<div data-ev-id="ev_5f4dcef2d9" className="mt-8 flex flex-col gap-4">
						<a data-ev-id="ev_e3513b0b39" href="mailto:promoholicofficial@gmail.com" className="flex items-center gap-3 text-sm text-white/80 hover:text-brand">
							<Mail size={18} className="text-brand" /> promoholicofficial@gmail.com
						</a>
						<a data-ev-id="ev_01ecb7065d" href="tel:+9779860094185" className="flex items-center gap-3 text-sm text-white/80 hover:text-brand">
							<Phone size={18} className="text-brand" /> +977 9860094185
						</a>
						<a data-ev-id="ev_whatsapp" href="https://wa.me/9779860094185" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-white/80 hover:text-brand">
							<MessageSquare size={18} className="text-brand" /> WhatsApp us
						</a>
						<a data-ev-id="ev_a916730aef" href="https://instagram.com" className="flex items-center gap-3 text-sm text-white/80 hover:text-brand">
							<Camera size={18} className="text-brand" /> @promoholic
						</a>
					</div>
				</div>

				{/* Right — form */}
				<div data-ev-id="ev_4d5a1e4e90" className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
					{sent ?
						<div data-ev-id="ev_a40f6ce981" className="flex h-full min-h-[300px] flex-col items-center justify-center text-center">
							<div data-ev-id="ev_28c4231af9" className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white">
								<Send size={22} />
							</div>
							<h3 data-ev-id="ev_3a58331390" className="mt-4 font-display text-2xl font-bold">Message sent!</h3>
							<p data-ev-id="ev_3e58f694b5" className="mt-2 text-sm text-white/70">Thanks for reaching out — we&apos;ll be in touch soon.</p>
						</div> :

						<form data-ev-id="ev_5f0d5fe752" onSubmit={handleSubmit} className="flex flex-col gap-4">
							<div data-ev-id="ev_b14c676d57" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
								<Field label="Name" name="name" placeholder="Your name" required />
								<Field label="Email" name="email" type="email" placeholder="you@email.com" required />
							</div>
							<Field label="Company" name="company" placeholder="Brand / company" />
							<div data-ev-id="ev_4db1b23ff7" className="flex flex-col gap-1.5">
								<label data-ev-id="ev_733674dad8" htmlFor="message" className="text-xs font-medium text-white/70">
									Project details
								</label>
								<textarea data-ev-id="ev_1c989b1eca"
									id="message"
									name="message"
									rows={4}
									required
									placeholder="Tell us what you're building..."
									className="resize-none rounded-lg bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none ring-1 ring-white/10 focus:ring-brand" />

							</div>
							<button data-ev-id="ev_7b6532c94d"
								type="submit"
								className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark">

								Send message <Send size={16} />
							</button>
						</form>
					}
				</div>
			</div>

			<div data-ev-id="ev_17747a416e" className="mx-auto mt-16 max-w-7xl px-6">
				<Wordmark tone="light" className="text-4xl opacity-10 sm:text-6xl" />
			</div>
		</section>);

}

/** Small labelled input used inside the contact form. */
function Field({
	label,
	name,
	type = 'text',
	placeholder,
	required

}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean; }) {
	return (
		<div data-ev-id="ev_26066969b2" className="flex flex-col gap-1.5">
			<label data-ev-id="ev_7d03ef1f00" htmlFor={name} className="text-xs font-medium text-white/70">
				{label}
			</label>
			<input data-ev-id="ev_7dd995ec7b"
				id={name}
				name={name}
				type={type}
				required={required}
				placeholder={placeholder}
				className="rounded-lg bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none ring-1 ring-white/10 focus:ring-brand" />

		</div>);

}