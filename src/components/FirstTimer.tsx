"use client";
import React, { useState } from "react";

const ORANGE = "#E8722A";
const DARK_NAVY = "#0d1b2a";
const MID_NAVY = "#1a2b3c";
const LIGHT_BG = "#f7f8fa";
const TEXT_DARK = "#1a2235";
const TEXT_GREY = "#6b7280";

const FirstTimer = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    howHeard: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const upd =
    (k: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));
  const handleSubmit = () => {
    if (form.name && form.email) setSubmitted(true);
  };
  return (
    <section
      id="first-timer"
      style={{ background: "#fff", padding: "5rem 2rem" }}
    >
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            color: TEXT_GREY,
            fontSize: 12,
            letterSpacing: 3,
            textTransform: "uppercase",
            fontWeight: 700,
            marginBottom: 12,
          }}
        >
          Welcome
        </p>
        <h2
          style={{
            color: TEXT_DARK,
            fontWeight: 900,
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            marginBottom: 12,
          }}
        >
          First Time Visiting?
        </h2>
        <p
          style={{
            color: TEXT_GREY,
            fontSize: 15,
            lineHeight: 1.7,
            marginBottom: 32,
          }}
        >
          We'd love to connect with you! Fill in your details and our team will
          reach out personally to welcome you.
        </p>
        {submitted ? (
          <div
            style={{
              background: "#f0fdf4",
              border: "1px solid #86efac",
              borderRadius: 12,
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 12 }}>🙌</div>
            <h3 style={{ color: "#16a34a", fontWeight: 800 }}>
              Welcome to the Family!
            </h3>
            <p style={{ color: TEXT_GREY }}>
              Our team will be in touch with you shortly.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              textAlign: "left",
            }}
          >
            {[
              { k: "name", label: "Full Name *", ph: "Your full name" },
              { k: "email", label: "Email Address *", ph: "your@email.com" },
              { k: "phone", label: "Phone Number", ph: "+44 7000 000000" },
            ].map((f) => (
              <div key={f.k}>
                <label
                  style={{
                    color: TEXT_DARK,
                    fontSize: 13,
                    fontWeight: 600,
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  {f.label}
                </label>
                <input
                  value={form[f.k as keyof typeof form]}
                  onChange={upd(f.k)}
                  placeholder={f.ph}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: 8,
                    border: "1.5px solid #e5e7eb",
                    fontSize: 14,
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            ))}
            <div>
              <label
                style={{
                  color: TEXT_DARK,
                  fontSize: 13,
                  fontWeight: 600,
                  display: "block",
                  marginBottom: 6,
                }}
              >
                How did you hear about us?
              </label>
              <select
                value={form.howHeard}
                onChange={upd("howHeard")}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: 8,
                  border: "1.5px solid #e5e7eb",
                  fontSize: 14,
                  background: "#fff",
                }}
              >
                <option value="">Select an option</option>
                <option>Facebook</option>
                <option>Instagram</option>
                <option>Friend / Family</option>
                <option>Walking Past</option>
                <option>Other</option>
              </select>
            </div>
            <button
              onClick={handleSubmit}
              style={{
                background: ORANGE,
                color: "#fff",
                border: "none",
                padding: "14px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 16,
                cursor: "pointer",
                marginTop: 8,
              }}
            >
              Submit — I'm New Here
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FirstTimer;
