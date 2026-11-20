import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "About the studio" };

export default function AboutPage() {
  return <main>
    <PageIntro eyebrow="A small independent studio" title={<>Good digital work<br /><em>starts with listening.</em></>} description="NOTTICA is an independent design and development studio based in Kerala, India, working with local and international customers." />
    <section className="about-story section-wrap">
      <p className="eyebrow">The studio point of view</p>
      <div><h2>Every project has<br />its own <em>rhythm.</em></h2><p>We believe a website should feel like it belongs to the people behind it. That means asking the right questions, making the important things easy to find, and giving every detail a reason to be there.</p><p>From a first business website to a celebration shared with family, we make digital experiences with care for the person on the other side of the screen.</p></div>
    </section>
    <section className="values-section section-wrap">
      <p className="eyebrow">How we work</p>
      <div className="value-grid"><article><span>01</span><h3>Listen first</h3><p>Understand the people, purpose, and practical needs before shaping a direction.</p></article><article><span>02</span><h3>Make it clear</h3><p>Give the story a thoughtful structure and help visitors know what to do next.</p></article><article><span>03</span><h3>Build with care</h3><p>Pay attention to the small details that make the experience feel considered.</p></article></div>
    </section>
  </main>;
}
