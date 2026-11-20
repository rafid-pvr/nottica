import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Services" };

const offerings = [
  { n: "01", title: "Brand-led websites", text: "A clear digital home for your business, service, or creative practice. Thoughtful page structure, considered typography, and a responsive build." },
  { n: "02", title: "E-commerce experiences", text: "Product collections, detail pages, and shopping journeys designed around your catalogue and customers." },
  { n: "03", title: "Event invitations", text: "Personal invitation pages for weddings, birthdays, engagements, housewarmings, and anniversaries. Made to share and easy to use on a phone." },
  { n: "04", title: "Care and improvements", text: "A considered next step for an existing website: a new page, a clearer experience, or help keeping the site current." },
];

export default function ServicesPage() {
  return <main>
    <PageIntro eyebrow="What we can make together" title={<>Digital work,<br /><em>made with care.</em></>} description="A focused set of design and development services for people who want their online presence to feel considered and work well." />
    <section className="offerings section-wrap" aria-label="Services">
      {offerings.map((item) => <article className="offering-row" key={item.n}>
        <span className="service-number">{item.n}</span><div><h2>{item.title}</h2><p>{item.text}</p></div>
        <span className="offering-mark" aria-hidden="true">↗</span>
      </article>)}
    </section>
    <section className="page-cta section-wrap"><div><p className="eyebrow">Every project starts with a conversation</p><h2>Tell us where<br /><em>you want to go.</em></h2></div><Link className="button button-primary" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link></section>
  </main>;
}
