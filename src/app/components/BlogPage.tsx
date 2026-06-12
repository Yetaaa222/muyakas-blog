import { useState } from "react";
import { Link } from "react-router";

const categories = ["All", "Governance", "Risk", "Compliance", "Leadership", "SOPs"];

const posts = [
  {
    id: 1,
    category: "Governance",
    title: "Why Board-Level GRC Ownership Is No Longer Optional",
    excerpt: "As regulatory environments grow more complex, organisations that treat governance as a checkbox exercise are falling behind. Here's what genuine board ownership looks like — and why it changes everything from risk culture to strategic performance.",
    date: "5 June 2026",
    readTime: "6 min read",
    imageId: "1450101499163-c8848c66ca85",
    featured: true,
  },
  {
    id: 2,
    category: "Risk",
    title: "Building a Risk Culture That Sticks: Beyond the Framework",
    excerpt: "Risk frameworks are only as effective as the culture that sustains them. This piece explores how to embed risk-awareness into the daily decisions of every team, not just the risk committee.",
    date: "22 May 2026",
    readTime: "8 min read",
    imageId: "1507003211169-0a1dd7228f2d",
    featured: false,
  },
  {
    id: 3,
    category: "SOPs",
    title: "SOPs That People Actually Follow: A Practitioner's Guide",
    excerpt: "Most standard operating procedures collect dust. These seven principles will help you write procedures that are clear, contextual, and genuinely adopted — without months of drafting.",
    date: "14 May 2026",
    readTime: "5 min read",
    imageId: "1554224155-8d04cb21cd6c",
    featured: false,
  },
  {
    id: 4,
    category: "Compliance",
    title: "Navigating Donor Compliance in a Multi-Funder Environment",
    excerpt: "When your organisation draws funding from USAID, EU, and bilateral donors simultaneously, compliance obligations multiply fast. Here's a framework for managing them without drowning in reporting.",
    date: "29 April 2026",
    readTime: "7 min read",
    imageId: "1521737604893-d14cc237f11d",
    featured: false,
  },
  {
    id: 5,
    category: "Leadership",
    title: "The Compliance Officer as Strategic Partner: Reframing the Role",
    excerpt: "The chief compliance officer who sits at the strategic table rather than just the audit table is becoming essential. This piece outlines the mindset and skill shifts that make the transition possible.",
    date: "15 April 2026",
    readTime: "6 min read",
    imageId: "1573497019940-1c28c88b4f3e",
    featured: false,
  },
  {
    id: 6,
    category: "Governance",
    title: "Applying King IV in Small and Medium Organisations",
    excerpt: "King IV is often read as a framework for large listed companies. But its principles apply equally — and perhaps more urgently — to smaller organisations that lack dedicated governance infrastructure.",
    date: "3 April 2026",
    readTime: "5 min read",
    imageId: "1486406146926-c627a92ad1ab",
    featured: false,
  },
];

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? posts : posts.filter((p) => p.category === activeCategory);
  const [featured, ...rest] = filtered;

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", paddingTop: 72 }}>
      {/* Page Header */}
      <section style={{ backgroundColor: "#F5F4F2", padding: "80px 32px 72px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: 6, height: "100%", backgroundColor: "#3B2A4A" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#6E1E2E", marginBottom: 16 }}>
            Insights
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 700,
            color: "#2A2A2A",
            lineHeight: 1.15,
            marginBottom: 20,
          }}>
            Perspectives on Governance,<br />Risk & Compliance
          </h1>
          <p style={{ fontSize: 16, color: "#6B6560", maxWidth: 520, lineHeight: 1.75 }}>
            Practical thinking for compliance professionals, board members, and organisational leaders navigating complex regulatory terrain.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid rgba(110,30,46,0.08)", padding: "0 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 4, overflowX: "auto" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "18px 20px",
                border: "none",
                borderBottom: activeCategory === cat ? "2px solid #6E1E2E" : "2px solid transparent",
                backgroundColor: "transparent",
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                fontWeight: activeCategory === cat ? 600 : 400,
                color: activeCategory === cat ? "#6E1E2E" : "#6B6560",
                cursor: "pointer",
                whiteSpace: "nowrap" as const,
                transition: "color 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Posts */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "64px 32px 100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {featured && (
            <Link to="/insights/post" style={{ textDecoration: "none", display: "block", marginBottom: 48 }}>
              <article
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  borderRadius: 12,
                  overflow: "hidden",
                  backgroundColor: "#F5F4F2",
                  border: "1px solid rgba(110,30,46,0.08)",
                  transition: "box-shadow 0.2s",
                }}
                className="featured-article"
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 8px 40px rgba(59,42,74,0.12)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <div style={{ overflow: "hidden", height: 360 }}>
                  <img
                    src={`https://images.unsplash.com/photo-${featured.imageId}?w=800&h=720&fit=crop&auto=format`}
                    alt={featured.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "48px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20 }}>
                    <span style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase" as const,
                      color: "#FFFFFF",
                      backgroundColor: "#6E1E2E",
                      padding: "3px 10px",
                      borderRadius: 4,
                    }}>
                      Featured
                    </span>
                    <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#3B2A4A" }}>
                      {featured.category}
                    </span>
                  </div>
                  <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(20px, 2.5vw, 28px)",
                    fontWeight: 700,
                    color: "#2A2A2A",
                    lineHeight: 1.3,
                    marginBottom: 16,
                  }}>
                    {featured.title}
                  </h2>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "#6B6560", marginBottom: 24 }}>{featured.excerpt}</p>
                  <div style={{ display: "flex", gap: 12, fontSize: 13, color: "#6B6560" }}>
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span>{featured.readTime}</span>
                  </div>
                </div>
              </article>
            </Link>
          )}

          {/* Rest of posts */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }} className="blog-grid">
            {rest.map((post) => (
              <Link key={post.id} to="/insights/post" style={{ textDecoration: "none" }}>
                <article
                  style={{
                    backgroundColor: "#F5F4F2",
                    borderRadius: 10,
                    overflow: "hidden",
                    border: "1px solid rgba(110,30,46,0.06)",
                    transition: "box-shadow 0.2s, transform 0.2s",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(59,42,74,0.10)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ height: 200, overflow: "hidden", backgroundColor: "#EDEBE8" }}>
                    <img
                      src={`https://images.unsplash.com/photo-${post.imageId}?w=600&h=400&fit=crop&auto=format`}
                      alt={post.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "24px" }}>
                    <div style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase" as const,
                      color: "#3B2A4A",
                      marginBottom: 10,
                    }}>
                      {post.category}
                    </div>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 17,
                      fontWeight: 600,
                      color: "#2A2A2A",
                      lineHeight: 1.35,
                      marginBottom: 10,
                    }}>
                      {post.title}
                    </h3>
                    <p style={{ fontSize: 13, lineHeight: 1.7, color: "#6B6560", marginBottom: 16 }}>{post.excerpt}</p>
                    <div style={{ display: "flex", gap: 10, fontSize: 12, color: "#6B6560" }}>
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 32px", color: "#6B6560" }}>
              No articles in this category yet. Check back soon.
            </div>
          )}

          {/* Pagination */}
          {filtered.length > 0 && (
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 60 }}>
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    border: n === 1 ? "none" : "1px solid rgba(42,42,42,0.15)",
                    backgroundColor: n === 1 ? "#6E1E2E" : "transparent",
                    color: n === 1 ? "#FFFFFF" : "#6B6560",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {n}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .featured-article { grid-template-columns: 1fr !important; }
          .featured-article > div:first-child { height: 240px !important; }
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
