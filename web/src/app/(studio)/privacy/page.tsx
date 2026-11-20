import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return <main>
    <PageIntro eyebrow="Privacy" title={<>Your information<br /><em>deserves care.</em></>} description="A clear explanation of how the studio handles information is important. This page is a draft and must be reviewed before public launch." />
    <article className="legal-copy section-wrap">
      <p className="draft-label">Draft for owner and legal review · not a final policy</p>
      <h2>Contacting the studio</h2><p>If you contact NOTTICA by email or WhatsApp, the details you share are sent through the service you choose. Share only information needed to discuss your project.</p>
      <h2>Website forms and accounts</h2><p>The current site does not provide a live customer inquiry form, account portal, or file upload. Do not send confidential information through the prototype.</p>
      <h2>Before publication</h2><p>Confirm the operating business identity, data retention period, service providers, international processing, and a privacy contact before publishing a final policy.</p>
    </article>
  </main>;
}
