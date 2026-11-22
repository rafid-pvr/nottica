import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { getTemplate, templates } from "@/lib/templates";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return templates.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplate(slug);
  if (!template) return { title: "Design not found" };
  return { title: template.name, description: template.description };
}

export default async function TemplateDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const template = getTemplate(slug);
  if (!template) notFound();
  const demoUrl = `/demo/${template.slug}`;
  const inquiryLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Customize ${template.name} with NOTTICA`)}`;

  return <main>
    <div className="breadcrumb section-wrap"><Link href="/templates">Designs</Link><span aria-hidden="true">/</span><span>{template.name}</span></div>
    <PageIntro eyebrow={`${template.category} · ${template.style}`} title={<>{template.name}<br /><em>as a starting point.</em></>} description={template.description} />
    <section className="template-detail section-wrap">
      <div className="detail-art" style={{ "--art": template.art, "--art-ink": template.ink, "--art-accent": template.accent } as CSSProperties}>
        <span>{template.id} · CONCEPT WEBSITE</span><strong>{template.name}</strong><i aria-hidden="true">✳</i>
      </div>
      <div className="detail-copy">
        <p className="eyebrow">A concept for {template.audience}</p>
        <h2>Explore the<br /><em>working demo.</em></h2>
        <p>This fictional concept is a direction to explore. Sample names, imagery, event details, and interactions are illustrative and should be replaced with confirmed project details.</p>
        <ul>{template.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        <div className="detail-actions"><a className="button button-primary" href={demoUrl} target="_blank" rel="noreferrer">Open live demo <span aria-hidden="true">↗</span></a><a className="button button-outline" href={inquiryLink}>Customize this design <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>
    <section className="concept-disclosure section-wrap"><p>Concept project · no fixed prices are advertised · custom scope and quotation provided after a conversation.</p></section>
  </main>;
}
