import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { SiteFooter } from '../components/site-footer';
import { siteConfig } from '../data';
import { FloatingActions, Header } from '../ui';
import { ContactForm } from './contact-form';

export const metadata: Metadata = {
  title: 'Contact Us | Nepora Exports',
  description: 'Get in touch with Nepora Exports about Pashmina, craftsmanship, collection pieces, or collaborations.',
  alternates: { canonical: '/contact' },
  openGraph: { title: 'Contact Nepora Exports', description: 'We would love to hear from you.', url: '/contact', images: ['/images/home/editorial-1.webp'] },
};

export default function ContactPage() {
  return <>
    <Header />
    <main>
      <section className="inner-hero contact-hero"><div className="inner-hero-copy"><span className="eyebrow">WE ARE HERE TO HELP</span><h1>Let&apos;s begin<br /><em>a conversation.</em></h1><p>Questions about a piece, its making, or the Nepora Exports world? We would be glad to hear from you.</p></div><div className="inner-hero-image image-frame"><Image src="/images/home/editorial-1.webp" alt="Close-up of a folded burgundy Pashmina shawl" fill priority sizes="(max-width: 760px) 100vw, 50vw" className="object-cover" /></div></section>

      <section className="contact-main section-pad container"><div className="contact-details"><span className="eyebrow">GET IN TOUCH</span><h2>Every question<br /><em>is welcome.</em></h2><p>Whether you are choosing your first Pashmina or looking for a special piece, reach out and tell us what you have in mind.</p><div className="contact-methods"><div><Mail size={21} aria-hidden="true"/><div><h3>Email us</h3><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div></div><div><Phone size={21} aria-hidden="true"/><div><h3>Call us</h3><a href={`tel:${siteConfig.phone.replaceAll(' ','')}`}>{siteConfig.phone}</a></div></div><div><MapPin size={21} aria-hidden="true"/><div><h3>Find us</h3><p>Kathmandu, Nepal</p></div></div></div><p className="contact-response">For the quickest response, email us with the piece or collection you are interested in.</p></div><div className="contact-form-panel"><span className="eyebrow">SEND AN ENQUIRY</span><h2>Write to us</h2><ContactForm /></div></section>

      <section className="contact-help section-pad"><div className="container"><div><span className="eyebrow">A LITTLE MORE TO KNOW</span><h2>Looking for an answer?</h2><p>Our frequently asked questions cover Pashmina care, craftsmanship, styling, and more.</p></div><Link className="outline-button" href="/#faq">Explore FAQs <ArrowUpRight size={17} /></Link></div></section>
    </main>
    <SiteFooter />
    <FloatingActions />
  </>;
}

