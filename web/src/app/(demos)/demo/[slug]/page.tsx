import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DemoCommerce } from "@/components/demos/demo-commerce";
import { DemoCorporate } from "@/components/demos/demo-corporate";
import { DemoInvitation } from "@/components/demos/demo-invitation";
import { DemoPortfolio } from "@/components/demos/demo-portfolio";
import { getTemplate, templates } from "@/lib/templates";

export function generateStaticParams() {
  return templates.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplate(slug);
  if (!template) return { title: "Concept demo not found" };
  return { title: `${template.name} · Concept demo`, description: `${template.description} Fictional NOTTICA website concept.` };
}

export default async function DemoRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const template = getTemplate(slug);
  if (!template) notFound();
  switch (template.category) {
    case "E-commerce": return <DemoCommerce template={template} />;
    case "Corporate": return <DemoCorporate template={template} />;
    case "Portfolio": return <DemoPortfolio template={template} />;
    case "Events & Invitations": return <DemoInvitation template={template} />;
  }
}
