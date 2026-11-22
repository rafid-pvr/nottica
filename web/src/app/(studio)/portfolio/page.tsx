import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Selected concepts" };

const concepts = [
  { n: "01", title: "Commerce", text: "Editorial product worlds, considered catalogues, and clear paths to explore.", className: "concept-commerce" },
  { n: "02", title: "Independent studio", text: "Distinctive portfolios and company sites with a strong point of view.", className: "concept-studio" },
  { n: "03", title: "Celebrations", text: "Personal, mobile-first pages for the people and moments worth celebrating.", className: "concept-celebration" },
];

export default function PortfolioPage() {
  return <main>
    <PageIntro eyebrow="Selected directions" title={<>Ideas in progress.<br /><em>Stories taking shape.</em></>} description="The NOTTICA showcase is being built from fictional concept projects. Each concept is clearly labelled and does not claim to be client work." />
    <section className="concept-grid section-wrap" aria-label="Concept project categories">
      {concepts.map((item) => <article className={`concept-card ${item.className}`} key={item.n}><span>{item.n} / CONCEPT DIRECTION</span><h2>{item.title}</h2><p>{item.text}</p></article>)}
    </section>
    <p className="concept-note section-wrap">Concepts are illustrative. No customer testimonials, awards, results, or verified client projects are presented here.</p>
    <section className="page-cta section-wrap"><div><p className="eyebrow">Find a starting point</p><h2>Explore the<br /><em>design collection.</em></h2></div><Link className="button button-primary" href="/templates">Browse designs <span aria-hidden="true">↗</span></Link></section>
  </main>;
}
