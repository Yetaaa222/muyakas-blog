import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Insights", to: "/insights" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? "rgba(245,244,242,0.97)" : "#F5F4F2",
        borderBottom: scrolled ? "1px solid rgba(110,30,46,0.10)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 18,
                fontWeight: 600,
                color: "#6E1E2E",
                letterSpacing: "-0.01em",
              }}>
                Muyaka Ngulube-Banda
              </span>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 400,
                color: "#6B6560",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}>
                GRC Consultant
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 36 }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  color: location.pathname === link.to ? "#6E1E2E" : "#2A2A2A",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  borderBottom: location.pathname === link.to ? "1px solid #6E1E2E" : "1px solid transparent",
                  paddingBottom: 2,
                  transition: "color 0.2s, border-color 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: "#FFFFFF",
                backgroundColor: "#6E1E2E",
                textDecoration: "none",
                padding: "10px 22px",
                borderRadius: 8,
                letterSpacing: "0.02em",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5A1825")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#6E1E2E")}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="mobile-menu-btn"
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              color: "#2A2A2A",
            }}
            aria-label="Toggle menu"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <span style={{ display: "block", width: 22, height: 2, backgroundColor: "#2A2A2A", transition: "all 0.2s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
              <span style={{ display: "block", width: 22, height: 2, backgroundColor: "#2A2A2A", transition: "all 0.2s", opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: "block", width: 22, height: 2, backgroundColor: "#2A2A2A", transition: "all 0.2s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{
            borderTop: "1px solid rgba(110,30,46,0.10)",
            paddingTop: 16,
            paddingBottom: 20,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  color: location.pathname === link.to ? "#6E1E2E" : "#2A2A2A",
                  textDecoration: "none",
                  padding: "10px 0",
                  borderBottom: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                fontWeight: 500,
                color: "#FFFFFF",
                backgroundColor: "#6E1E2E",
                textDecoration: "none",
                padding: "12px 22px",
                borderRadius: 8,
                marginTop: 8,
                textAlign: "center",
              }}
            >
              Contact
            </Link>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
