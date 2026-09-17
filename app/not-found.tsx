import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Header, FloatingActions } from './ui';
import { SiteFooter } from './components/site-footer';

export default function NotFound() {
  return <><Header /><main className="not-found-page section-pad container"><span className="eyebrow">PAGE NOT FOUND</span><h1>A thread out of place.</h1><p>We could not find the page you were looking for. Return to the collection and continue exploring.</p><Link href="/collections" className="solid-button">Explore the Collection <ArrowUpRight size={17} /></Link></main><SiteFooter /><FloatingActions /></>;
}

