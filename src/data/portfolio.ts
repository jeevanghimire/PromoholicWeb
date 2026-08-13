
import type { LucideIcon } from 'lucide-react';
import { Palette, Clapperboard, Megaphone, Sparkles, Camera, PenTool } from 'lucide-react';
import workBranding from '../assets/generated/work-branding.png';
import workSocial from '../assets/generated/work-social.png';
import workVideo from '../assets/generated/work-video.png';
import workPackaging from '../assets/generated/work-packaging.png';
import workPrint from '../assets/generated/work-print.png';
import workMotion from '../assets/generated/work-motion.png';

// Client logos
import logoSiddhartha from '../assets/uploads/logo-siddhartha.png';
import logoTigerPalace from '../assets/uploads/logo-tiger-palace.png';
import logoMayadevi from '../assets/uploads/logo-mayadevi.png';
import logoVeganBite from '../assets/uploads/logo-vegan-bite.png';
import logoHotelPalm from '../assets/uploads/logo-hotel-palm.png';
import logoPabitra from '../assets/uploads/logo-pabitra.png';
import logoGardenCafe from '../assets/uploads/logo-garden-cafe.png';
import logoAlQayyoom from '../assets/uploads/logo-al-qayyoom.png';

/* -------------------------------------------------------------------------- */
/* Types                                                                       */
/* -------------------------------------------------------------------------- */

export interface Service {
	title: string;
	description: string;
	icon: LucideIcon;
}

export type WorkType = 'design' | 'video';

export interface WorkItem {
	id: string;
	title: string;
	client: string;
	category: string;
	type: WorkType;
	image: string;
	description: string;
	/** Only for `type: 'video'` — embed URL for the lightbox. */
	videoUrl?: string;
}

export interface Client {
	name: string;
	sector: string;
	location?: string;
	/** Brand colour used on hover for the text logo card. */
	accent: string;
	/** Logo image import for the client. */
	logo: string;
}

export interface Stat {
	label: string;
	value: string;
}

/* -------------------------------------------------------------------------- */
/* Services                                                                    */
/* -------------------------------------------------------------------------- */

export const services: Service[] = [
	{
		title: 'Brand Identity',
		description: 'Logos, visual systems and guidelines that make brands instantly recognisable.',
		icon: PenTool,
	},
	{
		title: 'Graphic Design',
		description: 'Posters, packaging, menus and print collateral designed to sell and delight.',
		icon: Palette,
	},
	{
		title: 'Video Production',
		description: 'Brand films, ads and promos — from concept and shoot to the final cut.',
		icon: Clapperboard,
	},
	{
		title: 'Social Media',
		description: 'Scroll-stopping content and campaigns that grow audiences and engagement.',
		icon: Megaphone,
	},
	{
		title: 'Photography',
		description: 'Product, food and lifestyle photography that makes every frame count.',
		icon: Camera,
	},
	{
		title: 'Motion Graphics',
		description: 'Animated reels, logo stings and explainers that bring stories to life.',
		icon: Sparkles,
	},
];

/* -------------------------------------------------------------------------- */
/* Featured work (designs & videos)                                            */
/* -------------------------------------------------------------------------- */

export const workItems: WorkItem[] = [
	{
		id: 'siddhartha-brand-film',
		title: 'Hospitality Brand Film',
		client: 'Siddhartha Hospitality',
		category: 'Video Production',
		type: 'video',
		image: workVideo,
		description: 'A cinematic brand film capturing “Hospitality from the Heart”.',
		videoUrl: '#', // TODO: replace with real embed URL
	},
	{
		id: 'vegan-bite-packaging',
		title: 'Packaging & Identity',
		client: 'Vegan Bite Nepal',
		category: 'Branding · Packaging',
		type: 'design',
		image: workPackaging,
		description: 'A fresh, plant-forward identity and packaging system.',
	},
	{
		id: 'tiger-palace-social',
		title: 'Social Campaign',
		client: 'Tiger Palace by Soaltee',
		category: 'Social Media',
		type: 'design',
		image: workSocial,
		description: 'A high-energy social campaign for a luxury resort destination.',
	},
	{
		id: 'garden-cafe-identity',
		title: 'Brand Identity System',
		client: 'Garden Cafe & Restaurant',
		category: 'Brand Identity',
		type: 'design',
		image: workBranding,
		description: 'A wholesome, nature-rooted identity for a garden dining experience.',
	},
	{
		id: 'al-qayyoom-reels',
		title: 'Motion & Reels',
		client: 'Al Qayyoom Biryani',
		category: 'Motion Graphics',
		type: 'video',
		image: workMotion,
		description: 'Appetite-driving motion reels for a signature dum biryani brand.',
		videoUrl: '#', // TODO: replace with real embed URL
	},
	{
		id: 'pabitra-print',
		title: 'Print & Poster Series',
		client: "Pabitra's Ice Cream",
		category: 'Graphic Design',
		type: 'design',
		image: workPrint,
		description: 'A playful, colourful poster series for a beloved ice-cream brand.',
	},
];

/* -------------------------------------------------------------------------- */
/* Clients — brands we have worked with                                        */
/* -------------------------------------------------------------------------- */

export const clients: Client[] = [
	{ name: 'Siddhartha Hospitality', sector: 'Hospitality', accent: '#1f2a63', logo: logoSiddhartha },
	{ name: 'Tiger Palace by Soaltee', sector: 'Resort & Casino', location: 'Bhairahawa', accent: '#c0392b', logo: logoTigerPalace },
	{ name: 'Mayadevi Breast Care Center', sector: 'Healthcare', accent: '#d81b8c', logo: logoMayadevi },
	{ name: 'Vegan Bite Nepal', sector: 'Food & Beverage', accent: '#1f7a34', logo: logoVeganBite },
	{ name: 'Hotel Palm International', sector: 'Hospitality', location: 'by Pipal', accent: '#2f7d3f', logo: logoHotelPalm },
	{ name: "Pabitra's Ice Cream", sector: 'Food & Beverage', accent: '#1f3a93', logo: logoPabitra },
	{ name: 'Garden Cafe & Restaurant', sector: 'Restaurant', accent: '#1f9d55', logo: logoGardenCafe },
	{ name: 'Al Qayyoom Biryani', sector: 'Restaurant', accent: '#d99a1c', logo: logoAlQayyoom },
];

/* -------------------------------------------------------------------------- */
/* Headline stats                                                              */
/* -------------------------------------------------------------------------- */

export const stats: Stat[] = [
	{ value: '50+', label: 'Projects delivered' },
	{ value: '8+', label: 'Happy brands' },
	{ value: '5+', label: 'Years creating' },
	{ value: '100%', label: 'Passion poured in' },
];
