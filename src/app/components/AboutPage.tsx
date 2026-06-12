const timeline = [
  {
    year: "2009",
    role: "Risk & Compliance Analyst",
    org: "First National Bank Zambia",
    desc: "Began professional career in financial sector compliance, supporting Basel II implementation and developing internal audit frameworks.",
  },
  {
    year: "2013",
    role: "Compliance Manager",
    org: "African Development Bank (Regional Office)",
    desc: "Led a team of six compliance officers, overseeing regulatory reporting and institutional risk assessments across Eastern Africa.",
  },
  {
    year: "2016",
    role: "Head of Governance & Risk",
    org: "Southern African NGO Consortium",
    desc: "Designed governance architecture for a coalition of 28 NGOs, implementing grants management controls and donor reporting frameworks.",
  },
  {
    year: "2020",
    role: "Independent GRC Consultant",
    org: "Ngulube-Banda Advisory",
    desc: "Founded an independent advisory practice serving corporates, NGOs, and government bodies across Sub-Saharan Africa.",
  },
];

const credentials = [
  { label: "Certified Risk Manager (CRM)", body: "Institute of Risk Management, UK" },
  { label: "Certified Compliance Officer (CCO)", body: "International Compliance Association" },
  { label: "ISO 37001 Lead Implementer", body: "Bureau Veritas Certification" },
  { label: "Advanced Corporate Governance", body: "Governance Institute of Southern Africa" },
  { label: "MSc Development Management", body: "University of Bath, UK" },
  { label: "BCom Accounting", body: "University of Zambia" },
];

export function AboutPage() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", paddingTop: 72 }}>
      {/* Page Header */}
      <section style={{ backgroundColor: "#F5F4F2", padding: "80px 32px 72px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: 6, height: "100%", backgroundColor: "#3B2A4A" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#6E1E2E", marginBottom: 16 }}>
            About
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 700,
            color: "#2A2A2A",
            lineHeight: 1.15,
            maxWidth: 700,
          }}>
            A Career Built on Integrity and Expertise
          </h1>
        </div>
      </section>

      {/* Bio Section */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="bio-grid">
            {/* Photo */}
            <div style={{ position: "relative" }}>
              <div style={{
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(59,42,74,0.12)",
              }}>
                <img
                  src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=700&h=800&fit=crop&auto=format"
                  alt="Muyaka Ngulube-Banda"
                  style={{ width: "100%", height: 480, objectFit: "cover", display: "block" }}
                />
              </div>
              <div style={{
                position: "absolute",
                bottom: -20,
                right: -20,
                backgroundColor: "#6E1E2E",
                borderRadius: 10,
                padding: "20px 24px",
                boxShadow: "0 8px 24px rgba(110,30,46,0.25)",
              }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: "#FFFFFF" }}>15+</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", marginTop: 2 }}>Years of GRC Excellence</div>
              </div>
            </div>

            {/* Bio Text */}
            <div>
              <div style={{ width: 40, height: 3, backgroundColor: "#6E1E2E", marginBottom: 28 }} />
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(24px, 3vw, 32px)",
                fontWeight: 700,
                color: "#2A2A2A",
                lineHeight: 1.3,
                marginBottom: 24,
              }}>
                Muyaka Ngulube-Banda
              </h2>
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#3B2A4A", marginBottom: 28 }}>
                GRC Consultant · Advisor · Mentor
              </div>
              {[
                "Muyaka Ngulube-Banda is one of Southern Africa's most respected voices in Governance, Risk, and Compliance. With a career spanning financial services, international development, and the NGO sector, she brings a rare combination of technical rigour and practical wisdom to every engagement.",
                "Her advisory work is grounded in the belief that strong governance is not a constraint on organisational ambition — it is its foundation. She has helped over 80 organisations across 12 countries redesign their governance structures, build resilient risk cultures, and embed compliance as a driver of strategic advantage.",
                "Beyond consulting, Muyaka is a committed mentor. She has coached more than 200 compliance professionals, many of whom now lead GRC functions at leading institutions across the continent. She is a sought-after speaker at governance forums and a published contributor to professional journals on corporate accountability.",
              ].map((para, i) => (
                <p key={i} style={{ fontSize: 15, lineHeight: 1.85, color: "#6B6560", marginBottom: 20 }}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section style={{ backgroundColor: "#F5F4F2", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#6E1E2E", marginBottom: 12 }}>
              Qualifications
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(24px, 3vw, 34px)",
              fontWeight: 700,
              color: "#2A2A2A",
              lineHeight: 1.25,
            }}>
              Credentials & Education
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="creds-grid">
            {credentials.map((c) => (
              <div key={c.label} style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 10,
                padding: "24px 24px",
                borderLeft: "3px solid #6E1E2E",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#2A2A2A", marginBottom: 6, lineHeight: 1.35 }}>{c.label}</div>
                <div style={{ fontSize: 13, color: "#6B6560" }}>{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "80px 32px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#6E1E2E", marginBottom: 12 }}>
              Career Journey
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(24px, 3vw, 34px)",
              fontWeight: 700,
              color: "#2A2A2A",
              lineHeight: 1.25,
            }}>
              Professional Timeline
            </h2>
          </div>

          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{
              position: "absolute",
              left: 56,
              top: 0,
              bottom: 0,
              width: 1,
              backgroundColor: "rgba(110,30,46,0.15)",
            }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {timeline.map((item, i) => (
                <div key={item.year} style={{ display: "flex", gap: 32, paddingBottom: i < timeline.length - 1 ? 48 : 0 }}>
                  {/* Year */}
                  <div style={{ width: 72, flexShrink: 0, paddingTop: 2, textAlign: "right" }}>
                    <span style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#6E1E2E",
                    }}>
                      {item.year}
                    </span>
                  </div>

                  {/* Dot */}
                  <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#6E1E2E", flexShrink: 0, marginTop: 6, marginLeft: -6, zIndex: 1 }} />

                  {/* Content */}
                  <div style={{ paddingTop: 0, flex: 1 }}>
                    <div style={{ fontSize: 16, fontWeight: 600, color: "#2A2A2A", marginBottom: 2 }}>{item.role}</div>
                    <div style={{ fontSize: 13, color: "#3B2A4A", fontWeight: 500, marginBottom: 10 }}>{item.org}</div>
                    <p style={{ fontSize: 14, lineHeight: 1.75, color: "#6B6560" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .bio-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .creds-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
