import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { SiteFooter } from '../components/site-footer';
import { FloatingActions, Header } from '../ui';

export const metadata: Metadata = {
  title: 'About Us | Nepora Exports',
  description: 'Discover the ideas, hands, and patient craft behind Nepora Exports Pashmina.',
  alternates: { canonical: '/about' },
  openGraph: { title: 'About Nepora Exports', description: 'A story of craft, care, and Pashmina made to last.', url: '/about', images: ['/images/home/editorial-2.webp'] },
};

const values = [
  { number: '01', title: 'Made with intention', text: 'We choose considered forms, thoughtful details, and a pace that gives every piece room to become its best.' },
  { number: '02', title: 'Honouring the hand', text: 'The skill of a maker is visible in the small variations that make handwork unmistakably human.' },
  { number: '03', title: 'Kept close for years', text: 'Our hope is simple: that a piece becomes more meaningful with every season it is worn.' },
];

export default function AboutPage() {
  return <>
    <Header />
    <main>
      <section className="inner-hero about-hero">
        <div className="inner-hero-copy">
          <span className="eyebrow">THE STORY OF NEPORA EXPORTS</span>
          <h1>Beautiful things<br /><em>take time.</em></h1>
          <p>An ode to the hand, the heritage, and the quiet luxury of something made to be kept.</p>
        </div>
        <div className="inner-hero-image image-frame"><Image src="/images/home/editorial-3.webp" alt="Model wrapped in an ivory Pashmina beside sandstone architecture" fill priority sizes="(max-width: 760px) 100vw, 50vw" className="object-cover" /></div>
      </section>

      <section className="about-intro section-pad container">
        <span className="eyebrow">OUR POINT OF VIEW</span>
        <h2>We believe a piece can carry <em>more than warmth.</em></h2>
        <p>Nepora Exports is a home for slow, expressive Pashmina. Inspired by the rich vocabulary of Himalayan textile traditions, we bring attention to the people and processes behind every considered layer. Our collections are an invitation to slow down and notice the details.</p>
        <i className="divider" />
      </section>

      <section className="about-story section-pad">
        <div className="container about-story-grid">
          <div className="about-story-photo image-frame"><Image src="/images/home/editorial-2.webp" alt="Hands working carefully at a traditional weaving loom" fill sizes="(max-width: 760px) 100vw, 50vw" className="object-cover" /></div>
          <div className="about-story-copy"><span className="eyebrow">ROOTED IN CRAFT</span><h2>The hands behind<br /><em>every thread</em></h2><p>In a handwoven piece, time becomes texture. The rhythm of the loom, the eye for colour, and the final finishing touches all leave a trace of the person who made it.</p><p>We share these stories because the care behind a Pashmina deserves to be seen as clearly as its beauty.</p><Link className="text-link" href="/#artisans">Meet Our Artisans <ArrowUpRight size={17} /></Link></div>
        </div>
      </section>

      <section className="about-values section-pad container"><div className="section-heading"><span className="eyebrow">WHAT GUIDES US</span><h2>Our way of making</h2><i /></div><div className="about-values-grid">{values.map(value => <article key={value.number}><span className="about-value-number">{value.number}</span><h3>{value.title}</h3><p>{value.text}</p></article>)}</div></section>

      <section className="about-image-band"><Image src="/images/home/editorial-4.webp" alt="Close detail of a richly patterned burgundy textile" fill sizes="100vw" className="object-cover" /><div><span className="eyebrow">AN ENDURING CONNECTION</span><p>From one pair of hands<br />to another.</p></div></section>

      <section className="about-cta section-pad container"><span className="eyebrow">CONTINUE THE STORY</span><h2>Find a piece that feels like yours.</h2><p>Explore the collection or get in touch to learn more about Nepora Exports.</p><div><Link className="solid-button" href="/#crafts">Explore Our Crafts <ArrowUpRight size={17} /></Link><Link className="outline-button" href="/contact">Contact Us <ArrowUpRight size={17} /></Link></div></section>
    </main>
    <SiteFooter />
    <FloatingActions />
  </>;
}

