import Link from "next/link";
import type { TemplateRecord } from "@/lib/templates";
import { AddToBag } from "./demo-interactions";

const merchandise: Record<string, Array<{ name: string; description: string; price: string; tone: string }>> = {
  "maison-noire": [
    { name: "The Form Coat", description: "Italian wool · charcoal", price: "₹18,900", tone: "product-coat" },
    { name: "Sculpted Knit", description: "Merino blend · oat", price: "₹8,400", tone: "product-knit" },
    { name: "Evening Study", description: "Silk satin · onyx", price: "₹11,200", tone: "product-evening" },
  ],
  "malabar-spice": [
    { name: "Wild Cardamom", description: "Wayanad hills · 50 g", price: "₹420", tone: "product-cardamom" },
    { name: "Pepper Harvest", description: "Malabar coast · 100 g", price: "₹360", tone: "product-pepper" },
    { name: "The Kitchen Set", description: "Three small-batch spices", price: "₹940", tone: "product-spice" },
  ],
  orris: [
    { name: "Cloud Cleanser", description: "Oat milk · 150 ml", price: "₹890", tone: "product-cleanser" },
    { name: "Daily Veil", description: "Barrier cream · 50 ml", price: "₹1,240", tone: "product-cream" },
    { name: "Night Ritual", description: "Botanical oil · 30 ml", price: "₹1,580", tone: "product-oil" },
  ],
};

const intro: Record<string, { top: string; headline: string; line: string; cta: string; section: string }> = {
  "maison-noire": { top: "MAISON NOIRE · OBJECTS FOR THE EVERYDAY", headline: "A quieter kind\nof statement.", line: "A wardrobe shaped by form, feeling, and the pieces you return to.", cta: "Explore the collection", section: "The autumn edit" },
  "malabar-spice": { top: "MALABAR SPICE CO. · FROM THE WESTERN GHATS", headline: "Good things\ngrow slowly.", line: "Small-batch spices with a story rooted in the rain-fed hills of Kerala.", cta: "Shop the harvest", section: "From the source" },
  orris: { top: "ORRIS BEAUTY · A DAILY PRACTICE", headline: "Care, without\nthe noise.", line: "Considered skincare with simple ingredients and a softer touch.", cta: "Find your ritual", section: "The everyday edit" },
};

export function DemoCommerce({ template }: { template: TemplateRecord }) {
  const content = intro[template.slug];
  const products = merchandise[template.slug];
  return <main className={`commerce-site commerce-${template.slug}`}>
    <div className="commerce-notice">FICTIONAL CONCEPT STORE · PRODUCTS, PRICES, AND CHECKOUT ARE ILLUSTRATIVE</div>
    <header className="commerce-nav"><Link href="/templates" className="commerce-wordmark">{template.name}</Link><nav aria-label={`${template.name} navigation`}><a href="#collection">Collection</a><a href="#story">Our story</a><a href="#contact">Contact</a></nav><a className="bag-link" href="#collection">Bag <span>0</span></a></header>
    <section className="commerce-hero" aria-labelledby="commerce-title">
      <div className="commerce-copy"><p className="commerce-kicker">{content.top}</p><h1 id="commerce-title">{content.headline.split("\n").map((line) => <span key={line}>{line}</span>)}</h1><p>{content.line}</p><a className="commerce-button" href="#collection">{content.cta} <span aria-hidden="true">↗</span></a></div>
      <div className="commerce-visual" aria-label={`${template.name} illustrative product composition`}><div className="commerce-visual-shape" /><span className="commerce-visual-label">STUDY<br />No. 01</span><span className="commerce-visual-caption">{template.style}</span></div>
    </section>
    <section className="commerce-products" id="collection"><div className="commerce-section-title"><div><p className="commerce-kicker">A SMALL SELECTION</p><h2>{content.section}</h2></div><span>01 — 03</span></div><div className="commerce-product-grid">{products.map((product, index) => <article className="commerce-product" key={product.name}><div className={`product-art ${product.tone}`}><span>0{index + 1}</span><i aria-hidden="true" /></div><div className="product-info"><div><h3>{product.name}</h3><p>{product.description}</p></div><b>{product.price}</b></div><AddToBag item={product.name} /></article>)}</div></section>
    <section className="commerce-story" id="story"><div className="story-index">{template.category} · {template.id}</div><div><p className="commerce-kicker">A NOTE FROM THE MAKERS</p><h2>{template.slug === "malabar-spice" ? "From hillside to kitchen." : template.slug === "orris" ? "A little goes a long way." : "Choose well. Wear often."}</h2><p>{template.description} This fictional concept uses sample copy and an illustrative catalogue. Product details and checkout would be configured for the real business.</p></div></section>
    <footer className="commerce-footer" id="contact"><span>{template.name}</span><span>NOTTICA concept website</span><Link href={`/templates/${template.slug}`}>Make this concept yours ↗</Link></footer>
  </main>;
}
