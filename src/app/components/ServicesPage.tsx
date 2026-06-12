import { Link } from "react-router";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Governance, Risk & Compliance Advisory",
    desc: "End-to-end GRC programme design and implementation. We help organisations build governance frameworks, risk registers, and compliance architectures that are practical, robust, and aligned with international standards including ISO 37000, King IV, and COSO ERM.",
    highlights: ["Governance framework design", "Risk appetite definition", "Regulatory compliance mapping", "Policy architecture"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Mentorship & Coaching",
    desc: "One-on-one and group mentorship for compliance professionals, emerging leaders, and executives navigating complex regulatory environments. Programmes are tailored to individual career trajectories and organisational contexts.",
    highlights: ["Executive coaching", "Professional GRC mentorship", "Leadership development", "Career pathway planning"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>
      </svg>
    ),
    title: "People & Organisations Development",
    desc: "Building resilient, people-centred organisations through structural design, culture change, and capability building. We align human resources strategy with governance objectives to create organisations that perform sustainably.",
    highlights: ["Organisational design", "Culture change management", "HR governance frameworks", "Capacity building programmes"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: "Development of SOPs",
    desc: "Writing and implementing Standard Operating Procedures that are clear, contextual, and genuinely adopted. We specialise in SOPs for finance, HR, procurement, grants management, and compliance functions across NGO and corporate settings.",
    highlights: ["Finance & procurement SOPs", "HR & people operations SOPs", "Compliance procedure manuals", "SOP training & rollout"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: "Assets Management",
    desc: "Designing and implementing asset management frameworks that ensure accountability, optimal utilisation, and regulatory compliance. Covering fixed assets, IT assets, and programmatic assets across complex multi-site organisations.",
    highlights: ["Asset register development", "Lifecycle management policy", "Asset verification systems", "Disposal frameworks"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: "Financial Management & Grants Oversight",
    desc: "Supporting organisations with robust financial governance, donor reporting, and grants management controls. We help NGOs and public benefit organisations meet USAID, EU, UN, and other institutional donor requirements.",
    highlights: ["Grants management systems", "Donor compliance frameworks", "Financial oversight policies", "Sub-grantee management"],
  },
];

export function ServicesPage() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", paddingTop: 72 }}>
      {/* Page Header */}
      <section style={{ backgroundColor: "#F5F4F2", padding: "80px 32px 72px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: 6, height: "100%", backgroundColor: "#3B2A4A" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#6E1E2E", marginBottom: 16 }}>
            What I Offer
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 700,
            color: "#2A2A2A",
            lineHeight: 1.15,
            marginBottom: 20,
            maxWidth: 640,
          }}>
            Professional Services Designed for Impact
          </h1>
          <p style={{ fontSize: 16, color: "#6B6560", maxWidth: 560, lineHeight: 1.75 }}>
            Each service is delivered with rigorous methodology, deep sector knowledge, and a genuine commitment to lasting organisational improvement.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 28 }} className="svc-grid">
            {services.map((s) => (
              <div
                key={s.title}
                style={{
                  backgroundColor: "#F5F4F2",
                  borderRadius: 10,
                  padding: "36px 32px",
                  border: "1px solid rgba(110,30,46,0.08)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(59,42,74,0.10)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                <div style={{ color: "#3B2A4A", marginBottom: 20 }}>{s.icon}</div>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#2A2A2A",
                  lineHeight: 1.3,
                  marginBottom: 16,
                }}>
                  {s.title}
                </h2>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: "#6B6560", marginBottom: 24 }}>{s.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {s.highlights.map((h) => (
                    <span key={h} style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: "#3B2A4A",
                      backgroundColor: "rgba(59,42,74,0.08)",
                      padding: "4px 12px",
                      borderRadius: 20,
                    }}>
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section style={{ backgroundColor: "#F5F4F2", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#6E1E2E", marginBottom: 12 }}>
              How I Work
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 700,
              color: "#2A2A2A",
              lineHeight: 1.25,
            }}>
              My Engagement Process
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="process-grid">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your organisation, its context, regulatory environment, and specific challenges through structured interviews and document review." },
              { step: "02", title: "Diagnosis", desc: "Gap analysis against relevant frameworks, benchmarking against sector peers, and identification of priority areas for intervention." },
              { step: "03", title: "Design", desc: "Co-creating tailored solutions with your team — frameworks, policies, procedures, and training programmes that fit your context." },
              { step: "04", title: "Delivery", desc: "Implementation support, stakeholder engagement, capacity building, and ongoing monitoring to embed changes sustainably." },
            ].map((p) => (
              <div key={p.step} style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 10,
                padding: "32px 24px",
                position: "relative",
              }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 48,
                  fontWeight: 700,
                  color: "rgba(110,30,46,0.08)",
                  lineHeight: 1,
                  marginBottom: 16,
                }}>
                  {p.step}
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#2A2A2A",
                  marginBottom: 12,
                }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "#6B6560" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#3B2A4A", padding: "72px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: 700,
            color: "#F5F4F2",
            marginBottom: 16,
          }}>
            Not Sure Where to Start?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(245,244,242,0.75)", lineHeight: 1.75, marginBottom: 32 }}>
            Book a complimentary 30-minute discovery call to discuss your organisation's needs and how I can help.
          </p>
          <Link
            to="/contact"
            style={{
              display: "inline-block",
              backgroundColor: "#6E1E2E",
              color: "#FFFFFF",
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              fontWeight: 500,
              padding: "14px 36px",
              borderRadius: 8,
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .svc-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
