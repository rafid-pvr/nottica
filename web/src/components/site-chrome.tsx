import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="NOTTICA home">
          <Image
            src="/brand/nottica-logo.png"
            alt="NOTTICA.in"
            width={1077}
            height={260}
            priority
            sizes="(max-width: 640px) 148px, 190px"
          />
        </Link>
        <nav aria-label="Main navigation" className="main-nav">
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Selected concepts</Link>
          <Link href="/templates">Designs</Link>
          <Link href="/about">Studio</Link>
        </nav>
        <Link className="header-cta" href="/contact">
          Start a project <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link className="footer-brand" href="/">NOTTICA</Link>
          <p>{siteConfig.tagline}</p>
        </div>
        <nav aria-label="Footer navigation" className="footer-links">
          <Link href="/services">Services</Link>
          <Link href="/templates">Designs</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/blog">Studio notes</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="footer-contact">
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Kerala, India · Working worldwide</span>
        <div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
        <small>© NOTTICA</small>
      </div>
    </footer>
  );
}
