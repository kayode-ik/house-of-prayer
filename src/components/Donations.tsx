import React from "react";
import Button from "./Button";
import "@/styles/donations.css";

const ORANGE = "#E8722A";
const DARK_NAVY = "#0d1b2a";
const MID_NAVY = "#1a2b3c";
const LIGHT_BG = "#f7f8fa";
const TEXT_DARK = "#1a2235";
const TEXT_GREY = "#6b7280";

const Donations = () => {
  const raised = 10635;
  const goal = 40000;
  const pct = Math.round((raised / goal) * 100);
  return (
    <section id="donate" style={{ background: LIGHT_BG, padding: "5rem 2rem" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
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
          Extra Giving Opportunities
        </p>
        <h2
          style={{
            color: TEXT_DARK,
            fontWeight: 900,
            fontSize: "clamp(1.5rem, 4vw, 2.3rem)",
            marginBottom: 16,
          }}
        >
          Donate to Make a Difference in Our Community
        </h2>
        <p
          style={{
            color: TEXT_GREY,
            maxWidth: 620,
            margin: "0 auto 36px",
            fontSize: 15,
            lineHeight: 1.7,
          }}
        >
          Your generosity helps us create a place of worship, prayer, and
          community impact. Every gift supports the growth and development of
          House of Prayer Bourne.
        </p>
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "2.5rem",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          }}
        >
          <h3
            style={{
              color: TEXT_DARK,
              fontWeight: 800,
              fontSize: 20,
              marginBottom: 6,
            }}
          >
            Securing Our Future: The Building &amp; Development Project
          </h3>
          <div
            style={{
              width: 48,
              height: 3,
              background: "#22c55e",
              margin: "0 auto 20px",
              borderRadius: 2,
            }}
          />
          <p
            style={{
              color: TEXT_GREY,
              fontSize: 14,
              lineHeight: 1.7,
              marginBottom: 28,
              maxWidth: 580,
              margin: "0 auto 28px",
            }}
          >
            We are raising <strong>£40,000</strong> to secure a permanent home
            for House of Prayer Bourne. Every gift supports the restoration of
            our facilities at the <strong>Youth Bourne Centre</strong> and
            expands our reach in the community.
          </p>
          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 16,
              marginBottom: 24,
            }}
          >
            {[
              { label: "raised", val: `£${raised.toLocaleString("en-GB")}` },
              { label: "donations", val: "—" },
              { label: "goal", val: "£40,000" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    color: TEXT_DARK,
                    fontWeight: 900,
                    fontSize: 24,
                    margin: 0,
                  }}
                >
                  {s.val}
                </p>
                <p
                  style={{ color: TEXT_GREY, fontSize: 13, margin: "4px 0 0" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          {/* Progress bar */}
          <div
            style={{
              background: "#e5e7eb",
              borderRadius: 99,
              height: 10,
              marginBottom: 8,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${pct}%`,
                height: "100%",
                background: ORANGE,
                borderRadius: 99,
                transition: "width 0.6s ease",
              }}
            />
          </div>
          <p style={{ color: TEXT_GREY, fontSize: 13, marginBottom: 24 }}>
            {pct}% of £40,000 goal reached
          </p>
          <a
            href="https://www.justgiving.com/charity/3792317"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              background: ORANGE,
              color: "#fff",
              padding: "16px 0",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            Donate Now →
          </a>
          <p style={{ color: TEXT_GREY, fontSize: 12, marginTop: 12 }}>
            🔒 Secure Donation via JustGiving
          </p>
        </div>
      </div>
    </section>
  );
};

export default Donations;
