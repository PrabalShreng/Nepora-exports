import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header, FloatingActions } from '../ui';
import { SiteFooter } from '../components/site-footer';
import { products } from '../data';

export const metadata: Metadata = {
  title: 'Pashmina Collections | Nepora Exports',
  description: 'Explore Nepora Exports Pashmina shawls, wraps, and scarves through a visual collection of handcrafted pieces.',
  alternates: { canonical: '/collections' },
};

type SearchParams = Promise<{ q?: string; category?: string; sort?: string }>;
const categories = ['All', 'Shawls', 'Wraps', 'Scarves', 'Men'];

export default async function CollectionsPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const query = (params.q ?? '').trim().toLowerCase();
  const category = categories.includes(params.category ?? '') ? params.category! : 'All';
  const sort = params.sort ?? 'featured';
  const filtered = products.filter(piece => (category === 'All' || piece.category === category) && (!query || `${piece.name} ${piece.material} ${piece.category}`.toLowerCase().includes(query)));
  if (sort === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

  return <>
    <Header />
    <main>
      <section className="shop-heading section-pad"><div className="container"><span className="eyebrow">THE NEPORA EXPORTS COLLECTION</span><h1>Pieces to keep.</h1><p>Discover layers shaped by texture, detail, and a love for the handmade.</p></div></section>
      <section className="shop-content section-pad container">
        <div className="shop-toolbar"><div><span>{filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}</span><div className="shop-category-links">{categories.map(item => <Link key={item} aria-current={item === category ? 'page' : undefined} href={item === 'All' ? '/collections' : `/collections?category=${item}`}>{item}</Link>)}</div></div><form action="/collections" method="get"><label htmlFor="collection-search">Search</label><input id="collection-search" name="q" type="search" defaultValue={params.q ?? ''} placeholder="Search pieces" /><label htmlFor="collection-sort">Sort</label><select id="collection-sort" name="sort" defaultValue={sort}><option value="featured">Featured</option><option value="name">Name</option></select>{category !== 'All' && <input type="hidden" name="category" value={category} />}<button type="submit">Apply</button></form></div>
        {filtered.length ? <div className="shop-grid">{filtered.map(piece => <article className="shop-card" key={piece.id}><Link href={piece.href} className="image-frame"><Image src={piece.image} alt={piece.alt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover" /></Link><span className="eyebrow">{piece.category} / {piece.material}</span><h2><Link href={piece.href}>{piece.name}</Link></h2><Link className="text-link" href={piece.href}>View Piece →</Link></article>)}</div> : <div className="shop-empty"><h2>No pieces found</h2><p>Try another search or browse the full collection.</p><Link className="outline-button" href="/collections">View All Pieces</Link></div>}
      </section>
    </main>
    <SiteFooter />
    <FloatingActions />
  </>;
}

