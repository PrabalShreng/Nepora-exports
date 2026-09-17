import Link from 'next/link';
import { Camera, Globe, Share2 } from 'lucide-react';
import { footerGroups, siteConfig } from '../data';
import { Newsletter } from '../ui';

export function SiteFooter() {
  return (
    <footer className="footer" id="contact-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">Nepora Exports<span>HANDWOVEN STORIES</span></Link>
          <p>Kathmandu, Nepal</p>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={`tel:${siteConfig.phone.replaceAll(' ', '')}`}>{siteConfig.phone}</a>
          <div className="social">
            <a href={siteConfig.social.instagram} aria-label="Instagram"><Camera size={18} /></a>
            <a href={siteConfig.social.facebook} aria-label="Facebook"><Globe size={18} /></a>
            <a href={siteConfig.social.linkedin} aria-label="LinkedIn"><Share2 size={18} /></a>
          </div>
        </div>
        {footerGroups.map((group) => (
          <div className="footer-links" key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map((link) => <Link href={link.href} key={link.label}>{link.label}</Link>)}
          </div>
        ))}
        <div className="footer-news">
          <h3>Letters from the loom</h3>
          <p>Occasional stories, new pieces, and the people behind them.</p>
          <Newsletter />
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Nepora Exports. Crafted with care.</span>
        <div><Link href="/contact">Privacy</Link><Link href="/contact">Terms</Link><span>NPR / Nepal</span><a href="https://prabashnepal.com.np" target="_blank" rel="noopener noreferrer">Developed by Prabash Nepal</a></div>
      </div>
    </footer>
  );
}

