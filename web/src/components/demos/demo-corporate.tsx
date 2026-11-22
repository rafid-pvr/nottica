import Link from "next/link";
import type { TemplateRecord } from "@/lib/templates";

const companyData: Record<string, { label: string; title: string; body: string; numbers: string[]; sections: Array<[string, string, string]> }> = {
  buildora: {
    label: "BUILDORA CONSTRUCTIONS · KERALA",
    title: "Built for the\nway you live.",
    body: "A construction company concept grounded in thoughtful planning, clear communication, and practical detail.",
    numbers: ["01 / PLAN", "02 / MAKE", "03 / COMPLETE"],
    sections: [["Homes", "Spaces with a sense of place", "Residential concepts shaped around how people use a space."], ["Workplaces", "Room to do good work", "Flexible interiors and commercial construction, with a clear process."], ["Renovations", "A thoughtful next chapter", "Considered updates for spaces that need a fresh beginning."]],
  },
  forma: {
    label: "FORMA STUDIO · INDEPENDENT CREATIVE PRACTICE",
    title: "Ideas with\nroom to move.",
    body: "A creative studio concept working across identity, digital, and the stories that connect them.",
    numbers: ["IDENTITY", "DIGITAL", "DIRECTION"],
    sections: [["01 / Identity", "A world, made recognisable", "Visual identities with a point of view and a system to carry it."], ["02 / Digital", "Useful, expressive, alive", "Websites and experiences that give good work a thoughtful home."], ["03 / Art direction", "The feeling before the words", "Images, composition, and tone for brands with something to say."]],
  },
  "misty-grove": {
    label: "MISTY GROVE · WAYANAD, KERALA",
    title: "Come closer\nto quiet.",
    body: "A fictional hillside retreat concept for slow mornings, misty trails, and time away from the everyday.",
    numbers: ["STAY", "WANDER", "UNWIND"],
    sections: [["The rooms", "A softer place to land", "Four illustrative room concepts, each with its own pace."], ["The landscape", "Let the day open slowly", "Garden paths, forest edges, and a view across the hills."], ["The table", "Gather around something good", "Seasonal, locally inspired food for a long lunch or early supper."]],
  },
};

export function DemoCorporate({ template }: { template: TemplateRecord }) {
  const item = companyData[template.slug];
  return <main className={`company-site company-${template.slug}`}>
    <div className="concept-ribbon">FICTIONAL CONCEPT WEBSITE · SAMPLE CONTENT</div>
    <header className="company-nav"><Link href="/templates" className="company-wordmark">{template.name}<small>{item.label}</small></Link><nav aria-label={`${template.name} navigation`}><a href="#work">{template.slug === "misty-grove" ? "The stay" : "Work"}</a><a href="#approach">{template.slug === "misty-grove" ? "Experiences" : "Approach"}</a><a href="#contact">Contact</a></nav><a className="company-contact" href="#contact">Let’s talk ↗</a></header>
    <section className="company-hero" aria-labelledby="company-title"><div className="company-hero-copy"><p className="company-kicker">{item.label}</p><h1 id="company-title">{item.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1><p>{item.body}</p><a className="company-button" href="#work">Explore the studio <span aria-hidden="true">↓</span></a></div><div className="company-hero-art"><span className="company-art-caption">{item.numbers[0]}<br />A CONCEPT DIRECTION</span><div className="company-art-window" /><span className="company-art-side">{template.id} · NOTTICA</span></div></section>
    <section className="company-intro" id="approach"><p>{template.slug === "forma" ? "Curiosity is a useful place to start." : template.slug === "misty-grove" ? "A little farther from the everyday." : "Good building starts before the first brick."}</p><span>{template.description}</span></section>
    <section className="company-work" id="work"><div className="company-section-head"><p className="company-kicker">{template.slug === "misty-grove" ? "A PLACE TO MAKE YOUR OWN" : "WHAT WE DO"}</p><h2>{template.slug === "forma" ? "A few ways to work together." : template.slug === "misty-grove" ? "Find your own pace." : "A considered way forward."}</h2></div><div className="company-work-grid">{item.sections.map(([tag, title, text], index) => <article className={`company-work-card company-work-${index + 1}`} key={tag}><span>{tag}</span><div><h3>{title}</h3><p>{text}</p></div><i aria-hidden="true">↗</i></article>)}</div></section>
    <section className="company-process"><p className="company-kicker">THE PROJECT, IN GOOD HANDS</p><div>{item.numbers.map((step) => <span key={step}>{step}</span>)}</div><p>Sample process · final scope, team details, and claims require confirmation.</p></section>
    <footer className="company-footer" id="contact"><div><p className="company-kicker">START A CONVERSATION</p><h2>Good things<br />take <em>good people.</em></h2></div><Link href={`/templates/${template.slug}`}>Customize this concept with NOTTICA ↗</Link></footer>
  </main>;
}
