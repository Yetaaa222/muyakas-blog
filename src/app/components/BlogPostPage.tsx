import { Link } from "react-router";

const relatedPosts = [
  {
    category: "Risk",
    title: "Building a Risk Culture That Sticks",
    date: "22 May 2026",
    imageId: "1507003211169-0a1dd7228f2d",
  },
  {
    category: "Compliance",
    title: "Navigating Donor Compliance in a Multi-Funder Environment",
    date: "29 April 2026",
    imageId: "1521737604893-d14cc237f11d",
  },
  {
    category: "Leadership",
    title: "The Compliance Officer as Strategic Partner",
    date: "15 April 2026",
    imageId: "1573497019940-1c28c88b4f3e",
  },
];

export function BlogPostPage() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", paddingTop: 72 }}>
      {/* Featured Image */}
      <div style={{ height: 420, overflow: "hidden", backgroundColor: "#EDEBE8" }}>
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&h=840&fit=crop&auto=format"
          alt="Board meeting and governance discussion"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Article */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "64px 32px 80px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 36, fontSize: 13, color: "#6B6560" }}>
            <Link to="/insights" style={{ color: "#6E1E2E", textDecoration: "none" }}>Insights</Link>
            <span>/</span>
            <span>Governance</span>
          </div>

          {/* Category & Meta */}
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 20 }}>
            <span style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
              color: "#3B2A4A",
            }}>
              Governance
            </span>
            <span style={{ color: "#EDEBE8" }}>·</span>
            <span style={{ fontSize: 13, color: "#6B6560" }}>5 June 2026</span>
            <span style={{ color: "#EDEBE8" }}>·</span>
            <span style={{ fontSize: 13, color: "#6B6560" }}>6 min read</span>
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            color: "#2A2A2A",
            lineHeight: 1.2,
            marginBottom: 32,
          }}>
            Why Board-Level GRC Ownership Is No Longer Optional
          </h1>

          {/* Author */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "20px 0", borderTop: "1px solid rgba(110,30,46,0.10)", borderBottom: "1px solid rgba(110,30,46,0.10)", marginBottom: 40 }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", overflow: "hidden", flexShrink: 0, backgroundColor: "#EDEBE8" }}>
              <img
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=88&h=88&fit=crop&auto=format"
                alt="Muyaka Ngulube-Banda"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#2A2A2A" }}>Muyaka Ngulube-Banda</div>
              <div style={{ fontSize: 13, color: "#6B6560" }}>GRC Consultant & Advisor</div>
            </div>
          </div>

          {/* Body */}
          <div style={{ fontSize: 16, lineHeight: 1.85, color: "#2A2A2A" }}>
            <p style={{ marginBottom: 24 }}>
              For too long, Governance, Risk, and Compliance has been treated as an operational function — something managed by a team in the compliance department, reported upward quarterly, and largely invisible to the board until something went wrong. That model is no longer adequate, and organisations that cling to it are accumulating hidden liabilities.
            </p>

            <p style={{ marginBottom: 24 }}>
              The shift is not simply regulatory, though regulators have certainly played their part. It is strategic. In an environment of heightened stakeholder scrutiny, rapid regulatory change, and reputational risk that can materialise overnight, boards that do not own their GRC agenda are effectively outsourcing one of their most consequential responsibilities.
            </p>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(20px, 2.5vw, 26px)",
              fontWeight: 700,
              color: "#2A2A2A",
              marginTop: 40,
              marginBottom: 16,
              lineHeight: 1.3,
            }}>
              What Board Ownership Actually Means
            </h2>

            <p style={{ marginBottom: 24 }}>
              Board-level GRC ownership does not mean that directors should be reviewing individual compliance checklists or attending every risk workshop. It means that the board holds itself accountable for the adequacy of the organisation's governance architecture — and actively engages with the strategic dimensions of risk and compliance, not just the operational outcomes.
            </p>

            {/* Pull Quote */}
            <blockquote style={{
              borderLeft: "3px solid #3B2A4A",
              margin: "36px 0",
              padding: "20px 28px",
              backgroundColor: "rgba(59,42,74,0.04)",
              borderRadius: "0 8px 8px 0",
            }}>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(17px, 2vw, 21px)",
                fontStyle: "italic",
                color: "#3B2A4A",
                lineHeight: 1.5,
                margin: 0,
              }}>
                "The board that waits for a compliance breach to engage with its governance framework has already failed in one of its primary fiduciary responsibilities."
              </p>
            </blockquote>

            <p style={{ marginBottom: 24 }}>
              In practice, this looks like: a dedicated governance and risk committee with clear terms of reference; a chief risk officer or equivalent who has direct and unfiltered access to the board; a risk appetite statement that is set at the board level and cascaded consistently across the organisation; and a culture of challenge and accountability that is modelled from the top.
            </p>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(20px, 2.5vw, 26px)",
              fontWeight: 700,
              color: "#2A2A2A",
              marginTop: 40,
              marginBottom: 16,
              lineHeight: 1.3,
            }}>
              The NGO Imperative
            </h2>

            <p style={{ marginBottom: 24 }}>
              While the conversation about board governance has historically centred on listed companies, the stakes for NGOs are equally high — arguably higher, given the direct dependence on donor trust and the vulnerability to reputational damage. An NGO board that is passive on compliance is not just exposing its organisation to regulatory risk; it is eroding the credibility that makes its work possible.
            </p>

            <p style={{ marginBottom: 24 }}>
              Institutional donors — bilateral agencies, multilateral funds, major foundations — are increasingly sophisticated in their assessment of governance quality. A strong GRC posture is no longer simply a compliance requirement; it is a competitive advantage in grant-seeking and partnership formation.
            </p>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(20px, 2.5vw, 26px)",
              fontWeight: 700,
              color: "#2A2A2A",
              marginTop: 40,
              marginBottom: 16,
              lineHeight: 1.3,
            }}>
              Three Practical Starting Points
            </h2>

            {[
              { title: "Conduct a governance self-assessment", body: "Use a structured tool — King IV, the Governance Institute's frameworks, or a customised instrument — to establish where the board currently sits against best practice. Benchmark honestly, including on less comfortable dimensions like independence and succession." },
              { title: "Establish a dedicated risk appetite conversation", body: "The board should be having an explicit, documented conversation about how much risk the organisation is willing to accept in pursuit of its strategic objectives. This conversation should precede, not follow, the annual planning cycle." },
              { title: "Create direct lines of escalation", body: "Compliance and risk functions should have a clear, protected channel to escalate concerns to the board — bypassing executive management where necessary. This requires both structural provision and cultural willingness to use it." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 20, marginBottom: 24 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: "#6E1E2E", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 600, flexShrink: 0 }}>
                  {i + 1}
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: "#2A2A2A", marginBottom: 6 }}>{item.title}</div>
                  <p style={{ color: "#6B6560", margin: 0 }}>{item.body}</p>
                </div>
              </div>
            ))}

            <p style={{ marginBottom: 0, marginTop: 32 }}>
              The organisations that will lead in the coming decade are not those with the most sophisticated compliance software or the thickest policy manuals. They are those where the board has decided — genuinely decided — that governance excellence is a strategic priority, and has organised the institution accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section style={{ backgroundColor: "#F5F4F2", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(22px, 2.5vw, 30px)",
            fontWeight: 700,
            color: "#2A2A2A",
            marginBottom: 36,
          }}>
            Related Articles
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="related-grid">
            {relatedPosts.map((p) => (
              <Link key={p.title} to="/insights/post" style={{ textDecoration: "none" }}>
                <article
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: 10,
                    overflow: "hidden",
                    transition: "box-shadow 0.2s, transform 0.2s",
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
                  <div style={{ height: 160, overflow: "hidden", backgroundColor: "#EDEBE8" }}>
                    <img
                      src={`https://images.unsplash.com/photo-${p.imageId}?w=600&h=320&fit=crop&auto=format`}
                      alt={p.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "20px" }}>
                    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#3B2A4A", marginBottom: 8 }}>{p.category}</div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 600, color: "#2A2A2A", lineHeight: 1.3, marginBottom: 8 }}>{p.title}</h3>
                    <div style={{ fontSize: 12, color: "#6B6560" }}>{p.date}</div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .related-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
