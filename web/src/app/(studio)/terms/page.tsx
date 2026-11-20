import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return <main>
    <PageIntro eyebrow="Terms of service" title={<>Clear scope makes<br /><em>good work possible.</em></>} description="Project terms need to reflect the actual business, jurisdiction, payment arrangements, and delivery process. This page remains a draft." />
    <article className="legal-copy section-wrap">
      <p className="draft-label">Draft for owner and legal review · not a final agreement</p>
      <h2>Project scope</h2><p>Every custom project should begin with a written proposal describing the deliverables, exclusions, timeline, revision allowance, and responsibilities for content and approvals.</p>
      <h2>Quotation and payment</h2><p>Pricing and payment terms are agreed individually in the approved quotation. This website does not publish fixed prices or collect payments.</p>
      <h2>Before publication</h2><p>Confirm the contracting entity, applicable law, cancellation and refund terms, intellectual property, third-party costs, and dispute process before using a final agreement.</p>
    </article>
  </main>;
}
