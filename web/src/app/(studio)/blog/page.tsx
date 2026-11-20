import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Studio notes" };

export default function BlogPage() {
  return <main>
    <PageIntro eyebrow="Ideas, details, and good questions" title={<>Studio<br /><em>notes.</em></>} description="A quiet place for practical thoughts on websites, design decisions, and making a clear first impression." />
    <section className="notes-empty section-wrap"><span aria-hidden="true">✳</span><h2>Good things take<br /><em>thoughtful words.</em></h2><p>Studio notes are being prepared. In the meantime, tell us what you’re working on and we’ll be happy to talk it through.</p><a className="button button-primary" href="/contact">Get in touch <span aria-hidden="true">↗</span></a></section>
  </main>;
}
