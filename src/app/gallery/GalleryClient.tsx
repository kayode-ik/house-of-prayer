"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import type { GalleryPageContent, GalleryCategory } from "@/types/content";

const NAVY = "#0d1b2a";
const ORANGE = "#E8722A";
const GREY = "#6b7280";

export default function GalleryClient({ c }: { c: GalleryPageContent }) {
  const [active, setActive] = useState<GalleryCategory>("all");
  const filtered = active === "all" ? c.photos : c.photos.filter((p) => p.category === active);

  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section style={{ background: NAVY, padding: "80px 2rem 60px", textAlign: "center" }}>
        <p style={{ color: ORANGE, fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
          Church Life
        </p>
        <h1 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: 16 }}>
          {c.hero.heading}
        </h1>
        <p style={{ color: "#A0AEC0", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
          {c.hero.subheading}
        </p>
      </section>

      {/* ── Filter tabs ── */}
      <section style={{ background: "#fff", padding: "40px 2rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
            {c.categories.map((cat) => {
              const isActive = active === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActive(cat.value)}
                  style={{
                    padding: "9px 20px", borderRadius: 24,
                    border: isActive ? "none" : "1.5px solid #E2E8F0",
                    background: isActive ? ORANGE : "#fff",
                    color: isActive ? "#fff" : GREY,
                    fontWeight: isActive ? 700 : 500,
                    fontSize: 14, cursor: "pointer", transition: "all 0.2s",
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Photo grid ── */}
      <section style={{ background: "#fff", padding: "32px 2rem 70px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {filtered.length === 0 ? (
            <p style={{ color: GREY, textAlign: "center", padding: "40px 0", fontStyle: "italic" }}>
              No photos in this category yet.
            </p>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
              {filtered.map((photo) => (
                <div key={photo.id} style={{ borderRadius: 12, overflow: "hidden", position: "relative", aspectRatio: "4/3", background: "#1E3048", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
                  <Image src={photo.src} alt={photo.alt} fill
                    style={{ objectFit: "cover", transition: "transform 0.3s ease" }}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  {photo.caption && (
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.7))", padding: "24px 14px 12px" }}>
                      <p style={{ color: "#fff", fontSize: 13, fontWeight: 600, margin: 0 }}>{photo.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* CMS note */}
          {/* <div style={{ marginTop: 40, background: "#f7f8fa", border: "1.5px dashed #CBD5E0", borderRadius: 10, padding: "20px 24px", textAlign: "center" }}>
            <p style={{ color: GREY, fontSize: 14, margin: 0, display: "flex", alignItems: "flex-start", gap: 8, justifyContent: "center" }}>
              <ImageIcon size={16} color={GREY} style={{ flexShrink: 0, marginTop: 2 }} />
              <span><strong>Adding real photos:</strong> Upload photos via the Sanity Studio at <code style={{ background: "#E2E8F0", padding: "2px 6px", borderRadius: 4, fontSize: 12 }}>/studio</code> → Gallery Page → Photos.</span>
            </p>
          </div> */}
        </div>
      </section>
    </PageLayout>
  );
}
