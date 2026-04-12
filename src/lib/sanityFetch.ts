/**
 * sanityFetch.ts
 *
 * All async data-fetching functions that pull from Sanity and map the
 * raw document fields back to the same TypeScript interfaces used throughout
 * the app.  Swapping the static content.ts is simply a matter of calling
 * these functions instead.
 */

import { getClient, urlFor } from "./sanityClient";

/** Wraps any Sanity fetch in a try/catch — returns null on any error so
 *  content.ts getters always fall back to static data gracefully. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function safeFetch(query: string): Promise<any> {
  try {
    const c = getClient();
    if (!c) return null;
    // Cache Sanity responses for 60 seconds (Next.js ISR).
    // The page serves instantly from cache; Sanity is only hit in the background.
    const result = await c.fetch(query, {}, { next: { revalidate: 60 } });
    return result ?? null;
  } catch {
    return null;
  }
}

import type {
  SiteContent,
  LivePageContent,
  ServicesPageContent,
  SeriesPageContent,
  AboutPageContent,
  GalleryPageContent,
  ContactPageContent,
  DonatePageContent,
} from "@/types/content";

// ── helpers ───────────────────────────────────────────────────────────────────

/** Returns true when Sanity is configured (PROJECT_ID env var is set) */
export function isSanityConfigured(): boolean {
  return !!(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
}

// ── siteContent (home page) ───────────────────────────────────────────────────

export async function fetchSiteContent(): Promise<SiteContent | null> {
  const d = await safeFetch(`*[_type == "siteSettings"][0]`);
  if (!d) return null;

  return {
    navbar: {
      links:    (d.navLinks   ?? []).map((l: { name: string; href: string }) => ({ name: l.name, href: l.href })),
      ctaLabel: d.navCtaLabel ?? "Donate",
      ctaHref:  d.navCtaHref  ?? "/donate",
    },
    hero: {
      eyebrow:      d.heroEyebrow      ?? "",
      headline:     d.heroHeadline     ?? "",
      themeOfYear:  d.heroTheme        ?? "",
      subheadline:  d.heroSubheadline  ?? "",
      ctaPrimary:   { label: d.heroPrimaryLabel   ?? "", href: d.heroPrimaryHref   ?? "" },
      ctaSecondary: { label: d.heroSecondaryLabel ?? "", href: d.heroSecondaryHref ?? "" },
    },
    soulWinningBanner: {
      text:      d.bannerText      ?? "",
      linkLabel: d.bannerLinkLabel ?? "",
      linkHref:  d.bannerLinkHref  ?? "",
    },
    liveStream: {
      title:         d.liveTitle      ?? "",
      schedule:      d.liveSchedule   ?? "",
      venueName:     d.liveVenueName  ?? "",
      venueAddress:  d.liveVenueAddr  ?? "",
      mapsUrl:       d.liveMapsUrl    ?? "",
      streamUrl:     d.liveStreamUrl  ?? "",
      pastMessagesUrl: d.livePastMsgUrl ?? "",
      image:         d.liveImage ? urlFor(d.liveImage) : "",
    },
    services: {
      eyebrow:      d.servicesEyebrow ?? "",
      heading:      d.servicesHeading ?? "",
      description1: d.servicesDesc1   ?? "",
      description2: d.servicesDesc2   ?? "",
      cards: (d.servicesCards ?? []).map((c: { iconName: string; title: string; text: string }) => ({
        iconName: c.iconName, title: c.title, text: c.text,
      })),
    },
    benefits: {
      eyebrow:    d.benefitsEyebrow    ?? "",
      heading:    d.benefitsHeading    ?? "",
      subheading: d.benefitsSubheading ?? "",
      cards: (d.benefitsCards ?? []).map((c: { icon: string; title: string; description: string }) => ({
        icon: c.icon, title: c.title, description: c.description,
      })),
    },
    gatherings: {
      eyebrow:    d.gatheringsEyebrow    ?? "",
      heading:    d.gatheringsHeading    ?? "",
      subheading: d.gatheringsSubheading ?? "",
      items: (d.gatheringItems ?? []).map((g: {
        type: string; badgeLabel: string; title: string; time: string;
        description: string; mapsUrl?: string;
      }) => ({
        type:        g.type,
        badgeLabel:  g.badgeLabel,
        title:       g.title,
        time:        g.time,
        description: g.description,
        mapsUrl:     g.mapsUrl,
      })),
    },
    currentSeries: {
      eyebrow:     d.seriesEyebrow     ?? "",
      title:       d.seriesTitle       ?? "",
      description: d.seriesDescription ?? "",
    },
    donations: {
      eyebrow:            d.donationsEyebrow     ?? "",
      heading:            d.donationsHeading     ?? "",
      subheading:         d.donationsSubheading  ?? "",
      projectTitle:       d.donationsProjectTitle ?? "",
      projectDescription: d.donationsProjectDesc  ?? "",
      raised:             d.donationsRaised       ?? 0,
      goal:               d.donationsGoal         ?? 40000,
      donationUrl:        d.donationsUrl          ?? "",
    },
    pastorGoal: {
      quote:  d.pastorQuote ?? "",
      body1:  d.pastorBody1 ?? "",
      body2:  d.pastorBody2 ?? "",
      name:   d.pastorName  ?? "",
      title:  d.pastorTitle ?? "",
      image:  d.pastorImage ? urlFor(d.pastorImage) : "",
    },
    firstTimer: {
      eyebrow:           d.firstTimerEyebrow    ?? "",
      heading:           d.firstTimerHeading    ?? "",
      subheading:        d.firstTimerSubheading ?? "",
      hearAboutOptions:  d.firstTimerHearOptions ?? [],
      notificationEmail: d.firstTimerEmail       ?? "",
    },
    footer: {
      description: d.footerDescription ?? "",
      address:     d.footerAddress     ?? "",
      mapsUrl:     d.footerMapsUrl     ?? "",
      phone:       d.footerPhone       ?? "",
      socialLinks: (d.footerSocials ?? []).map((s: { platform: string; href: string; label: string }) => ({
        platform: s.platform, href: s.href, label: s.label,
      })),
      gatheringLinks: (d.footerGatheringLinks ?? []).map((l: { label: string; href: string }) => ({
        label: l.label, href: l.href,
      })),
      usefulLinks: (d.footerUsefulLinks ?? []).map((l: { label: string; href: string; highlight?: boolean }) => ({
        label: l.label, href: l.href, highlight: l.highlight,
      })),
    },
  };
}

// ── Live Page ─────────────────────────────────────────────────────────────────

export async function fetchLivePage(): Promise<LivePageContent | null> {
  const d = await safeFetch(`*[_type == "livePage"][0]`);
  if (!d) return null;
  return {
    hero:         { heading: d.heroHeading ?? "", subheading: d.heroSubheading ?? "" },
    streamEmbed:  { title: d.streamTitle ?? "", description: d.streamDescription ?? "", youtubeChannelUrl: d.youtubeChannelUrl ?? "" },
    schedule:     {
      heading: d.scheduleHeading ?? "",
      items: (d.scheduleItems ?? []).map((i: { time: string; label: string; isLive: boolean }) => ({
        time: i.time, label: i.label, isLive: !!i.isLive,
      })),
    },
    pastMessages: { heading: d.pastMessagesHeading ?? "", subheading: d.pastMessagesSubheading ?? "" },
  };
}

// ── Services Page ─────────────────────────────────────────────────────────────

export async function fetchServicesPage(): Promise<ServicesPageContent | null> {
  const d = await safeFetch(`*[_type == "servicesPage"][0]`);
  if (!d) return null;
  return {
    hero:         { heading: d.heroHeading ?? "", subheading: d.heroSubheading ?? "" },
    whatToExpect: {
      heading:    d.wtxHeading    ?? "",
      subheading: d.wtxSubheading ?? "",
      items: (d.wtxItems ?? []).map((i: { icon: string; title: string; text: string }) => ({
        icon: i.icon, title: i.title, text: i.text,
      })),
    },
    planVisit: {
      heading:    d.planHeading    ?? "",
      address:    d.planAddress    ?? "",
      mapsUrl:    d.planMapsUrl    ?? "",
      mapsEmbed:  d.planMapsEmbed  ?? "",
      phone:      d.planPhone      ?? "",
    },
  };
}

// ── Series Page ───────────────────────────────────────────────────────────────

export async function fetchSeriesPage(): Promise<SeriesPageContent | null> {
  const d = await safeFetch(`*[_type == "seriesPage"][0]`);
  if (!d) return null;
  const mapSeries = (s: { title: string; description: string; tag: string; image?: unknown; isCurrent?: boolean }) => ({
    title:       s.title,
    description: s.description,
    tag:         s.tag,
    isCurrent:   !!s.isCurrent,
    image:       s.image ? urlFor(s.image as Parameters<typeof urlFor>[0]) : undefined,
  });
  return {
    hero:    { heading: d.heroHeading ?? "", subheading: d.heroSubheading ?? "" },
    current: mapSeries({ ...d.currentSeries, isCurrent: true }),
    past:    (d.pastSeries ?? []).map((s: typeof d.currentSeries) => mapSeries({ ...s, isCurrent: false })),
  };
}

// ── About Page ────────────────────────────────────────────────────────────────

export async function fetchAboutPage(): Promise<AboutPageContent | null> {
  const d = await safeFetch(`*[_type == "aboutPage"][0]`);
  if (!d) return null;
  return {
    hero:    { heading: d.heroHeading ?? "", subheading: d.heroSubheading ?? "" },
    story:   {
      eyebrow: d.storyEyebrow ?? "",
      heading: d.storyHeading ?? "",
      body1:   d.storyBody1   ?? "",
      body2:   d.storyBody2   ?? "",
      image:   d.storyImage ? urlFor(d.storyImage) : "",
    },
    mission: {
      heading: d.missionHeading ?? "",
      vision:  d.missionVision  ?? "",
      mission: d.missionMission ?? "",
      values:  d.missionValues  ?? "",
    },
    leaders: {
      heading:    d.leadersHeading    ?? "",
      subheading: d.leadersSubheading ?? "",
      team: (d.leaderTeam ?? []).map((m: { name: string; role: string; bio: string; image?: unknown }) => ({
        name:  m.name,
        role:  m.role,
        bio:   m.bio,
        image: m.image ? urlFor(m.image as Parameters<typeof urlFor>[0]) : "",
      })),
    },
    beliefs: {
      heading:    d.beliefsHeading    ?? "",
      subheading: d.beliefsSubheading ?? "",
      items: (d.beliefItems ?? []).map((b: { icon: string; title: string; text: string }) => ({
        icon: b.icon, title: b.title, text: b.text,
      })),
    },
    stats: (d.stats ?? []).map((s: { label: string; value: string }) => ({
      label: s.label, value: s.value,
    })),
  };
}

// ── Gallery Page ──────────────────────────────────────────────────────────────

export async function fetchGalleryPage(): Promise<GalleryPageContent | null> {
  const d = await safeFetch(`*[_type == "galleryPage"][0]`);
  if (!d) return null;
  return {
    hero: { heading: d.heroHeading ?? "", subheading: d.heroSubheading ?? "" },
    categories: [
      { value: "all",       label: "All Photos"  },
      { value: "worship",   label: "Worship"     },
      { value: "outreach",  label: "Outreach"    },
      { value: "community", label: "Community"   },
      { value: "building",  label: "Building"    },
    ],
    photos: (d.photos ?? []).map((p: { _key: string; image?: unknown; alt: string; caption?: string; category: string }, i: number) => ({
      id:       p._key ?? String(i),
      src:      p.image ? urlFor(p.image as Parameters<typeof urlFor>[0]) : "",
      alt:      p.alt      ?? "",
      category: p.category ?? "worship",
      caption:  p.caption,
    })),
  };
}

// ── Contact Page ──────────────────────────────────────────────────────────────

export async function fetchContactPage(): Promise<ContactPageContent | null> {
  const d = await safeFetch(`*[_type == "contactPage"][0]`);
  if (!d) return null;
  return {
    hero:    { heading: d.heroHeading ?? "", subheading: d.heroSubheading ?? "" },
    details: {
      address:    d.detailsAddress    ?? "",
      mapsUrl:    d.detailsMapsUrl    ?? "",
      mapsEmbed:  d.detailsMapsEmbed  ?? "",
      phone:      d.detailsPhone      ?? "",
      email:      d.detailsEmail      ?? "",
      hours:      d.detailsHours      ?? "",
    },
    social: (d.socialLinks ?? []).map((s: { platform: string; href: string; label: string }) => ({
      platform: s.platform, href: s.href, label: s.label,
    })),
  };
}

// ── Donate Page ───────────────────────────────────────────────────────────────

export async function fetchDonatePage(): Promise<DonatePageContent | null> {
  const d = await safeFetch(`*[_type == "donatePage"][0]`);
  if (!d) return null;
  return {
    hero: { heading: d.heroHeading ?? "", subheading: d.heroSubheading ?? "" },
    waysToGive: {
      heading: d.waysHeading ?? "",
      items: (d.waysItems ?? []).map((w: { icon: string; title: string; description: string; cta?: string; ctaHref?: string }) => ({
        icon: w.icon, title: w.title, description: w.description,
        cta: w.cta, ctaHref: w.ctaHref,
      })),
    },
    faq: {
      heading: d.faqHeading ?? "",
      items: (d.faqItems ?? []).map((f: { q: string; a: string }) => ({ q: f.q, a: f.a })),
    },
  };
}
