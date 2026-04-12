/**
 * seed-sanity.mjs
 *
 * Pushes all current static content into Sanity in one go.
 * Run once after creating your Sanity project:
 *
 *   node scripts/seed-sanity.mjs
 *
 * Requirements:
 *   - NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local
 *   - SANITY_API_TOKEN in .env.local  (a write token from sanity.io → project → API → Tokens)
 */

import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Load .env.local ───────────────────────────────────────────────────────────
function loadEnv() {
  try {
    const envPath = resolve(__dirname, "../.env.local");
    const lines = readFileSync(envPath, "utf-8").split("\n");
    for (const line of lines) {
      const [key, ...rest] = line.split("=");
      if (key && rest.length) process.env[key.trim()] = rest.join("=").trim().replace(/^['"]|['"]$/g, "");
    }
  } catch {
    // .env.local not found — rely on environment variables already set
  }
}
loadEnv();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token     = process.env.SANITY_API_TOKEN;
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

if (!projectId) { console.error("❌  NEXT_PUBLIC_SANITY_PROJECT_ID is not set in .env.local"); process.exit(1); }
if (!token)     { console.error("❌  SANITY_API_TOKEN is not set in .env.local\n   Get one at: https://sanity.io → your project → API → Tokens → Add API token (Editor)"); process.exit(1); }

const client = createClient({ projectId, dataset, token, apiVersion: "2024-01-01", useCdn: false });

console.log(`\n🌱  Seeding Sanity project "${projectId}" / dataset "${dataset}"...\n`);

// ── Helper ────────────────────────────────────────────────────────────────────
async function upsert(doc) {
  await client.createOrReplace(doc);
  console.log(`   ✅  ${doc._type} (${doc._id})`);
}

// ── siteSettings ─────────────────────────────────────────────────────────────
await upsert({
  _id: "siteSettings", _type: "siteSettings",
  navLinks: [
    { _key: "home",     name: "Home",     href: "/" },
    { _key: "live",     name: "Live",     href: "/live" },
    { _key: "services", name: "Services", href: "/services" },
    { _key: "series",   name: "Series",   href: "/series" },
    { _key: "gallery",  name: "Gallery",  href: "/gallery" },
    { _key: "about",    name: "About",    href: "/about" },
  ],
  navCtaLabel: "Donate",
  navCtaHref:  "/donate",

  heroEyebrow:       "Church Love, Faith Love",
  heroHeadline:      "A Place Where Prayer Makes All Things Possible",
  heroTheme:         "Year of Substance",
  heroSubheadline:   "Welcome to an atmosphere of love and faith. Whether you are looking for hope, community, or a deeper connection with God, we invite you to experience the life-changing power of prayer in the heart of Bourne, Lincolnshire.",
  heroPrimaryLabel:  "I'm New Here",
  heroPrimaryHref:   "#first-timer",
  heroSecondaryLabel:"Watch Live at 10am",
  heroSecondaryHref: "#livestream",

  bannerText:      "Soul Winning is our heartbeat — We share the love of Jesus with those who do not yet know Him, bringing hope, truth, and salvation to our community.",
  bannerLinkLabel: "Learn More",
  bannerLinkHref:  "#services",

  liveTitle:      "Join the Sunday Live Stream",
  liveSchedule:   "Every Sunday at 10:00 am — In-Person & Online",
  liveVenueName:  "Youth Bourne Centre",
  liveVenueAddr:  "Queens Road PE10 9DX, Bourne",
  liveMapsUrl:    "https://maps.google.com/?q=Youth+Bourne+Centre+Queens+Road+PE10+9DX+Bourne",
  liveStreamUrl:  "#livestream",
  livePastMsgUrl: "/past-messages",
  // liveImage: — upload via studio

  servicesEyebrow: "Our Services",
  servicesHeading: "We Love Serving Our Local Community",
  servicesDesc1:   "We are passionate about serving people and sharing the love of Jesus in practical and meaningful ways. Through worship, fellowship, evangelism, and encouragement, we exist to build faith, strengthen community, and reach lives with hope.",
  servicesDesc2:   "We believe in caring for people holistically, offering support, prayer, and compassion to meet both spiritual and practical needs within our community.",
  servicesCards: [
    { _key: "s1", iconName: "HeartHandshake", title: "Soul Winning",    text: "We are committed to evangelism by sharing the love of Jesus with those who do not yet know Him, bringing hope, truth, and salvation to lives in our community and beyond." },
    { _key: "s2", iconName: "BookOpen",       title: "Weekly Services", text: "Every week we come together to worship, fellowship, and celebrate the love of Jesus, creating an atmosphere where faith is strengthened and hearts are renewed." },
    { _key: "s3", iconName: "Users",          title: "Fellowship",      text: "Through regular gatherings and shared moments, we ensure that no one walks alone. Our fellowship encourages connection, support, and a strong sense of belonging." },
    { _key: "s4", iconName: "Pencil",         title: "Exalt & Encourage", text: "We uplift and strengthen those who are discouraged by sharing God's Word and building faith during challenging seasons, reminding them of God's promises and love." },
  ],

  benefitsEyebrow:    "Why Join Us",
  benefitsHeading:    "The Benefits of Joining Our Family",
  benefitsSubheading: "Discover what it means to be part of a community grounded in prayer, faith, and the love of God.",
  benefitsCards: [
    { _key: "b1", icon: "Target",     title: "God's Purpose",    description: "Discover a specific, God-given reason to live and a mission to serve others with meaning and direction." },
    { _key: "b2", icon: "Users",      title: "God's People",     description: "Join a fellowship where no one walks alone — ensuring a strong sense of belonging and genuine support." },
    { _key: "b3", icon: "ScrollText", title: "God's Principles", description: "Build your life on a framework of truth that leads to a balanced, righteous, and fulfilling life." },
    { _key: "b4", icon: "Zap",        title: "God's Power",      description: "Experience the confidence that comes from an atmosphere of faith and the proclamation of the Good News." },
  ],

  gatheringsEyebrow:    "Our Schedule",
  gatheringsHeading:    "Weekly Gatherings",
  gatheringsSubheading: "All gatherings are held at the Youth Bourne Centre, Queens Road PE10 9DX unless otherwise noted.",
  gatheringItems: [
    { _key: "g1", type: "inperson",    badgeLabel: "In-Person",   title: "Sunday Service",          time: "Every Sunday · 10:00 am",                        description: "Worship, Word, and fellowship. Our flagship weekly gathering for the whole family.", mapsUrl: "https://maps.google.com/?q=Youth+Bourne+Centre+Queens+Road+PE10+9DX+Bourne" },
    { _key: "g2", type: "online",      badgeLabel: "Live Stream",  title: "Sunday Online",           time: "Every Sunday · 10:00 am",                        description: "Join us from anywhere in the world via our live stream every Sunday morning." },
    { _key: "g3", type: "bible-study", badgeLabel: "Bible Study",  title: "Tuesday Bible Study",     time: "Every Tuesday · 6:00 pm – 7:00 pm",              description: "Deepen your understanding of the Word in a warm, welcoming setting.", mapsUrl: "https://maps.google.com/?q=Youth+Bourne+Centre+Queens+Road+PE10+9DX+Bourne" },
    { _key: "g4", type: "prayer",      badgeLabel: "Prayer",       title: "Weekly Prayer",           time: "Every Friday · 6:00 pm – 8:00 pm",               description: "A powerful time of intercession and seeking God's heart together as a community.", mapsUrl: "https://maps.google.com/?q=Youth+Bourne+Centre+Queens+Road+PE10+9DX+Bourne" },
    { _key: "g5", type: "coming-soon", badgeLabel: "Night Vigil",  title: "Night Vigil",             time: "2nd Friday of the month",                        description: "A dedicated time of breakthrough prayer. Join us as we seek God through the night.", mapsUrl: "https://maps.google.com/?q=Youth+Bourne+Centre+Queens+Road+PE10+9DX+Bourne" },
    { _key: "g6", type: "coming-soon", badgeLabel: "Devotion",     title: "Morning Dew Devotion",    time: "1st Saturday of the month · 6:30 am – 7:30 am",  description: "Start your month in His presence and awaken your spirit for all that lies ahead.", mapsUrl: "https://maps.google.com/?q=Youth+Bourne+Centre+Queens+Road+PE10+9DX+Bourne" },
    { _key: "g7", type: "outreach",    badgeLabel: "Outreach",     title: "City Heights Outreach",   time: "Recurring Community Event",                      description: "Sharing hope on the streets of our community. Evangelism and the love of Jesus in action." },
    { _key: "g8", type: "outreach",    badgeLabel: "Outreach",     title: "The Dinner Table",        time: "Recurring Community Event",                      description: "Practical support and fellowship through shared meals. Everyone is welcome at the table." },
  ],

  seriesEyebrow:     "Current Series",
  seriesTitle:       "Hope for Tomorrow",
  seriesDescription: "Are you facing a challenging season? Our current message series, \"Hope for Tomorrow,\" explores God's promises of restoration and peace. Join us as we dive into the Word to find the strength to navigate today's trials while looking forward to the bright future God has prepared for you.",

  donationsEyebrow:      "Extra Giving Opportunities",
  donationsHeading:      "Donate to Make a Difference in Our Community",
  donationsSubheading:   "Your generosity helps us create a place of worship, prayer, and community impact. Every gift supports the growth and development of House of Prayer Bourne.",
  donationsProjectTitle: "Securing Our Future: The Building & Development Project",
  donationsProjectDesc:  "We are raising £40,000 to secure a permanent home for House of Prayer Bourne. Every gift supports the restoration of our facilities at the Youth Bourne Centre and expands our reach in the community.",
  donationsRaised: 10635,
  donationsGoal:   40000,
  donationsUrl:    "https://www.justgiving.com/charity/3792317",

  pastorQuote:  "Our goal is to bring revival to our community through prayer, faith, and righteous living. We exist to proclaim the good news of Jesus Christ and to demonstrate the love of God in practical and life-changing ways.",
  pastorBody1:  "House of Prayer Bourne is a vibrant community of God's people committed to prayer as the foundation of transformation. Led by Senior Pastors Micheal and Lara Samuel, we seek to build lives, restore hope, and strengthen faith in every season.",
  pastorBody2:  "We believe that through prayer, God makes all things possible. We welcome you into an atmosphere of love, faith, and spiritual growth, trusting that God will meet you, uplift you, and lead you into His purpose.",
  pastorName:   "Pst Samuel Micheal",
  pastorTitle:  "Senior Pastor",
  // pastorImage: — upload via studio

  firstTimerEyebrow:    "Welcome",
  firstTimerHeading:    "First Time Visiting?",
  firstTimerSubheading: "We'd love to connect with you! Fill in your details and our team will reach out personally to welcome you.",
  firstTimerHearOptions: ["Facebook","Instagram","Friend / Family","Walked Past the Centre","Google Search","YouTube","Other"],
  firstTimerEmail: "mifdevagency@gmail.com",

  footerDescription: "House of Prayer is a church of God's people called to bring about revival to the community through prayer and righteous living.",
  footerAddress:     "Youth Bourne Centre, Queens Road PE10 9DX, Bourne, Lincolnshire",
  footerMapsUrl:     "https://maps.google.com/?q=Youth+Bourne+Centre+Queens+Road+PE10+9DX+Bourne",
  footerPhone:       "+44 7728 845394",
  footerSocials: [
    { _key: "fb", platform: "facebook",  href: "https://www.facebook.com/houseofprayerbourne",   label: "Facebook" },
    { _key: "ig", platform: "instagram", href: "https://www.instagram.com/houseofprayerbourne/", label: "Instagram" },
  ],
  footerGatheringLinks: [
    { _key: "fl1", label: "Sunday Service",         href: "#livestream" },
    { _key: "fl2", label: "City Heights Outreach",  href: "#gatherings" },
    { _key: "fl3", label: "Tuesday Bible Study",    href: "#gatherings" },
    { _key: "fl4", label: "The Dinner Table",       href: "#gatherings" },
    { _key: "fl5", label: "Night Vigil",            href: "#gatherings" },
  ],
  footerUsefulLinks: [
    { _key: "ul1", label: "Give",          href: "#donate"    },
    { _key: "ul2", label: "Contact",       href: "/contact"   },
    { _key: "ul3", label: "Privacy Policy",href: "/privacy",  highlight: true },
    { _key: "ul4", label: "Services",      href: "#services"  },
    { _key: "ul5", label: "Our Beliefs",   href: "/about"     },
  ],
});

// ── livePage ──────────────────────────────────────────────────────────────────
await upsert({
  _id: "livePage", _type: "livePage",
  heroHeading:    "Watch Live",
  heroSubheading: "Join us every Sunday at 10:00 am — in person or from wherever you are.",
  streamTitle:       "Sunday Live Stream",
  streamDescription: "We go live every Sunday at 10:00 am. If we are not live right now, you can watch our most recent message below or browse past messages.",
  youtubeChannelUrl: "https://www.youtube.com/@houseofprayerbourne",
  scheduleHeading: "This Week's Services",
  scheduleItems: [
    { _key: "sc1", time: "10:00 am", label: "Sunday Morning Service — In-Person & Online", isLive: true  },
    { _key: "sc2", time: "6:00 pm",  label: "Tuesday Bible Study — In-Person",             isLive: false },
    { _key: "sc3", time: "6:00 pm",  label: "Friday Prayer — In-Person",                   isLive: false },
  ],
  pastMessagesHeading:    "Past Messages",
  pastMessagesSubheading: "Catch up on messages you may have missed.",
});

// ── servicesPage ──────────────────────────────────────────────────────────────
await upsert({
  _id: "servicesPage", _type: "servicesPage",
  heroHeading:    "Our Services",
  heroSubheading: "Everything you need to know about joining us — in person or online.",
  wtxHeading:    "What to Expect",
  wtxSubheading: "Whether it's your first time or you've been coming for years, here's what a typical Sunday looks like at House of Prayer Bourne.",
  wtxItems: [
    { _key: "w1", icon: "Music",         title: "Worship",         text: "We open with powerful, Spirit-led worship music that prepares our hearts to receive the Word of God." },
    { _key: "w2", icon: "BookOpen",      title: "The Word",        text: "An engaging, Bible-based message rooted in prayer and relevant to everyday life. Messages typically last 40–50 minutes." },
    { _key: "w3", icon: "Handshake",     title: "Connection",      text: "After the service we love to connect over a cup of tea. First-timers are always personally welcomed by our team." },
    { _key: "w4", icon: "Flame",         title: "Prayer Ministry", text: "Our prayer team is available after every service to pray with you for whatever you're facing." },
    { _key: "w5", icon: "Baby",          title: "Children",        text: "We have a safe, fun, age-appropriate children's programme running alongside the main service." },
    { _key: "w6", icon: "Accessibility", title: "Accessibility",   text: "Youth Bourne Centre is fully accessible. If you have specific needs, please contact us and we'll be glad to help." },
  ],
  planHeading:   "Plan Your Visit",
  planAddress:   "Youth Bourne Centre, Queens Road, Bourne, Lincolnshire PE10 9DX",
  planMapsUrl:   "https://maps.google.com/?q=Youth+Bourne+Centre+Queens+Road+PE10+9DX+Bourne",
  planMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2423.0!2d-0.377!3d52.769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDQ2JzA4LjQiTiAwwrAyMiczyNNdyW!5e0!3m2!1sen!2suk!4v1000000000000",
  planPhone:     "+44 7728 845394",
});

// ── seriesPage ────────────────────────────────────────────────────────────────
await upsert({
  _id: "seriesPage", _type: "seriesPage",
  heroHeading:    "Message Series",
  heroSubheading: "Explore our current and past sermon series — messages rooted in the Word and relevant to your life.",
  currentSeries: {
    title:       "Hope for Tomorrow",
    description: "Are you facing a challenging season? This series explores God's promises of restoration and peace. Join us as we dive into the Word to find strength for today's trials and hope for the future God has prepared for you.",
    tag:         "Current Series",
    // image: — upload via studio
  },
  pastSeries: [
    { _key: "ps1", title: "Year of Substance",    description: "Our theme of the year — building depth in faith, prayer, and purpose. A call to move beyond the surface into the fullness of God.", tag: "2024 Theme" },
    { _key: "ps2", title: "Foundations of Prayer",description: "A deep dive into the principles of prayer — what it is, why it works, and how to build a consistent prayer life that transforms everything.", tag: "Past Series" },
    { _key: "ps3", title: "Righteous Living",     description: "What does it look like to live righteously in today's world? This series unpacks practical, Scripture-based steps for daily holy living.", tag: "Past Series" },
  ],
});

// ── aboutPage ─────────────────────────────────────────────────────────────────
await upsert({
  _id: "aboutPage", _type: "aboutPage",
  heroHeading:    "About Us",
  heroSubheading: "A community called to bring revival through prayer, faith, and righteous living.",
  storyEyebrow: "Our Story",
  storyHeading: "Revival, Faith & Community in Bourne",
  storyBody1:   "House of Prayer Bourne is a vibrant, Spirit-filled community of God's people located in the heart of Bourne, Lincolnshire. Founded on the conviction that prayer makes all things possible, we exist to proclaim the good news of Jesus Christ and demonstrate His love in practical, life-changing ways.",
  storyBody2:   "Guided by Senior Pastors Micheal and Lara Samuel, we are committed to building lives, restoring hope, and strengthening faith in every season. We welcome people from all walks of life into an atmosphere of love, warmth, and genuine community.",
  // storyImage: — upload via studio
  missionHeading: "Mission, Vision & Values",
  missionVision:  "To bring revival to our community through prayer, faith, and righteous living.",
  missionMission: "To proclaim the good news of Jesus Christ and demonstrate the love of God in practical and life-changing ways.",
  missionValues:  "Prayer · Righteousness · Community · Evangelism · Faith",
  leadersHeading:    "Our Leadership",
  leadersSubheading: "Led by a team committed to prayer, the Word, and the community of Bourne.",
  leaderTeam: [
    { _key: "lt1", name: "Pst Micheal Samuel", role: "Senior Pastor", bio: "Pst Micheal leads House of Prayer Bourne with a mandate for revival through prayer and righteous living. His passion is to see every person walk in the fullness of God's purpose." },
    { _key: "lt2", name: "Pst Lara Samuel",    role: "Senior Pastor", bio: "Pst Lara co-leads the church alongside her husband, with a heart for women's ministry, community outreach, and the holistic wellbeing of every church member." },
    // images: — upload via studio
  ],
  beliefsHeading:    "What We Believe",
  beliefsSubheading: "Our faith is grounded in the authority of Scripture and the love of Jesus Christ.",
  beliefItems: [
    { _key: "bl1", icon: "BookOpen", title: "The Bible",       text: "We believe the Bible is the inspired, infallible Word of God — our ultimate authority for faith and life." },
    { _key: "bl2", icon: "Cross",    title: "Jesus Christ",    text: "We believe Jesus Christ is the Son of God, who died for our sins, rose from the dead, and is the only way to salvation." },
    { _key: "bl3", icon: "Wind",     title: "The Holy Spirit", text: "We believe in the person and power of the Holy Spirit, who guides, empowers, and transforms believers." },
    { _key: "bl4", icon: "Flame",    title: "Prayer",          text: "We believe prayer is the foundation of all transformation — that through prayer, God makes all things possible." },
    { _key: "bl5", icon: "Church",   title: "The Church",      text: "We believe the Church is the body of Christ, called to worship, fellowship, discipleship, and service in the world." },
    { _key: "bl6", icon: "Globe",    title: "Salvation",       text: "We believe salvation is a free gift of grace through faith in Jesus Christ, available to all who believe." },
  ],
  stats: [
    { _key: "st1", label: "Years in Bourne",      value: "5+" },
    { _key: "st2", label: "Weekly Gatherings",    value: "8"  },
    { _key: "st3", label: "Building Fund Goal",   value: "£40K" },
    { _key: "st4", label: "Community Events",     value: "12+" },
  ],
});

// ── galleryPage ───────────────────────────────────────────────────────────────
await upsert({
  _id: "galleryPage", _type: "galleryPage",
  heroHeading:    "Gallery",
  heroSubheading: "A glimpse into the life of House of Prayer Bourne — worship, outreach, fellowship, and our building journey.",
  // photos: — upload real photos via studio
  photos: [],
});

// ── contactPage ───────────────────────────────────────────────────────────────
await upsert({
  _id: "contactPage", _type: "contactPage",
  heroHeading:    "Get in Touch",
  heroSubheading: "We'd love to hear from you. Whether you have a question, need prayer, or just want to know more — reach out.",
  detailsAddress:   "Youth Bourne Centre, Queens Road, Bourne, Lincolnshire PE10 9DX",
  detailsMapsUrl:   "https://maps.google.com/?q=Youth+Bourne+Centre+Queens+Road+PE10+9DX+Bourne",
  detailsMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2423.0!2d-0.377!3d52.769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDQ2JzA4LjQiTiAwwrAyMiczyNNdyW!5e0!3m2!1sen!2suk!4v1000000000000",
  detailsPhone:     "+44 7728 845394",
  detailsEmail:     "info@houseofprayerbourne.com",
  detailsHours:     "Sunday 10:00 am · Tuesday 6:00 pm · Friday 6:00 pm",
  socialLinks: [
    { _key: "csl1", platform: "facebook",  href: "https://www.facebook.com/houseofprayerbourne",   label: "Facebook"  },
    { _key: "csl2", platform: "instagram", href: "https://www.instagram.com/houseofprayerbourne/", label: "Instagram" },
  ],
});

// ── donatePage ────────────────────────────────────────────────────────────────
await upsert({
  _id: "donatePage", _type: "donatePage",
  heroHeading:    "Give Generously",
  heroSubheading: "Your generosity fuels the mission — from Sunday services to community outreach and our building project.",
  waysHeading: "Ways to Give",
  waysItems: [
    { _key: "wg1", icon: "CreditCard", title: "Give Online",    description: "Donate securely via JustGiving. You can make a one-off gift or set up a regular standing order to support the building fund.", cta: "Donate via JustGiving", ctaHref: "https://www.justgiving.com/charity/3792317" },
    { _key: "wg2", icon: "Building2",  title: "Bank Transfer",  description: "You can give directly to our church bank account. Please contact us for our bank details and reference your name in the payment.", cta: "Get Bank Details", ctaHref: "/contact" },
    { _key: "wg3", icon: "HandHeart",  title: "Give In Person", description: "We receive tithes and offerings during Sunday services at the Youth Bourne Centre. You are always welcome to give in person." },
  ],
  faqHeading: "Giving FAQ",
  faqItems: [
    { _key: "fq1", q: "Is my donation tax-deductible?",       a: "If you are a UK taxpayer, Gift Aid allows us to reclaim 25p for every £1 you donate at no extra cost to you. Please tick the Gift Aid box when donating online." },
    { _key: "fq2", q: "Can I set up a regular gift?",          a: "Yes! A regular standing order is one of the most impactful ways to support the church. Contact us or donate via JustGiving to set one up." },
    { _key: "fq3", q: "Where does my money go?",               a: "Donations go towards our Sunday services, community outreach programmes (City Heights, The Dinner Table), and our Building & Development project at Youth Bourne Centre." },
    { _key: "fq4", q: "How do I donate to the building fund?", a: "Click the 'Donate via JustGiving' button above. All online donations are directed to the Building & Development project unless otherwise specified." },
  ],
});

console.log("\n🎉  All content seeded successfully!\n");
console.log("📝  Next steps:");
console.log("   1. Run: npm run dev");
console.log("   2. Go to: http://localhost:3000/studio");
console.log("   3. Upload images (pastor photos, series covers, gallery photos)");
console.log("   4. Your site will pull live content from Sanity automatically.\n");
