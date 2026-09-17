"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Menu,
  Search,
  X,
  ChevronDown,
  Star,
} from "lucide-react";
import { announcements, navigation, siteConfig } from "./data";
export function HeroMedia() {
  const video = useRef<HTMLVideoElement>(null),
    [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (!siteConfig.heroVideo) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    if (!reduce && !connection?.saveData) {
      video.current
        ?.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  }, []);
  if (!siteConfig.heroVideo)
    return (
      <picture>
        <source
          media="(max-width: 639px)"
          srcSet="/Img/IMG-68.jpg"
        />
        <Image
          src="/Img/IMG-68.jpg"
          alt="Model in a plum shawl in a sandstone courtyard"
          fill
          priority
          sizes="100vw"
          className="hero-photo object-cover"
        />
      </picture>
    );
  return (
    <>
      <video
        ref={video}
        className="hero-photo hero-video"
        muted
        loop
        playsInline
        preload="none"
        poster="/images/Img/IMG-67.jpg"
        aria-label="Nepora Exports collection film"
      >
        <source
          src="/images/home/hero-mobile.mp4"
          media="(max-width: 639px)"
          type="video/mp4"
        />
        <source src="/images/home/hero-desktop.mp4" type="video/mp4" />
      </video>
      <button
        className="hero-play"
        type="button"
        onClick={() => {
          if (playing) {
            video.current?.pause();
            setPlaying(false);
          } else video.current?.play().then(() => setPlaying(true));
        }}
        aria-label={playing ? "Pause hero video" : "Play hero video"}
      >
        {playing ? "Pause" : "Play"}
      </button>
    </>
  );
}
type SlideKind = "recognition" | "cards" | "products";
export function Carousel({
  items,
  label,
  kind,
}: {
  items: React.ReactNode[];
  label: string;
  kind: SlideKind;
}) {
  const [ref, api] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!api) return;
    const update = () => setIndex(api.selectedScrollSnap());
    api.on("select", update);
    update();
    return () => {
      api.off("select", update);
    };
  }, [api]);
  return (
    <div
      className={`carousel carousel-${kind}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div className="carousel-viewport" ref={ref}>
        <div className="carousel-track">
          {items.map((item, i) => (
            <div
              className="carousel-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${items.length}`}
              key={i}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-nav">
        <span>
          {String(index + 1).padStart(2, "0")}{" "}
          <span className="muted">
            / {String(items.length).padStart(2, "0")}
          </span>
        </span>
        <div>
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            aria-label={`Previous ${label}`}
          >
            <ArrowLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => api?.scrollNext()}
            aria-label={`Next ${label}`}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
export function Header() {
  const [open, setOpen] = useState(false),
    [search, setSearch] = useState(false),
    [group, setGroup] = useState<string | null>(null);
  const drawer = useRef<HTMLDivElement>(null),
    trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    document.body.style.overflow = open || search ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, search]);
  useEffect(() => {
    if (!open && !search) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setSearch(false);
        trigger.current?.focus();
      }
      if (event.key === "Tab") {
        const panel = open
          ? drawer.current
          : document.querySelector<HTMLElement>(".search-dialog");
        if (!panel) return;
        const focusables = [
          ...panel.querySelectorAll<HTMLElement>(
            'button,a,input,[tabindex]:not([tabindex="-1"])',
          ),
        ];
        const first = focusables[0],
          last = focusables.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, search]);
  useEffect(() => {
    if (open) drawer.current?.querySelector("button")?.focus();
  }, [open]);
  return (
    <>
      {siteConfig.showAnnouncement && (
        <div id="top" className="announcement">
          <div className="container">
            <span>{announcements[0]}</span>
            <span>{announcements[1]}</span>
          </div>
        </div>
      )}
      <header className="site-header">
        <div className="container header-inner">
          <button
            className="icon-button mobile-menu-button"
            ref={trigger}
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
          <Link href="/" className="logo" aria-label="Nepora Exports home">
            Nepora Exports<span>HANDWOVEN STORIES</span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <div className="nav-item" key={item.label}>
                <Link href={item.href}>{item.label}</Link>
                {item.children && (
                  <div className="nav-dropdown">
                    {item.children.map((child) => (
                      <Link href={item.href} key={child}>
                        {child}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="header-actions">
            <button
              className="icon-button"
              aria-label="Search collections"
              onClick={() => setSearch(true)}
            >
              <Search />
            </button>
            <Link
              className="icon-button"
              aria-label="Contact us"
              href="/contact"
            >
              <Mail />
            </Link>
          </div>
        </div>
      </header>
      {open && (
        <div className="overlay" onMouseDown={() => setOpen(false)}>
          <div
            className="mobile-drawer"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            ref={drawer}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="drawer-top">
              <span className="logo dark-logo">
                Nepora Exports<span>HANDWOVEN STORIES</span>
              </span>
              <button
                type="button"
                className="icon-button"
                aria-label="Close menu"
                onClick={() => {
                  setOpen(false);
                  trigger.current?.focus();
                }}
              >
                <X />
              </button>
            </div>
            <nav aria-label="Mobile navigation">
              {navigation.map((item) => (
                <div className="drawer-group" key={item.label}>
                  <div>
                    <Link href={item.href} onClick={() => setOpen(false)}>
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        type="button"
                        aria-label={`Toggle ${item.label} subcategories`}
                        aria-expanded={group === item.label}
                        onClick={() =>
                          setGroup(group === item.label ? null : item.label)
                        }
                      >
                        <ChevronDown size={18} />
                      </button>
                    )}
                  </div>
                  {item.children && group === item.label && (
                    <div className="drawer-sub">
                      {item.children.map((child) => (
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          key={child}
                        >
                          {child}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <p>Made slowly. Treasured forever.</p>
          </div>
        </div>
      )}
      {search && (
        <div
          className="overlay search-overlay"
          onMouseDown={() => setSearch(false)}
        >
          <div
            className="search-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Search site"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button
              className="icon-button"
              aria-label="Close search"
              onClick={() => setSearch(false)}
            >
              <X />
            </button>
            <h2>What are you looking for?</h2>
            <label htmlFor="site-search">Search our collection</label>
            <form action="/collections" method="get">
              <input
                id="site-search"
                name="q"
                type="search"
                autoFocus
                placeholder="Search pieces"
              />
              <button type="submit">Search</button>
            </form>
            <p>Search the available Nepora Exports pieces.</p>
          </div>
        </div>
      )}
    </>
  );
}
export function Crafts({
  data,
}: {
  data: Record<"Women" | "Men", { title: string; image: string }[]>;
}) {
  const [tab, setTab] = useState<"Women" | "Men">("Women");
  return (
    <>
      <div className="tabs" role="tablist" aria-label="Craft collections">
        {(["Women", "Men"] as const).map((t) => (
          <button
            type="button"
            role="tab"
            aria-selected={tab === t}
            key={t}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <Carousel
        label={`${tab} craft collections`}
        kind="cards"
        items={data[tab].map((item) => (
          <Link className="craft-card" href="/collections" key={item.title}>
            <div className="image-frame craft-image">
              <Image
                src={item.image}
                alt={`Editorial photograph placeholder for ${item.title}`}
                fill
                sizes="(max-width: 640px) 78vw, 25vw"
                className="object-cover"
              />
            </div>
            <span>
              {item.title}
              <ArrowUpRight size={20} />
            </span>
          </Link>
        ))}
      />
    </>
  );
}
export function ProductCarousel({
  products,
}: {
  products: {
    id: string;
    name: string;
    material: string;
    image: string;
    alt: string;
    href: string;
  }[];
}) {
  return (
    <Carousel
      label="Selected Pashmina pieces"
      kind="products"
      items={products.map((piece) => (
        <article className="product-card" key={piece.id}>
          <Link href={piece.href} className="image-frame product-image">
            <Image
              src={piece.image}
              alt={piece.alt}
              fill
              sizes="(max-width: 640px) 78vw, 25vw"
              className="object-cover"
            />
          </Link>
          <span className="eyebrow">{piece.material}</span>
          <h3>
            <Link href={piece.href}>{piece.name}</Link>
          </h3>
          <Link className="text-link" href={piece.href}>
            View Piece <ArrowUpRight size={17} />
          </Link>
        </article>
      ))}
    />
  );
}
export function Faq({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [active, setActive] = useState(0);
  return (
    <div className="faq-grid" id="faq">
      {items.map((item, i) => (
        <div className="faq-item" key={item.question}>
          <h3>
            <button
              type="button"
              aria-expanded={active === i}
              aria-controls={`faq-answer-${i}`}
              onClick={() => setActive(active === i ? -1 : i)}
            >
              {item.question}
              <span>{active === i ? "−" : "+"}</span>
            </button>
          </h3>
          <div id={`faq-answer-${i}`} hidden={active !== i}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export function Newsletter() {
  const [email, setEmail] = useState(""),
    [message, setMessage] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setMessage(
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
            ? "Thank you — you are on the list."
            : "Please enter a valid email address.",
        );
      }}
      noValidate
    >
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <div>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
        />
        <button type="submit" aria-label="Subscribe to newsletter">
          <ArrowRight size={19} />
        </button>
      </div>
      <p role="status">{message}</p>
    </form>
  );
}
export function FloatingActions() {
  return (
    <>
      {siteConfig.showReviews && (
        <div className="reviews-badge">
          <Star size={15} fill="currentColor" /> 4.9 <span>Reviews</span>
        </div>
      )}
      {siteConfig.showContact && (
        <Link
          href={siteConfig.whatsapp}
          className="contact-float"
          aria-label="Contact us"
        >
          <Image
            src="/whatsapp.png"
            alt=""
            width={48}
            height={48}
            sizes="48px"
          />
        </Link>
      )}
    </>
  );
}
