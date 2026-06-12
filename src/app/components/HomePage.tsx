import { Link } from "react-router";

const services = [
  { icon: "⚖️", title: "GRC Advisory", desc: "Strategic guidance on governance frameworks, risk registers, and compliance programmes tailored to your sector." },
  { icon: "🎯", title: "Mentorship & Coaching", desc: "One-on-one and group mentorship for emerging compliance professionals and organisational leaders." },
  { icon: "🏛️", title: "Organisations Development", desc: "Building resilient people-centred structures that align culture, capacity, and strategic direction." },
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "80+", label: "Organisations Served" },
  { value: "12", label: "Countries Reached" },
  { value: "200+", label: "Professionals Mentored" },
];

const insights = [
  {
    category: "Governance",
    title: "Why Board-Level GRC Ownership Is No Longer Optional",
    excerpt: "As regulatory environments grow more complex, organisations that treat governance as a checkbox exercise are falling behind. Here's what genuine board ownership looks like.",
    date: "5 June 2026",
    readTime: "6 min read",
  },
  {
    category: "Risk",
    title: "Building a Risk Culture That Sticks: Beyond the Framework",
    excerpt: "Risk frameworks are only as effective as the culture that sustains them. This piece explores how to embed risk-awareness into the daily decisions of every team.",
    date: "22 May 2026",
    readTime: "8 min read",
  },
  {
    category: "Compliance",
    title: "SOPs That People Actually Follow: A Practitioner's Guide",
    excerpt: "Most standard operating procedures collect dust. These principles will help you write procedures that are clear, contextual, and genuinely adopted.",
    date: "14 May 2026",
    readTime: "5 min read",
  },
];

export function HomePage() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hero */}
      <section style={{
        backgroundColor: "#F5F4F2",
        paddingTop: 160,
        paddingBottom: 100,
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative violet bar */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 6,
          height: "100%",
          backgroundColor: "#3B2A4A",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }} className="hero-grid">
            {/* Text */}
            <div>
              <div style={{
                display: "inline-block",
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#6E1E2E",
                marginBottom: 28,
                borderBottom: "1px solid #6E1E2E",
                paddingBottom: 6,
              }}>
                GRC Consultant & Advisor
              </div>

              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(36px, 5vw, 58px)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#2A2A2A",
                marginBottom: 28,
                letterSpacing: "-0.02em",
              }}>
                Governance.<br />
                Risk.<br />
                <span style={{ color: "#6E1E2E" }}>Compliance.</span><br />
                Excellence.
              </h1>

              <p style={{
                fontSize: 17,
                lineHeight: 1.75,
                color: "#6B6560",
                marginBottom: 40,
                maxWidth: 480,
              }}>
                Muyaka Ngulube-Banda is a seasoned GRC expert helping corporations, NGOs, and institutional partners navigate complexity with confidence, clarity, and integrity.
              </p>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Link
                  to="/contact"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#6E1E2E",
                    color: "#FFFFFF",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15,
                    fontWeight: 500,
                    padding: "14px 32px",
                    borderRadius: 8,
                    textDecoration: "none",
                    letterSpacing: "0.02em",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5A1825")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#6E1E2E")}
                >
                  Book a Consultation
                </Link>
                <Link
                  to="/services"
                  style={{
                    display: "inline-block",
                    backgroundColor: "transparent",
                    color: "#2A2A2A",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15,
                    fontWeight: 500,
                    padding: "14px 32px",
                    borderRadius: 8,
                    textDecoration: "none",
                    border: "1px solid rgba(42,42,42,0.25)",
                    letterSpacing: "0.02em",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#6E1E2E"; e.currentTarget.style.color = "#6E1E2E"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(42,42,42,0.25)"; e.currentTarget.style.color = "#2A2A2A"; }}
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* Headshot placeholder */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative" }}>
                <div style={{
                  width: 340,
                  height: 380,
                  borderRadius: 12,
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0 20px 60px rgba(59,42,74,0.15)",
                }}>
                  <img
                    src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=680&h=760&fit=crop&auto=format"
                    alt="Muyaka Ngulube-Banda, GRC Consultant"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "40%",
                    background: "linear-gradient(to top, rgba(59,42,74,0.6), transparent)",
                  }} />
                </div>
                {/* Accent box */}
                <div style={{
                  position: "absolute",
                  bottom: -16,
                  right: -16,
                  width: 100,
                  height: 100,
                  borderRadius: 8,
                  backgroundColor: "#6E1E2E",
                  opacity: 0.12,
                  zIndex: -1,
                }} />
                <div style={{
                  position: "absolute",
                  top: -16,
                  left: -16,
                  width: 60,
                  height: 60,
                  borderRadius: 6,
                  backgroundColor: "#3B2A4A",
                  opacity: 0.12,
                  zIndex: -1,
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor: "#3B2A4A", padding: "40px 32px" }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
          textAlign: "center",
        }} className="stats-grid">
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 36,
                fontWeight: 700,
                color: "#F5F4F2",
                marginBottom: 4,
              }}>
                {s.value}
              </div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                color: "rgba(245,244,242,0.6)",
                letterSpacing: "0.04em",
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Snippet */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "100px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }} className="about-grid">
            <div>
              <div style={{
                width: 40,
                height: 3,
                backgroundColor: "#6E1E2E",
                marginBottom: 24,
              }} />
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 700,
                color: "#2A2A2A",
                lineHeight: 1.25,
                marginBottom: 24,
              }}>
                A Trusted Partner in Governance Excellence
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#6B6560", marginBottom: 20 }}>
                With over 15 years of experience across Southern and East Africa, Muyaka Ngulube-Banda brings rigorous expertise and genuine commitment to every engagement. Her work spans corporate governance, risk management frameworks, compliance programme design, and capacity building for diverse organisations.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#6B6560", marginBottom: 36 }}>
                She holds professional credentials in GRC, has served on advisory boards, and has led transformative initiatives for NGOs, financial institutions, and government bodies across the region.
              </p>
              <Link
                to="/about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#6E1E2E",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  textDecoration: "none",
                  borderBottom: "1px solid #6E1E2E",
                  paddingBottom: 2,
                }}
              >
                Read Full Biography →
              </Link>
            </div>

            {/* Credentials */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { label: "Governance Frameworks", detail: "ISO 37000, King IV, COSO ERM" },
                { label: "Risk Management", detail: "Enterprise Risk, Operational Risk, Basel Alignment" },
                { label: "Compliance Programme Design", detail: "Regulatory Mapping, Policy Architecture" },
                { label: "Capacity Building", detail: "Training Design, Mentorship, SOP Development" },
                { label: "Sectors", detail: "NGOs, Financial Services, Government, Health" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: 16,
                    padding: "20px 24px",
                    backgroundColor: "#F5F4F2",
                    borderRadius: 10,
                    borderLeft: "3px solid #3B2A4A",
                  }}
                >
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#2A2A2A", marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontSize: 13, color: "#6B6560" }}>{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section style={{ backgroundColor: "#F5F4F2", padding: "100px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{
              display: "inline-block",
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#6E1E2E",
              marginBottom: 16,
            }}>
              What I Offer
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontWeight: 700,
              color: "#2A2A2A",
              lineHeight: 1.25,
              marginBottom: 16,
            }}>
              Professional Services
            </h2>
            <p style={{ fontSize: 16, color: "#6B6560", maxWidth: 520, margin: "0 auto" }}>
              Comprehensive advisory services built on deep expertise and a commitment to lasting organisational improvement.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }} className="services-grid">
            {services.map((s) => (
              <div
                key={s.title}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 10,
                  padding: "32px 28px",
                  border: "1px solid rgba(110,30,46,0.08)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                  cursor: "default",
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
                <div style={{ fontSize: 28, marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#2A2A2A",
                  marginBottom: 12,
                  lineHeight: 1.3,
                }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "#6B6560" }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link
              to="/services"
              style={{
                display: "inline-block",
                color: "#6E1E2E",
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
                border: "1px solid #6E1E2E",
                padding: "12px 32px",
                borderRadius: 8,
                transition: "background-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#6E1E2E"; e.currentTarget.style.color = "#FFFFFF"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#6E1E2E"; }}
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "100px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#6E1E2E",
                marginBottom: 12,
              }}>
                Latest Thinking
              </div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(26px, 3vw, 36px)",
                fontWeight: 700,
                color: "#2A2A2A",
                lineHeight: 1.25,
              }}>
                Insights & Perspectives
              </h2>
            </div>
            <Link
              to="/insights"
              style={{
                color: "#6E1E2E",
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                borderBottom: "1px solid #6E1E2E",
              }}
            >
              View all articles →
            </Link>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 28,
          }} className="insights-grid">
            {insights.map((article) => (
              <Link
                key={article.title}
                to="/insights/post"
                style={{ textDecoration: "none" }}
              >
                <article
                  style={{
                    backgroundColor: "#F5F4F2",
                    borderRadius: 10,
                    overflow: "hidden",
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
                  <div style={{ height: 180, backgroundColor: "#EDEBE8", overflow: "hidden" }}>
                    <img
                      src={`https://images.unsplash.com/photo-${article.category === "Governance" ? "1450101499163-c8848c66ca85" : article.category === "Risk" ? "1507003211169-0a1dd7228f2d" : "1554224155-8d04cb21cd6c"}?w=600&h=360&fit=crop&auto=format`}
                      alt={article.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s" }}
                    />
                  </div>
                  <div style={{ padding: "24px 24px 28px" }}>
                    <div style={{
                      display: "inline-block",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#3B2A4A",
                      marginBottom: 12,
                    }}>
                      {article.category}
                    </div>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 18,
                      fontWeight: 600,
                      color: "#2A2A2A",
                      lineHeight: 1.35,
                      marginBottom: 12,
                    }}>
                      {article.title}
                    </h3>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: "#6B6560", marginBottom: 16 }}>
                      {article.excerpt}
                    </p>
                    <div style={{ display: "flex", gap: 12, fontSize: 12, color: "#6B6560" }}>
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ backgroundColor: "#6E1E2E", padding: "80px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(26px, 3.5vw, 40px)",
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.25,
            marginBottom: 20,
          }}>
            Ready to Strengthen Your Organisation's GRC Foundation?
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.8)", marginBottom: 36 }}>
            Whether you're building a compliance programme from scratch or refining an existing framework, Muyaka is ready to help.
          </p>
          <Link
            to="/contact"
            style={{
              display: "inline-block",
              backgroundColor: "#FFFFFF",
              color: "#6E1E2E",
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              fontWeight: 600,
              padding: "14px 36px",
              borderRadius: 8,
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F5F4F2")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-grid > div:last-child { display: none; }
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .insights-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
