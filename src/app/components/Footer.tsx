import { Link } from "react-router";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#3B2A4A", color: "#F5F4F2" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px 40px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 48,
          marginBottom: 48,
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 20,
                fontWeight: 600,
                color: "#F5F4F2",
                marginBottom: 4,
              }}>
                Muyaka Ngulube-Banda
              </div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 400,
                color: "rgba(245,244,242,0.6)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}>
                GRC Consultant
              </div>
            </div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              lineHeight: 1.7,
              color: "rgba(245,244,242,0.7)",
              maxWidth: 260,
            }}>
              Empowering organisations to govern confidently, manage risk wisely, and comply with integrity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(245,244,242,0.5)",
              marginBottom: 20,
            }}>
              Navigation
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Insights", to: "/insights" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    color: "rgba(245,244,242,0.75)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F4F2")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,244,242,0.75)")}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(245,244,242,0.5)",
              marginBottom: 20,
            }}>
              Services
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "GRC Advisory",
                "Mentorship & Coaching",
                "Organisations Development",
                "SOP Development",
                "Assets Management",
                "Grants Management",
              ].map((s) => (
                <span key={s} style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: "rgba(245,244,242,0.75)",
                }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(245,244,242,0.5)",
              marginBottom: 20,
            }}>
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="mailto:muyaka@ngulubebanda.com" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                color: "rgba(245,244,242,0.75)",
                textDecoration: "none",
              }}>
                muyaka@ngulubebanda.com
              </a>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(245,244,242,0.75)" }}>
                Lusaka, Zambia
              </span>
              {/* Social icons */}
              <div style={{ display: "flex", gap: 14, marginTop: 8 }}>
                {/* LinkedIn */}
                <a href="#" aria-label="LinkedIn" style={{ color: "rgba(245,244,242,0.7)", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F4F2")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,244,242,0.7)")}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                {/* Twitter/X */}
                <a href="#" aria-label="Twitter" style={{ color: "rgba(245,244,242,0.7)", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F4F2")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,244,242,0.7)")}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid rgba(245,244,242,0.12)",
          paddingTop: 28,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            color: "rgba(245,244,242,0.45)",
          }}>
            © 2026 Muyaka Ngulube-Banda. All rights reserved.
          </p>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            color: "rgba(245,244,242,0.45)",
          }}>
            Governance · Risk · Compliance
          </p>
        </div>
      </div>
    </footer>
  );
}
