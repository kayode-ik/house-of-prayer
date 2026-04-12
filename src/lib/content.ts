/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           HOUSE OF PRAYER BOURNE — SITE CONTENT             ║
 * ║                                                              ║
 * ║  Static fallback data.  When NEXT_PUBLIC_SANITY_PROJECT_ID  ║
 * ║  is set, the async getters below fetch live data from        ║
 * ║  Sanity and fall back to this static data on error.          ║
 * ║                                                              ║
 * ║  To edit content without Sanity: update the objects below.  ║
 * ║  To edit content via Sanity:     go to /studio              ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

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
import {
  isSanityConfigured,
  fetchSiteContent,
  fetchLivePage,
  fetchServicesPage,
  fetchSeriesPage,
  fetchAboutPage,
  fetchGalleryPage,
  fetchContactPage,
  fetchDonatePage,
} from "./sanityFetch";

export const siteContent: SiteContent = {
  // ─────────────────────────────────────────────────────────────
  // NAVBAR
  // ─────────────────────────────────────────────────────────────
  navbar: {
    links: [
      { name: "Home",     href: "/"          },
      { name: "Live",     href: "/live"       },
      { name: "Services", href: "/services"   },
      { name: "Series",   href: "/series"     },
      { name: "Gallery",  href: "/gallery"    },
      { name: "About",    href: "/about"      },
    ],
    ctaLabel: "Donate",
    ctaHref: "/donate",
  },

  // ─────────────────────────────────────────────────────────────
  // HERO
  // ─────────────────────────────────────────────────────────────
  hero: {
    eyebrow: "Church Love, Faith Love",
    headline: "A Place Where Prayer Makes All Things Possible",
    // ✏️ Update this each year via CMS
    themeOfYear: "Year of Substance",
    subheadline:
      "Welcome to an atmosphere of love and faith. Whether you are looking for hope, community, or a deeper connection with God, we invite you to experience the life-changing power of prayer in the heart of Bourne, Lincolnshire.",
    ctaPrimary: { label: "I'm New Here", href: "#first-timer" },
    ctaSecondary: { label: "Watch Live at 10am", href: "#livestream" },
  },

  // ─────────────────────────────────────────────────────────────
  // SOUL WINNING BANNER (appears immediately after hero)
  // ─────────────────────────────────────────────────────────────
  soulWinningBanner: {
    text: "Soul Winning is our heartbeat — We share the love of Jesus with those who do not yet know Him, bringing hope, truth, and salvation to our community.",
    linkLabel: "Learn More",
    linkHref: "#services",
  },

  // ─────────────────────────────────────────────────────────────
  // LIVE STREAM
  // ─────────────────────────────────────────────────────────────
  liveStream: {
    title: "Join the Sunday Live Stream",
    schedule: "Every Sunday at 10:00 am — In-Person & Online",
    venueName: "Youth Bourne Centre",
    venueAddress: "Queens Road PE10 9DX, Bourne",
    mapsUrl:
      "https://maps.google.com/?q=Youth+Bourne+Centre+Queens+Road+PE10+9DX+Bourne",
    // ✏️ Replace with your actual stream URL
    streamUrl: "#livestream",
    pastMessagesUrl: "/past-messages",
    image: "/images/livestreamHop.jpg",
  },

  // ─────────────────────────────────────────────────────────────
  // SERVICES
  // ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Our Services",
    heading: "We Love Serving Our Local Community",
    description1:
      "We are passionate about serving people and sharing the love of Jesus in practical and meaningful ways. Through worship, fellowship, evangelism, and encouragement, we exist to build faith, strengthen community, and reach lives with hope.",
    description2:
      "We believe in caring for people holistically, offering support, prayer, and compassion to meet both spiritual and practical needs within our community.",
    cards: [
      {
        iconName: "HeartHandshake",
        title: "Soul Winning",
        text: "We are committed to evangelism by sharing the love of Jesus with those who do not yet know Him, bringing hope, truth, and salvation to lives in our community and beyond.",
      },
      {
        iconName: "BookOpen",
        title: "Weekly Services",
        text: "Every week we come together to worship, fellowship, and celebrate the love of Jesus, creating an atmosphere where faith is strengthened and hearts are renewed.",
      },
      {
        iconName: "Users",
        title: "Fellowship",
        text: "Through regular gatherings and shared moments, we ensure that no one walks alone. Our fellowship encourages connection, support, and a strong sense of belonging.",
      },
      {
        iconName: "Pencil",
        title: "Exalt & Encourage",
        text: "We uplift and strengthen those who are discouraged by sharing God's Word and building faith during challenging seasons, reminding them of God's promises and love.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // BENEFITS (new section)
  // ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why Join Us",
    heading: "The Benefits of Joining Our Family",
    subheading:
      "Discover what it means to be part of a community grounded in prayer, faith, and the love of God.",
    cards: [
      {
        icon: "Target",
        title: "God's Purpose",
        description:
          "Discover a specific, God-given reason to live and a mission to serve others with meaning and direction.",
      },
      {
        icon: "Users",
        title: "God's People",
        description:
          "Join a fellowship where no one walks alone — ensuring a strong sense of belonging and genuine support.",
      },
      {
        icon: "ScrollText",
        title: "God's Principles",
        description:
          "Build your life on a framework of truth that leads to a balanced, righteous, and fulfilling life.",
      },
      {
        icon: "Zap",
        title: "God's Power",
        description:
          "Experience the confidence that comes from an atmosphere of faith and the proclamation of the Good News.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // WEEKLY GATHERINGS
  // ─────────────────────────────────────────────────────────────
  gatherings: {
    eyebrow: "Our Schedule",
    heading: "Weekly Gatherings",
    subheading:
      "All gatherings are held at the Youth Bourne Centre, Queens Road PE10 9DX unless otherwise noted.",
    items: [
      {
        type: "inperson",
        badgeLabel: "In-Person",
        title: "Sunday Service",
        time: "Every Sunday · 10:00 am",
        description:
          "Worship, Word, and fellowship. Our flagship weekly gathering for the whole family.",
        mapsUrl:
          "https://maps.google.com/?q=Youth+Bourne+Centre+Queens+Road+PE10+9DX+Bourne",
      },
      {
        type: "online",
        badgeLabel: "Live Stream",
        title: "Sunday Online",
        time: "Every Sunday · 10:00 am",
        description:
          "Join us from anywhere in the world via our live stream every Sunday morning.",
      },
      {
        type: "bible-study",
        badgeLabel: "Bible Study",
        title: "Tuesday Bible Study",
        time: "Every Tuesday · 6:00 pm – 7:00 pm",
        description:
          "Deepen your understanding of the Word in a warm, welcoming setting.",
        mapsUrl:
          "https://maps.google.com/?q=Youth+Bourne+Centre+Queens+Road+PE10+9DX+Bourne",
      },
      {
        type: "prayer",
        badgeLabel: "Prayer",
        title: "Weekly Prayer",
        time: "Every Friday · 6:00 pm – 8:00 pm",
        description:
          "A powerful time of intercession and seeking God's heart together as a community.",
        mapsUrl:
          "https://maps.google.com/?q=Youth+Bourne+Centre+Queens+Road+PE10+9DX+Bourne",
      },
      {
        type: "coming-soon",
        badgeLabel: "Night Vigil",
        title: "Night Vigil",
        time: "2nd Friday of the month",
        description:
          "A dedicated time of breakthrough prayer. Join us as we seek God through the night.",
        mapsUrl:
          "https://maps.google.com/?q=Youth+Bourne+Centre+Queens+Road+PE10+9DX+Bourne",
      },
      {
        type: "coming-soon",
        badgeLabel: "Devotion",
        title: "Morning Dew Devotion",
        time: "1st Saturday of the month · 6:30 am – 7:30 am",
        description:
          "Start your month in His presence and awaken your spirit for all that lies ahead.",
        mapsUrl:
          "https://maps.google.com/?q=Youth+Bourne+Centre+Queens+Road+PE10+9DX+Bourne",
      },
      {
        type: "outreach",
        badgeLabel: "Outreach",
        title: "City Heights Outreach",
        time: "Recurring Community Event",
        description:
          "Sharing hope on the streets of our community. Evangelism and the love of Jesus in action.",
      },
      {
        type: "outreach",
        badgeLabel: "Outreach",
        title: "The Dinner Table",
        time: "Recurring Community Event",
        description:
          "Practical support and fellowship through shared meals. Everyone is welcome at the table.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // CURRENT SERIES
  // ─────────────────────────────────────────────────────────────
  currentSeries: {
    eyebrow: "Current Series",
    title: "Hope for Tomorrow",
    description:
      'Are you facing a challenging season? Our current message series, "Hope for Tomorrow," explores God\'s promises of restoration and peace. Join us as we dive into the Word to find the strength to navigate today\'s trials while looking forward to the bright future God has prepared for you. Discover how faith can turn your discouraging moments into seasons of divine encouragement.',
  },

  // ─────────────────────────────────────────────────────────────
  // DONATIONS / FUNDRAISING
  // ─────────────────────────────────────────────────────────────
  donations: {
    eyebrow: "Extra Giving Opportunities",
    heading: "Donate to Make a Difference in Our Community",
    subheading:
      "Your generosity helps us create a place of worship, prayer, and community impact. Every gift supports the growth and development of House of Prayer Bourne.",
    projectTitle: "Securing Our Future: The Building & Development Project",
    projectDescription:
      "We are raising £40,000 to secure a permanent home for House of Prayer Bourne. Every gift supports the restoration of our facilities at the Youth Bourne Centre and expands our reach in the community.",
    // ✏️ Update these figures as donations come in
    raised: 10635,
    goal: 40000,
    donationUrl: "https://www.justgiving.com/charity/3792317",
  },

  // ─────────────────────────────────────────────────────────────
  // PASTOR / LEADERSHIP
  // ─────────────────────────────────────────────────────────────
  pastorGoal: {
    quote:
      "Our goal is to bring revival to our community through prayer, faith, and righteous living. We exist to proclaim the good news of Jesus Christ and to demonstrate the love of God in practical and life-changing ways.",
    body1:
      "House of Prayer Bourne is a vibrant community of God's people committed to prayer as the foundation of transformation. Led by Senior Pastors Micheal and Lara Samuel, we seek to build lives, restore hope, and strengthen faith in every season.",
    body2:
      "We believe that through prayer, God makes all things possible. We welcome you into an atmosphere of love, faith, and spiritual growth, trusting that God will meet you, uplift you, and lead you into His purpose.",
    name: "Pst Samuel Micheal",
    title: "Senior Pastor",
    image: "/images/pastorImg.jpeg",
  },

  // ─────────────────────────────────────────────────────────────
  // FIRST TIMER FORM
  // ─────────────────────────────────────────────────────────────
  firstTimer: {
    eyebrow: "Welcome",
    heading: "First Time Visiting?",
    subheading:
      "We'd love to connect with you! Fill in your details and our team will reach out personally to welcome you.",
    hearAboutOptions: [
      "Facebook",
      "Instagram",
      "Friend / Family",
      "Walked Past the Centre",
      "Google Search",
      "YouTube",
      "Other",
    ],
    // ✏️ Submissions will be sent to this address once a backend/CMS is connected
    notificationEmail: "mifdevagency@gmail.com",
  },

  // ─────────────────────────────────────────────────────────────
  // FOOTER
  // ─────────────────────────────────────────────────────────────
  footer: {
    description:
      "House of Prayer is a church of God's people called to bring about revival to the community through prayer and righteous living.",
    address: "Youth Bourne Centre, Queens Road PE10 9DX, Bourne, Lincolnshire",
    mapsUrl:
      "https://maps.google.com/?q=Youth+Bourne+Centre+Queens+Road+PE10+9DX+Bourne",
    phone: "+44 7728 845394",
    socialLinks: [
      {
        platform: "facebook",
        href: "https://www.facebook.com/houseofprayerbourne",
        label: "Facebook",
      },
      {
        platform: "instagram",
        href: "https://www.instagram.com/houseofprayerbourne/",
        label: "Instagram",
      },
    ],
    gatheringLinks: [
      { label: "Sunday Service", href: "#livestream" },
      { label: "City Heights Outreach", href: "#gatherings" },
      { label: "Tuesday Bible Study", href: "#gatherings" },
      { label: "The Dinner Table", href: "#gatherings" },
      { label: "Night Vigil", href: "#gatherings" },
    ],
    usefulLinks: [
      { label: "Give", href: "#donate" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy", highlight: true },
      { label: "Services", href: "#services" },
      { label: "Our Beliefs", href: "/about" },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE-SPECIFIC CONTENT
// ─────────────────────────────────────────────────────────────────────────────

export const livePageContent: LivePageContent = {
  hero: {
    heading: "Watch Live",
    subheading: "Join us every Sunday at 10:00 am — in person or from wherever you are.",
  },
  streamEmbed: {
    title: "Sunday Live Stream",
    description: "We go live every Sunday at 10:00 am. If we are not live right now, you can watch our most recent message below or browse past messages.",
    youtubeChannelUrl: "https://www.youtube.com/@houseofprayerbourne",
  },
  schedule: {
    heading: "This Week's Services",
    items: [
      { time: "10:00 am", label: "Sunday Morning Service — In-Person & Online", isLive: true },
      { time: "6:00 pm", label: "Tuesday Bible Study — In-Person", isLive: false },
      { time: "6:00 pm", label: "Friday Prayer — In-Person", isLive: false },
    ],
  },
  pastMessages: {
    heading: "Past Messages",
    subheading: "Catch up on messages you may have missed.",
  },
};

export const servicesPageContent: ServicesPageContent = {
  hero: {
    heading: "Our Services",
    subheading: "Everything you need to know about joining us — in person or online.",
  },
  whatToExpect: {
    heading: "What to Expect",
    subheading: "Whether it's your first time or you've been coming for years, here's what a typical Sunday looks like at House of Prayer Bourne.",
    items: [
      { icon: "Music",         title: "Worship",         text: "We open with powerful, Spirit-led worship music that prepares our hearts to receive the Word of God." },
      { icon: "BookOpen",      title: "The Word",        text: "An engaging, Bible-based message rooted in prayer and relevant to everyday life. Messages typically last 40–50 minutes." },
      { icon: "Handshake",     title: "Connection",      text: "After the service we love to connect over a cup of tea. First-timers are always personally welcomed by our team." },
      { icon: "Flame",         title: "Prayer Ministry", text: "Our prayer team is available after every service to pray with you for whatever you're facing." },
      { icon: "Baby",          title: "Children",        text: "We have a safe, fun, age-appropriate children's programme running alongside the main service." },
      { icon: "Accessibility", title: "Accessibility",   text: "Youth Bourne Centre is fully accessible. If you have specific needs, please contact us and we'll be glad to help." },
    ],
  },
  planVisit: {
    heading: "Plan Your Visit",
    address: "Youth Bourne Centre, Queens Road, Bourne, Lincolnshire PE10 9DX",
    mapsUrl: "https://maps.google.com/?q=Youth+Bourne+Centre+Queens+Road+PE10+9DX+Bourne",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2423.0!2d-0.377!3d52.769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDQ2JzA4LjQiTiAwwrAyMiczyNNdyW!5e0!3m2!1sen!2suk!4v1000000000000",
    phone: "+44 7728 845394",
  },
};

export const seriesPageContent: SeriesPageContent = {
  hero: {
    heading: "Message Series",
    subheading: "Explore our current and past sermon series — messages rooted in the Word and relevant to your life.",
  },
  current: {
    title: "Hope for Tomorrow",
    description: "Are you facing a challenging season? This series explores God's promises of restoration and peace. Join us as we dive into the Word to find strength for today's trials and hope for the future God has prepared for you.",
    tag: "Current Series",
    isCurrent: true,
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&auto=format&fit=crop",
  },
  past: [
    {
      title: "Year of Substance",
      description: "Our theme of the year — building depth in faith, prayer, and purpose. A call to move beyond the surface into the fullness of God.",
      tag: "2024 Theme",
      isCurrent: false,
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop",
    },
    {
      title: "Foundations of Prayer",
      description: "A deep dive into the principles of prayer — what it is, why it works, and how to build a consistent prayer life that transforms everything.",
      tag: "Past Series",
      isCurrent: false,
      image: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?w=800&auto=format&fit=crop",
    },
    {
      title: "Righteous Living",
      description: "What does it look like to live righteously in today's world? This series unpacks practical, Scripture-based steps for daily holy living.",
      tag: "Past Series",
      isCurrent: false,
      image: "https://images.unsplash.com/photo-1476611338391-6f395a0dd82e?w=800&auto=format&fit=crop",
    },
  ],
};

export const aboutPageContent: AboutPageContent = {
  hero: {
    heading: "About Us",
    subheading: "A community called to bring revival through prayer, faith, and righteous living.",
  },
  story: {
    eyebrow: "Our Story",
    heading: "Revival, Faith & Community in Bourne",
    body1: "House of Prayer Bourne is a vibrant, Spirit-filled community of God's people located in the heart of Bourne, Lincolnshire. Founded on the conviction that prayer makes all things possible, we exist to proclaim the good news of Jesus Christ and demonstrate His love in practical, life-changing ways.",
    body2: "Guided by Senior Pastors Micheal and Lara Samuel, we are committed to building lives, restoring hope, and strengthening faith in every season. We welcome people from all walks of life into an atmosphere of love, warmth, and genuine community.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&auto=format&fit=crop",
  },
  mission: {
    heading: "Mission, Vision & Values",
    vision: "To bring revival to our community through prayer, faith, and righteous living.",
    mission: "To proclaim the good news of Jesus Christ and demonstrate the love of God in practical and life-changing ways.",
    values: "Prayer · Righteousness · Community · Evangelism · Faith",
  },
  leaders: {
    heading: "Our Leadership",
    subheading: "Led by a team committed to prayer, the Word, and the community of Bourne.",
    team: [
      {
        name: "Pst Micheal Samuel",
        role: "Senior Pastor",
        bio: "Pst Micheal leads House of Prayer Bourne with a mandate for revival through prayer and righteous living. His passion is to see every person walk in the fullness of God's purpose.",
        image: "/images/pastorImg.jpeg",
      },
      {
        name: "Pst Lara Samuel",
        role: "Senior Pastor",
        bio: "Pst Lara co-leads the church alongside her husband, with a heart for women's ministry, community outreach, and the holistic wellbeing of every church member.",
        image: "/images/pastorMRS.jpeg",
      },
    ],
  },
  beliefs: {
    heading: "What We Believe",
    subheading: "Our faith is grounded in the authority of Scripture and the love of Jesus Christ.",
    items: [
      { icon: "BookOpen",   title: "The Bible",      text: "We believe the Bible is the inspired, infallible Word of God — our ultimate authority for faith and life." },
      { icon: "Cross",      title: "Jesus Christ",   text: "We believe Jesus Christ is the Son of God, who died for our sins, rose from the dead, and is the only way to salvation." },
      { icon: "Wind",       title: "The Holy Spirit",text: "We believe in the person and power of the Holy Spirit, who guides, empowers, and transforms believers." },
      { icon: "Flame",      title: "Prayer",         text: "We believe prayer is the foundation of all transformation — that through prayer, God makes all things possible." },
      { icon: "Church",     title: "The Church",     text: "We believe the Church is the body of Christ, called to worship, fellowship, discipleship, and service in the world." },
      { icon: "Globe",      title: "Salvation",      text: "We believe salvation is a free gift of grace through faith in Jesus Christ, available to all who believe." },
    ],
  },
  stats: [
    { label: "Years in Bourne", value: "5+" },
    { label: "Weekly Gatherings", value: "8" },
    { label: "Building Fund Goal", value: "£40K" },
    { label: "Community Events", value: "12+" },
  ],
};

export const galleryPageContent: GalleryPageContent = {
  hero: {
    heading: "Gallery",
    subheading: "A glimpse into the life of House of Prayer Bourne — worship, outreach, fellowship, and our building journey.",
  },
  categories: [
    { value: "all",       label: "All Photos"  },
    { value: "worship",   label: "Worship"     },
    { value: "outreach",  label: "Outreach"    },
    { value: "community", label: "Community"   },
    { value: "building",  label: "Building"    },
  ],
  photos: [
    { id: "1",  src: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&auto=format&fit=crop", alt: "Sunday worship service",         category: "worship",   caption: "Sunday Morning Worship" },
    { id: "2",  src: "https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?w=600&auto=format&fit=crop", alt: "Church congregation gathering",   category: "worship",   caption: "The Family of Faith" },
    { id: "3",  src: "https://images.unsplash.com/photo-1593113598332-cd9fcdf00028?w=600&auto=format&fit=crop", alt: "Community outreach",              category: "outreach",  caption: "City Heights Outreach" },
    { id: "4",  src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop", alt: "The Dinner Table event",          category: "outreach",  caption: "The Dinner Table" },
    { id: "5",  src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop", alt: "Church fellowship",               category: "community", caption: "Fellowship After Service" },
    { id: "6",  src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&auto=format&fit=crop", alt: "Evening prayer gathering",        category: "worship",   caption: "Night Vigil" },
    { id: "7",  src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&auto=format&fit=crop", alt: "Youth Bible study",               category: "community", caption: "Tuesday Bible Study" },
    { id: "8",  src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop", alt: "Building restoration work",       category: "building",  caption: "Youth Bourne Centre Restoration" },
    { id: "9",  src: "https://images.unsplash.com/photo-1476611338391-6f395a0dd82e?w=600&auto=format&fit=crop", alt: "Morning devotion",                category: "worship",   caption: "Morning Dew Devotion" },
    { id: "10", src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=600&auto=format&fit=crop", alt: "Community gathering",              category: "community", caption: "Community Gathering" },
    { id: "11", src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&auto=format&fit=crop", alt: "Building project progress",       category: "building",  caption: "Building Development Progress" },
    { id: "12", src: "https://images.unsplash.com/photo-1609234656432-603f5d5c9b43?w=600&auto=format&fit=crop", alt: "Church members in prayer",        category: "worship",   caption: "Corporate Prayer" },
  ],
};

export const contactPageContent: ContactPageContent = {
  hero: {
    heading: "Get in Touch",
    subheading: "We'd love to hear from you. Whether you have a question, need prayer, or just want to know more — reach out.",
  },
  details: {
    address: "Youth Bourne Centre, Queens Road, Bourne, Lincolnshire PE10 9DX",
    mapsUrl: "https://maps.google.com/?q=Youth+Bourne+Centre+Queens+Road+PE10+9DX+Bourne",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2423.0!2d-0.377!3d52.769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDQ2JzA4LjQiTiAwwrAyMiczyNNdyW!5e0!3m2!1sen!2suk!4v1000000000000",
    phone: "+44 7728 845394",
    email: "info@houseofprayerbourne.com",
    hours: "Sunday 10:00 am · Tuesday 6:00 pm · Friday 6:00 pm",
  },
  social: [
    { platform: "facebook",  href: "https://www.facebook.com/houseofprayerbourne",  label: "Facebook"  },
    { platform: "instagram", href: "https://www.instagram.com/houseofprayerbourne/", label: "Instagram" },
  ],
};

export const donatePageContent: DonatePageContent = {
  hero: {
    heading: "Give Generously",
    subheading: "Your generosity fuels the mission — from Sunday services to community outreach and our building project.",
  },
  waysToGive: {
    heading: "Ways to Give",
    items: [
      {
        icon: "CreditCard",
        title: "Give Online",
        description: "Donate securely via JustGiving. You can make a one-off gift or set up a regular standing order to support the building fund.",
        cta: "Donate via JustGiving",
        ctaHref: "https://www.justgiving.com/charity/3792317",
      },
      {
        icon: "Building2",
        title: "Bank Transfer",
        description: "You can give directly to our church bank account. Please contact us for our bank details and reference your name in the payment.",
        cta: "Get Bank Details",
        ctaHref: "/contact",
      },
      {
        icon: "HandHeart",
        title: "Give In Person",
        description: "We receive tithes and offerings during Sunday services at the Youth Bourne Centre. You are always welcome to give in person.",
      },
    ],
  },
  faq: {
    heading: "Giving FAQ",
    items: [
      { q: "Is my donation tax-deductible?",       a: "If you are a UK taxpayer, Gift Aid allows us to reclaim 25p for every £1 you donate at no extra cost to you. Please tick the Gift Aid box when donating online." },
      { q: "Can I set up a regular gift?",          a: "Yes! A regular standing order is one of the most impactful ways to support the church. Contact us or donate via JustGiving to set one up." },
      { q: "Where does my money go?",               a: "Donations go towards our Sunday services, community outreach programmes (City Heights, The Dinner Table), and our Building & Development project at Youth Bourne Centre." },
      { q: "How do I donate to the building fund?", a: "Click the 'Donate via JustGiving' button above. All online donations are directed to the Building & Development project unless otherwise specified." },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// ASYNC GETTERS — used by server component pages.
// When Sanity is configured these fetch live data; otherwise return static.
// ─────────────────────────────────────────────────────────────────────────────

export async function getSiteContent():     Promise<SiteContent>        { return isSanityConfigured() ? (await fetchSiteContent()    ?? siteContent)           : siteContent;           }
export async function getLivePage():        Promise<LivePageContent>     { return isSanityConfigured() ? (await fetchLivePage()       ?? livePageContent)       : livePageContent;       }
export async function getServicesPage():    Promise<ServicesPageContent> { return isSanityConfigured() ? (await fetchServicesPage()   ?? servicesPageContent)   : servicesPageContent;   }
export async function getSeriesPage():      Promise<SeriesPageContent>   { return isSanityConfigured() ? (await fetchSeriesPage()     ?? seriesPageContent)     : seriesPageContent;     }
export async function getAboutPage():       Promise<AboutPageContent>    { return isSanityConfigured() ? (await fetchAboutPage()      ?? aboutPageContent)      : aboutPageContent;      }
export async function getGalleryPage():     Promise<GalleryPageContent>  { return isSanityConfigured() ? (await fetchGalleryPage()    ?? galleryPageContent)    : galleryPageContent;    }
export async function getContactPage():     Promise<ContactPageContent>  { return isSanityConfigured() ? (await fetchContactPage()    ?? contactPageContent)    : contactPageContent;    }
export async function getDonatePage():      Promise<DonatePageContent>   { return isSanityConfigured() ? (await fetchDonatePage()     ?? donatePageContent)     : donatePageContent;     }
