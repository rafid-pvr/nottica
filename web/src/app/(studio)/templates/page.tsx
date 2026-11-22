import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { TemplateExplorer } from "@/components/template-explorer";

export const metadata: Metadata = {
  title: "Website designs",
  description: "Explore NOTTICA concept designs for online shops, businesses, creative portfolios, and celebrations.",
};

export default function TemplatesPage() {
  return <main>
    <PageIntro eyebrow="The NOTTICA design collection" title={<>Find a starting<br /><em>point that feels right.</em></>} description="Explore concept websites, open the working demo, and tell us what you’d like to make your own. Each concept is clearly identified as illustrative." />
    <section className="marketplace section-wrap" aria-label="Browse website designs"><TemplateExplorer /></section>
  </main>;
}
