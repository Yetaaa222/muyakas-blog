import { useState } from "react";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 8,
    border: "1px solid rgba(42,42,42,0.18)",
    backgroundColor: "#FFFFFF",
    fontFamily: "'Inter', sans-serif",
    fontSize: 15,
    color: "#2A2A2A",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: "#2A2A2A",
    marginBottom: 8,
    letterSpacing: "0.02em",
  };

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", paddingTop: 72 }}>
      {/* Page Header */}
      <section style={{ backgroundColor: "#F5F4F2", padding: "80px 32px 72px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: 6, height: "100%", backgroundColor: "#3B2A4A" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#6E1E2E", marginBottom: 16 }}>
            Get in Touch
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 700,
            color: "#2A2A2A",
            lineHeight: 1.15,
            marginBottom: 20,
          }}>
            Let's Start a Conversation
          </h1>
          <p style={{ fontSize: 16, color: "#6B6560", maxWidth: 520, lineHeight: 1.75 }}>
            Whether you're ready to engage or just exploring options, I welcome every inquiry. Responses within 48 hours on business days.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "80px 32px 100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80 }} className="contact-grid">
            {/* Contact Info */}
            <div>
              <div style={{ width: 40, height: 3, backgroundColor: "#6E1E2E", marginBottom: 28 }} />
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(22px, 2.5vw, 28px)",
                fontWeight: 700,
                color: "#2A2A2A",
                marginBottom: 24,
                lineHeight: 1.3,
              }}>
                Contact Details
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 48 }}>
                {[
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                      </svg>
                    ),
                    label: "Email",
                    value: "muyaka@ngulubebanda.com",
                    href: "mailto:muyaka@ngulubebanda.com",
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                    ),
                    label: "Location",
                    value: "Lusaka, Zambia (Remote-capable globally)",
                    href: undefined,
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                      </svg>
                    ),
                    label: "LinkedIn",
                    value: "linkedin.com/in/muyakangulube-banda",
                    href: "#",
                  },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      backgroundColor: "rgba(59,42,74,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#3B2A4A",
                      flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#6B6560", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: 4 }}>{item.label}</div>
                      {item.href ? (
                        <a href={item.href} style={{ fontSize: 14, color: "#6E1E2E", textDecoration: "none" }}>{item.value}</a>
                      ) : (
                        <span style={{ fontSize: 14, color: "#2A2A2A" }}>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability */}
              <div style={{
                backgroundColor: "#F5F4F2",
                borderRadius: 10,
                padding: "24px",
                borderLeft: "3px solid #6E1E2E",
              }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#2A2A2A", marginBottom: 8 }}>Current Availability</div>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: "#6B6560", margin: 0 }}>
                  I am currently accepting new client engagements for Q3 2026. Capacity for advisory retainers, project-based work, and speaking engagements.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div style={{
                  backgroundColor: "#F5F4F2",
                  borderRadius: 12,
                  padding: "60px 48px",
                  textAlign: "center",
                  border: "1px solid rgba(110,30,46,0.10)",
                }}>
                  <div style={{ fontSize: 48, marginBottom: 20 }}>✓</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "#2A2A2A", marginBottom: 16 }}>
                    Message Received
                  </h3>
                  <p style={{ fontSize: 15, color: "#6B6560", lineHeight: 1.75 }}>
                    Thank you for reaching out. I'll review your message and respond within 48 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="form-row">
                    <div>
                      <label style={labelStyle} htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#6E1E2E")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(42,42,42,0.18)")}
                      />
                    </div>
                    <div>
                      <label style={labelStyle} htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#6E1E2E")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(42,42,42,0.18)")}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle} htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      style={{ ...inputStyle, appearance: "none" as const, backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236B6560' stroke-width='1.5' fill='none'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center", paddingRight: 40 }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#6E1E2E")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(42,42,42,0.18)")}
                    >
                      <option value="">Select a topic</option>
                      <option value="grc-advisory">GRC Advisory Engagement</option>
                      <option value="mentorship">Mentorship & Coaching</option>
                      <option value="speaking">Speaking Engagement</option>
                      <option value="sop">SOP Development</option>
                      <option value="other">General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle} htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell me about your organisation, your challenge, and what kind of support you're looking for."
                      style={{ ...inputStyle, resize: "vertical" as const, minHeight: 160 }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#6E1E2E")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(42,42,42,0.18)")}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#6E1E2E",
                      color: "#FFFFFF",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 15,
                      fontWeight: 500,
                      padding: "15px 40px",
                      borderRadius: 8,
                      border: "none",
                      cursor: "pointer",
                      letterSpacing: "0.02em",
                      transition: "background-color 0.2s",
                      alignSelf: "flex-start",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5A1825")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#6E1E2E")}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
