import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const services = [
  { number: "01", title: "Websites with a point of view", text: "Brand-led websites shaped around what your business needs to say and do." },
  { number: "02", title: "Digital storefronts", text: "Thoughtful shopping experiences that give products and their stories room to shine." },
  { number: "03", title: "Invitations worth opening", text: "Personal, mobile-first event pages made to share with the people who matter." },
];

export default function Home() {
  return (
    <main id="home">
      <section className="hero section-wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Independent digital studio · Kerala, India</p>
          <h1 id="hero-title">Digital experiences,<em> thoughtfully crafted.</em></h1>
          <p className="hero-intro">Distinctive websites for businesses, people, and the moments worth celebrating. Designed with care. Built around you.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#designs">Explore the studio <span aria-hidden="true">↓</span></a>
            <a className="text-link" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">Let’s talk on WhatsApp <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="NOTTICA design studio identity">
          <div className="art-orbit art-orbit-one" />
          <div className="art-orbit art-orbit-two" />
          <div className="art-panel">
            <span className="art-index">N° 01 <i>—</i> STUDIO NOTES</span>
            <div className="art-glyph" aria-hidden="true">N</div>
            <p>Good ideas deserve<br />a thoughtful digital home.</p>
            <span className="art-foot">DESIGN · DEVELOPMENT · DETAIL</span>
          </div>
          <span className="art-side-note">Made with intention · 2026</span>
        </div>
        <a className="scroll-note" href="#services"><span /> Scroll to explore</a>
      </section>

      <section className="intro-strip" id="approach" aria-label="Studio approach">
        <p>Small studio, considered work</p><span aria-hidden="true">✳</span>
        <p>Kerala roots, open to the world</p><span aria-hidden="true">✳</span>
        <p>Made for real people and real moments</p>
      </section>

      <section className="services section-wrap" id="services" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">A little of what we do</p>
          <h2 id="services-title">Thoughtful work.<br /><em>Made for your next.</em></h2>
          <p className="section-lede">From first idea to a site you’re proud to share, each project gets its own clear direction and careful build.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => <article className="service-card" key={service.number}>
            <span className="service-number">{service.number}</span><div className="service-rule" />
            <h3>{service.title}</h3><p>{service.text}</p>
          </article>)}
        </div>
      </section>

      <section className="designs section-wrap" id="designs" aria-labelledby="designs-title">
        <div className="designs-copy">
          <p className="eyebrow">A studio for different stories</p>
          <h2 id="designs-title">One studio.<br /><em>Many ways to begin.</em></h2>
          <p>Explore tailored starting points for independent businesses, creative practices, online shops, and celebrations. Each design has its own direction and a clear path to make it your own.</p>
          <Link className="button button-light" href="/templates">Explore the designs <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="design-categories" aria-label="Website design categories">
          <Link className="category category-commerce" href="/templates"><span>01 / COMMERCE</span><b>Made to<br />move you.</b><i aria-hidden="true">↗</i></Link>
          <Link className="category category-studio" href="/templates"><span>02 / STUDIO</span><b>A clearer<br />kind of presence.</b><i aria-hidden="true">↗</i></Link>
          <Link className="category category-celebration" href="/templates"><span>03 / CELEBRATIONS</span><b>Bring everyone<br />a little closer.</b><i aria-hidden="true">↗</i></Link>
        </div>
      </section>

      <section className="contact section-wrap" id="contact" aria-labelledby="contact-title">
        <p className="eyebrow">Have a good idea?</p>
        <h2 id="contact-title">Let’s give it<br /><em>a thoughtful home.</em></h2>
        <div className="contact-actions">
          <Link className="button button-primary" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
          <a className="button button-outline" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  );
}
