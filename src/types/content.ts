/**
 * Content type definitions for House of Prayer Bourne.
 *
 * These interfaces act as the "CMS contract" — every field here maps 1:1
 * to what a CMS (Sanity, Contentful, etc.) would return.  When you connect
 * a real CMS, just replace /src/lib/content.ts with an API fetch that
 * returns the same shape.
 */

// ─── Shared primitives ──────────────────────────────────────────────────────

export interface CtaButton {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: "facebook" | "instagram" | "youtube" | "twitter" | "tiktok";
  href: string;
  label: string;
}

// ─── Hero ───────────────────────────────────────────────────────────────────

export interface HeroContent {
  eyebrow: string;
  headline: string;
  /** The THEME OF THE YEAR badge text — change each year via CMS */
  themeOfYear: string;
  subheadline: string;
  ctaPrimary: CtaButton;
  ctaSecondary: CtaButton;
}

// ─── Soul Winning Banner ────────────────────────────────────────────────────

export interface SoulWinningBannerContent {
  text: string;
  linkLabel: string;
  linkHref: string;
}

// ─── Live Stream ────────────────────────────────────────────────────────────

export interface LiveStreamContent {
  title: string;
  schedule: string;
  venueName: string;
  venueAddress: string;
  mapsUrl: string;
  streamUrl: string;
  pastMessagesUrl: string;
  image: string;
}

// ─── Services ───────────────────────────────────────────────────────────────

export interface ServiceCard {
  iconName: string; // lucide-react icon name
  title: string;
  text: string;
}

export interface ServicesContent {
  eyebrow: string;
  heading: string;
  description1: string;
  description2: string;
  cards: ServiceCard[];
}

// ─── Benefits ───────────────────────────────────────────────────────────────

export interface BenefitCard {
  icon: string; // emoji
  title: string;
  description: string;
}

export interface BenefitsContent {
  eyebrow: string;
  heading: string;
  subheading: string;
  cards: BenefitCard[];
}

// ─── Gatherings ─────────────────────────────────────────────────────────────

export type GatheringType =
  | "inperson"
  | "online"
  | "bible-study"
  | "prayer"
  | "outreach"
  | "coming-soon";

export interface GatheringItem {
  type: GatheringType;
  badgeLabel: string;
  title: string;
  time: string;
  description: string;
  mapsUrl?: string; // only for physical gatherings
}

export interface GatheringsContent {
  eyebrow: string;
  heading: string;
  subheading: string;
  items: GatheringItem[];
}

// ─── Current Series ─────────────────────────────────────────────────────────

export interface CurrentSeriesContent {
  eyebrow: string;
  title: string;
  description: string;
}

// ─── Donations / Fundraising ────────────────────────────────────────────────

export interface DonationsContent {
  eyebrow: string;
  heading: string;
  subheading: string;
  projectTitle: string;
  projectDescription: string;
  /** Amount raised in pence/whole currency unit — update via CMS */
  raised: number;
  goal: number;
  donationUrl: string;
}

// ─── Pastor / Leadership ────────────────────────────────────────────────────

export interface PastorGoalContent {
  quote: string;
  body1: string;
  body2: string;
  name: string;
  title: string;
  image: string;
}

// ─── First Timer Form ───────────────────────────────────────────────────────

export interface FirstTimerContent {
  eyebrow: string;
  heading: string;
  subheading: string;
  /** Options shown in the "How did you hear about us?" dropdown */
  hearAboutOptions: string[];
  /** Email address that receives submission notifications */
  notificationEmail: string;
}

// ─── Footer ─────────────────────────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href: string;
  highlight?: boolean;
}

export interface FooterContent {
  description: string;
  address: string;
  mapsUrl: string;
  phone: string;
  socialLinks: SocialLink[];
  gatheringLinks: FooterLink[];
  usefulLinks: FooterLink[];
}

// ─── Navbar ─────────────────────────────────────────────────────────────────

export interface NavLink {
  name: string;
  href: string;
}

export interface NavbarContent {
  links: NavLink[];
  ctaLabel: string;
  ctaHref: string;
}

// ─── Live Page ──────────────────────────────────────────────────────────────

export interface LivePageContent {
  hero: { heading: string; subheading: string };
  streamEmbed: { title: string; description: string; youtubeChannelUrl: string };
  schedule: { heading: string; items: { time: string; label: string; isLive: boolean }[] };
  pastMessages: { heading: string; subheading: string };
}

// ─── Services Page ──────────────────────────────────────────────────────────

export interface ServicesPageContent {
  hero: { heading: string; subheading: string };
  whatToExpect: { heading: string; subheading: string; items: { icon: string; title: string; text: string }[] };
  planVisit: { heading: string; address: string; mapsUrl: string; mapsEmbed: string; phone: string };
}

// ─── Series Page ────────────────────────────────────────────────────────────

export interface SeriesItem {
  title: string;
  description: string;
  tag: string;
  isCurrent: boolean;
  image?: string;
}

export interface SeriesPageContent {
  hero: { heading: string; subheading: string };
  current: SeriesItem;
  past: SeriesItem[];
}

// ─── About Page ─────────────────────────────────────────────────────────────

export interface LeaderCard {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface BeliefItem {
  icon: string;
  title: string;
  text: string;
}

export interface AboutPageContent {
  hero: { heading: string; subheading: string };
  story: { eyebrow: string; heading: string; body1: string; body2: string; image: string };
  mission: { heading: string; vision: string; mission: string; values: string };
  leaders: { heading: string; subheading: string; team: LeaderCard[] };
  beliefs: { heading: string; subheading: string; items: BeliefItem[] };
  stats: { label: string; value: string }[];
}

// ─── Gallery Page ────────────────────────────────────────────────────────────

export type GalleryCategory = "all" | "worship" | "outreach" | "community" | "building";

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  caption?: string;
}

export interface GalleryPageContent {
  hero: { heading: string; subheading: string };
  categories: { value: GalleryCategory; label: string }[];
  photos: GalleryPhoto[];
}

// ─── Contact Page ────────────────────────────────────────────────────────────

export interface ContactPageContent {
  hero: { heading: string; subheading: string };
  details: {
    address: string;
    mapsUrl: string;
    mapsEmbed: string;
    phone: string;
    email: string;
    hours: string;
  };
  social: SocialLink[];
}

// ─── Donate Page ─────────────────────────────────────────────────────────────

export interface WayToGive {
  icon: string;
  title: string;
  description: string;
  cta?: string;
  ctaHref?: string;
}

export interface DonatePageContent {
  hero: { heading: string; subheading: string };
  waysToGive: { heading: string; items: WayToGive[] };
  faq: { heading: string; items: { q: string; a: string }[] };
}

// ─── Root site content ──────────────────────────────────────────────────────

export interface SiteContent {
  hero: HeroContent;
  soulWinningBanner: SoulWinningBannerContent;
  liveStream: LiveStreamContent;
  services: ServicesContent;
  benefits: BenefitsContent;
  gatherings: GatheringsContent;
  currentSeries: CurrentSeriesContent;
  donations: DonationsContent;
  pastorGoal: PastorGoalContent;
  firstTimer: FirstTimerContent;
  footer: FooterContent;
  navbar: NavbarContent;
}
