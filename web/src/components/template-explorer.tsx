"use client";

import Link from "next/link";
import { useMemo, useState, type CSSProperties } from "react";
import { categories, styles, templates } from "@/lib/templates";

export function TemplateExplorer() {
  const [category, setCategory] = useState<string>("All");
  const [style, setStyle] = useState<string>("All styles");
  const [query, setQuery] = useState("");

  const visibleTemplates = useMemo(() => templates.filter((template) => {
    const searchText = `${template.name} ${template.category} ${template.description} ${template.style} ${template.audience}`.toLowerCase();
    return template.published && (category === "All" || template.category === category) && (style === "All styles" || template.style === style) && searchText.includes(query.trim().toLowerCase());
  }), [category, query, style]);

  return <>
    <div className="market-tools">
      <label className="search-field"><span className="visually-hidden">Search designs</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by name, style, or industry" /></label>
      <label className="style-field"><span className="visually-hidden">Filter by style</span><select value={style} onChange={(event) => setStyle(event.target.value)}>{styles.map((item) => <option key={item}>{item}</option>)}</select></label>
    </div>
    <div className="filter-pills" role="group" aria-label="Filter by category">
      {categories.map((item) => <button className={category === item ? "filter-pill active" : "filter-pill"} type="button" key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
    </div>
    <p className="result-count" aria-live="polite">{visibleTemplates.length} {visibleTemplates.length === 1 ? "design" : "designs"}</p>
    {visibleTemplates.length ? <div className="template-grid">
      {visibleTemplates.map((template) => <article className="market-card" key={template.id}>
        <Link className="market-art" href={`/templates/${template.slug}`} style={{ "--art": template.art, "--art-ink": template.ink, "--art-accent": template.accent } as CSSProperties}>
          {template.featured && <span className="featured-label">Selected concept</span>}
          <span className="market-art-index">{template.id}</span>
          <span className="market-art-name">{template.name}</span>
          <span className="market-art-category">{template.category}</span>
          <i aria-hidden="true">✳</i>
        </Link>
        <div className="market-card-body">
          <div className="market-meta"><span>{template.category}</span><span>{template.style}</span></div>
          <h2><Link href={`/templates/${template.slug}`}>{template.name}</Link></h2>
          <p>{template.description}</p>
          <div className="market-card-actions"><Link href={`/demo/${template.slug}`}>Open demo <span aria-hidden="true">↗</span></Link><Link href={`/templates/${template.slug}`}>Details <span aria-hidden="true">↗</span></Link></div>
        </div>
      </article>)}
    </div> : <div className="empty-results"><h2>No designs found.</h2><p>Try a different search or clear one of the filters.</p><button className="button button-outline" onClick={() => { setCategory("All"); setStyle("All styles"); setQuery(""); }}>Clear filters</button></div>}
  </>;
}
