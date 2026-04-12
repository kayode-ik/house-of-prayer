/**
 * Home page — House of Prayer Bourne
 *
 * All content is sourced from /src/lib/content.ts.
 * To connect a CMS, replace that file's export with an async fetch
 * that returns the same SiteContent shape — no component changes needed.
 */

import Benefits from "@/components/Benefits";
import CurrentSeries from "@/components/CurrentSeries";
import Donations from "@/components/Donations";
import FirstTimer from "@/components/FirstTimer";
import Gatherings from "@/components/Gatherings";
import Hero from "@/components/Hero";
import LiveStream from "@/components/LiveStream";
import PageLayout from "@/components/PageLayout";
import PastorGoal from "@/components/PastorGoal";
import Services from "@/components/Services";
import SoulWinningBanner from "@/components/SoulWinningBanner";
import { getSiteContent } from "@/lib/content";

export const revalidate = 60;

export default async function Home() {
  const c = await getSiteContent();

  return (
    <PageLayout>
      {/* ── Hero ── */}
      <div id="home" style={{ marginTop: -64 }}>
        <Hero content={c.hero} />
      </div>

      {/* ── Soul Winning Banner (high-visibility, above the fold) ── */}
      <SoulWinningBanner content={c.soulWinningBanner} />

      {/* ── Live Stream ── */}
      <section id="livestream">
        <LiveStream content={c.liveStream} />
      </section>

      {/* ── Services ── */}
      <section id="services">
        <Services content={c.services} />
      </section>

      {/* ── Benefits ── */}
      <section id="benefits">
        <Benefits content={c.benefits} />
      </section>

      {/* ── Weekly Gatherings ── */}
      <section id="gatherings">
        <Gatherings content={c.gatherings} />
      </section>

      {/* ── Current Series ── */}
      <section id="series">
        <CurrentSeries content={c.currentSeries} />
      </section>

      {/* ── Donations / Fundraising ── */}
      <section id="donate">
        <Donations content={c.donations} />
      </section>

      {/* ── Pastor / Leadership ── */}
      <section id="pastor">
        <PastorGoal content={c.pastorGoal} />
      </section>

      {/* ── First Timer Form ── */}
      <section id="first-timer">
        <FirstTimer content={c.firstTimer} />
      </section>
    </PageLayout>
  );
}
