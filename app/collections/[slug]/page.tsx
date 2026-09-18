import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Header, FloatingActions } from "../../ui";
import { SiteFooter } from "../../components/site-footer";
import { products } from "../../data";
import { PieceGallery } from "./piece-gallery";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return products.map((piece) => ({ slug: piece.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const piece = products.find((item) => item.slug === slug);
  return piece
    ? {
        title: `${piece.name} | Nepora Exports`,
        description: `Discover ${piece.name}, a ${piece.material.toLowerCase()} in the Nepora Exports collection.`,
        alternates: { canonical: piece.href },
        openGraph: { images: [piece.image] },
      }
    : {};
}

export default async function CollectionPiecePage({ params }: Props) {
  const { slug } = await params;
  const piece = products.find((item) => item.slug === slug);
  if (!piece) notFound();

  return (
    <>
      <Header />
      <main className="product-detail container">
        <Link className="product-back" href="/collections">
          <ArrowLeft size={17} /> Back to collection
        </Link>
        <div className="product-detail-grid">
          <PieceGallery images={piece.images} name={piece.name} />
          <div className="product-detail-copy">
            <span className="eyebrow">
              NEPORA EXPORTS / {piece.category.toUpperCase()}
            </span>
            <h1>{piece.name}</h1>
            <p className="product-detail-material">{piece.material}</p>
            <p className="product-detail-description">
              A considered Pashmina layer with a timeless presence. The details
              of each piece offer a closer look at textile artistry and the
              character of handwork.
            </p>
            <div className="product-detail-notes">
              <p>
                Explore the material, pattern, and drape that give this piece
                its unique expression.
              </p>
            </div>
            <Link className="solid-button" href="/contact">
              Ask Us About This Piece <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
