import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  Header,
  HeroMedia,
  Carousel,
  Crafts,
  ProductCarousel,
  Faq,
  FloatingActions,
} from "./ui";
import { SiteFooter } from "./components/site-footer";
import {
  siteConfig,
  recognition,
  crafts,
  heritage,
  featured,
  products,
  artisans,
  articles,
  faqs,
} from "./data";
const img = (src: string, alt: string) => (
  <Image
    src={src}
    alt={alt}
    fill
    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 45vw, 30vw"
    className="object-cover"
  />
);
const title = (tag: string, name: string) => (
  <div className="section-heading">
    <span className="eyebrow">{tag}</span>
    <h2>{name}</h2>
    <i />
  </div>
);
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" aria-label="The art of handwoven Pashmina">
          <HeroMedia />
          <div className="hero-shade" />
          <div className="hero-copy">
            <span className="eyebrow">HANDWOVEN IN THE HIMALAYAS</span>
            <p>
              Where every thread
              <br />
              <em>holds a story.</em>
            </p>
            <a href="#crafts">
              Explore the collection <ArrowUpRight size={17} />
            </a>
          </div>
          <span className="hero-index">
            01 / 03 &nbsp; — &nbsp; THE ART OF SLOW LUXURY
          </span>
        </section>
        <section className="intro section-pad container">
          <span className="eyebrow">AN HEIRLOOM, NEVER AN ORDINARY WRAP</span>
          <h1>
            Handmade with patience.
            <br />
            <em>Worn for a lifetime.</em>
          </h1>
          <p>
            At Nepora Exports, we honour the quiet artistry of Himalayan
            weaving. Each Pashmina begins with remarkable fibre and is finished
            by hands that have known this craft for generations.
          </p>
          <i className="divider" />
        </section>
        {/* <section className="press" aria-label="Recognized by">
          <span>RECOGNIZED BY</span>
          <div className="press-window">
            <div className="press-track">
              {[0, 1].map((n) => (
                <div className="press-set" aria-hidden={n === 1} key={n}>
                  <b>ATELIER</b>
                  <b>THE JOURNAL</b>
                  <b>OBJECT &amp; FORM</b>
                  <b>MAISON</b>
                  <b>CRAFT REVIEW</b>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        <section className="recognition section-pad container">
          {title("A STORY BEYOND THE LOOM", "The beauty of being seen")}
          <Carousel
            label="Recognition stories"
            kind="recognition"
            items={recognition.map((v, i) => (
              <article className="recognition-slide" key={v.title}>
                <div className="recognition-image image-frame">
                  {img(v.image, v.alt)}
                </div>
                <div className="recognition-copy">
                  <span className="eyebrow">
                    {v.year} / THE NEPORA EXPORTS JOURNAL
                  </span>
                  <h3>{v.title}</h3>
                  <p>{v.description}</p>
                  <span className="slide-number">
                    {String(i + 1).padStart(2, "0")} /{" "}
                    {String(recognition.length).padStart(2, "0")}
                  </span>
                </div>
              </article>
            ))}
          />
        </section>
        <section className="crafts section-pad" id="crafts">
          <div className="container">
            {title("DISCOVER THE COLLECTION", "Our Crafts")}
            <Crafts data={crafts} />
          </div>
        </section>
        <section className="heritage section-pad container" id="heritage">
          <div className="heritage-title">
            <span className="back-word" aria-hidden="true">
              HERITAGE
            </span>
            {title("THE ART OF THE EXCEPTIONAL", "One-of-a-Kind Pashmina")}
            <p>
              Six expressions of an enduring craft, each with its own language
              of detail.
            </p>
          </div>
          <div className="heritage-grid">
            {heritage.map((v, i) => (
              <article
                className={`heritage-card offset-${i % 3}`}
                key={v.title}
              >
                <a href={v.href} className="image-frame heritage-image">
                  {img(v.image, v.alt)}
                  <span className="sr-only">Explore {v.title}</span>
                </a>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
                <a className="text-link" href={v.href}>
                  View Collection <ArrowUpRight size={17} />
                </a>
              </article>
            ))}
          </div>
        </section>
        {/* <section className="featured section-pad" id="featured">
          <div className="container">
            <div className="featured-heading">
              <span className="eyebrow">BEYOND THE SHAWL</span>
              <h2>Living heritage</h2>
              <p>Objects that carry the warmth of a human hand.</p>
            </div>
            <div className="featured-grid">
              {featured.map((v) => (
                <article className="featured-card" key={v.title}>
                  <a href={v.href} className="featured-image image-frame">
                    {img(v.image, v.alt)}
                    <span className="sr-only">Explore {v.title}</span>
                  </a>
                  <div>
                    <span className="eyebrow">THE NEPORA EXPORTS EDIT</span>
                    <h3>{v.title}</h3>
                    <p>{v.description}</p>
                    <a className="text-link" href={v.href}>
                      Explore Collection <ArrowUpRight size={17} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section> */}
        <section className="products section-pad container" id="products">
          {title("A CLOSER LOOK", "Selected Pashmina")}
          <ProductCarousel products={products} />
        </section>
        <section className="artisans section-pad" id="artisans">
          <div className="container">
            {title("THE HANDS BEHIND THE HEIRLOOM", "Our Artisans")}
            <p className="section-intro">
              From the first careful spin to the final flourish, our artisans
              give each piece its character. Their patience is woven into every
              detail.
            </p>
            <Carousel
              label="Artisan portraits"
              kind="cards"
              items={artisans.map((v) => (
                <article className="artisan-card" key={v.name}>
                  <div className="portrait image-frame">
                    {img(v.image, v.alt)}
                  </div>
                  <h3>{v.name}</h3>
                  <p>{v.craft}</p>
                </article>
              ))}
            />
            <a className="outline-button" href="#story">
              Meet Our Artisans <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
        <section className="editorial section-pad container" id="editorial">
          <div className="editorial-top">
            {title("NOTES FROM OUR WORLD", "The Editorial")}
            <a className="text-link" href="#editorial">
              View All Editorials <ArrowUpRight size={17} />
            </a>
          </div>
          <Carousel
            label="Editorial articles"
            kind="cards"
            items={articles.map((v) => (
              <article className="article-card" key={v.title}>
                <a href={v.href} className="article-image image-frame">
                  {img(v.image, v.alt)}
                  <span className="sr-only">Read {v.title}</span>
                </a>
                <span className="eyebrow">
                  {v.category} — {v.date}
                </span>
                <h3>{v.title}</h3>
                <p>{v.excerpt}</p>
                <a className="text-link" href={v.href}>
                  Read Story <ArrowUpRight size={17} />
                </a>
              </article>
            ))}
          />
        </section>
        <section className="faq section-pad" id="faq">
          <div className="container">
            {title("A LITTLE MORE TO KNOW", "Frequently Asked Questions")}
            <Faq items={faqs} />
          </div>
        </section>
        <section className="story section-pad container" id="story">
          <span className="eyebrow">OUR STORY</span>
          <h2>Art of Pashmina</h2>
          <p>
            We believe true luxury is measured in time, care, and connection.
            Nepora Exports brings together timeless Himalayan techniques and a
            considered modern point of view, creating pieces to treasure and
            pass on.
          </p>
        </section>
      </main>
      <SiteFooter />
      <FloatingActions />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((v) => ({
              "@type": "Question",
              name: v.question,
              acceptedAnswer: { "@type": "Answer", text: v.answer },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: "Nepora Exports",
                url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
                email: siteConfig.email,
              },
              {
                "@type": "WebSite",
                name: "Nepora Exports",
                url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
              },
            ],
          }),
        }}
      />
    </>
  );
}
