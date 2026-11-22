import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return <main>
    <PageIntro eyebrow="Start a conversation" title={<>Tell us what<br /><em>you have in mind.</em></>} description="A few lines about your idea, your timeline, and what you need is a lovely place to begin." />
    <section className="contact-options section-wrap">
      <a className="contact-option" href={`mailto:${siteConfig.email}`}><span className="eyebrow">Email</span><strong>{siteConfig.email}</strong><span aria-hidden="true">↗</span></a>
      <a className="contact-option" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer"><span className="eyebrow">WhatsApp</span><strong>Message the studio</strong><span aria-hidden="true">↗</span></a>
      <p className="contact-location">Based in Kerala, India<br />Working with customers locally and internationally.</p>
    </section>
  </main>;
}
