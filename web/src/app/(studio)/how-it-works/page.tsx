import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "How it works" };

const steps = [
  ["01", "Choose a direction", "Explore the design concepts and tell us which one feels closest to your idea."],
  ["02", "Share the details", "We learn about your business or event, the pages you need, and the features that matter."],
  ["03", "Review the proposal", "We prepare a tailored scope, quotation, timeline, and terms for you to review."],
  ["04", "Create together", "After approval and the agreed advance, we shape the content and build your website."],
  ["05", "Review and refine", "You review a private preview and share feedback within the agreed revision scope."],
  ["06", "Launch with confidence", "After final approval and balance payment, we prepare the agreed handover and launch steps."],
];

export default function HowItWorksPage() {
  return <main>
    <PageIntro eyebrow="A clear path, from first idea to launch" title={<>Good work takes<br /><em>good conversations.</em></>} description="A personal, guided process keeps the project clear from the first message through delivery." />
    <section className="process-list section-wrap" aria-label="Project steps">
      {steps.map(([n, title, text]) => <article className="process-row" key={n}><span>{n}</span><h2>{title}</h2><p>{text}</p></article>)}
    </section>
    <section className="page-cta section-wrap"><div><p className="eyebrow">Have a project in mind?</p><h2>Let’s take the<br /><em>first step.</em></h2></div><Link className="button button-primary" href="/contact">Get in touch <span aria-hidden="true">↗</span></Link></section>
  </main>;
}
