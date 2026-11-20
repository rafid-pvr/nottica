import type { ReactNode } from "react";

export function PageIntro({ eyebrow, title, description, children }: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero section-wrap">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-lede">{description}</p>
      {children}
    </section>
  );
}
