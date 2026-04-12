// @ts-nocheck — types resolve after: npm install
import { defineType, defineField, defineArrayMember } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "navbar",     title: "Navbar"          },
    { name: "hero",       title: "Hero"             },
    { name: "banner",     title: "Soul Winning Banner" },
    { name: "livestream", title: "Live Stream"      },
    { name: "services",   title: "Services Section" },
    { name: "benefits",   title: "Benefits Section" },
    { name: "gatherings", title: "Gatherings"       },
    { name: "series",     title: "Current Series"   },
    { name: "donations",  title: "Donations"        },
    { name: "pastor",     title: "Pastor Quote"     },
    { name: "firstTimer", title: "First Timer Form" },
    { name: "footer",     title: "Footer"           },
  ],
  fields: [
    // ── Navbar ──────────────────────────────────────────────
    defineField({
      name: "navLinks", title: "Nav Links", type: "array", group: "navbar",
      of: [defineArrayMember({
        type: "object",
        fields: [
          defineField({ name: "name",  title: "Label", type: "string" }),
          defineField({ name: "href",  title: "Path",  type: "string" }),
        ],
      })],
    }),
    defineField({ name: "navCtaLabel", title: "CTA Button Label", type: "string", group: "navbar" }),
    defineField({ name: "navCtaHref",  title: "CTA Button Path",  type: "string", group: "navbar" }),

    // ── Hero ────────────────────────────────────────────────
    defineField({ name: "heroEyebrow",     title: "Eyebrow Text",       type: "string", group: "hero" }),
    defineField({ name: "heroHeadline",    title: "Main Headline",      type: "string", group: "hero" }),
    defineField({ name: "heroTheme",       title: "Theme of the Year",  type: "string", group: "hero" }),
    defineField({ name: "heroSubheadline", title: "Subheadline",        type: "text",   group: "hero" }),
    defineField({ name: "heroPrimaryLabel",  title: "Primary CTA Label",   type: "string", group: "hero" }),
    defineField({ name: "heroPrimaryHref",   title: "Primary CTA Link",    type: "string", group: "hero" }),
    defineField({ name: "heroSecondaryLabel", title: "Secondary CTA Label", type: "string", group: "hero" }),
    defineField({ name: "heroSecondaryHref",  title: "Secondary CTA Link",  type: "string", group: "hero" }),

    // ── Soul Winning Banner ──────────────────────────────────
    defineField({ name: "bannerText",      title: "Banner Text",       type: "text",   group: "banner" }),
    defineField({ name: "bannerLinkLabel", title: "Banner Link Label", type: "string", group: "banner" }),
    defineField({ name: "bannerLinkHref",  title: "Banner Link Href",  type: "string", group: "banner" }),

    // ── Live Stream ─────────────────────────────────────────
    defineField({ name: "liveTitle",       title: "Section Title",    type: "string", group: "livestream" }),
    defineField({ name: "liveSchedule",    title: "Schedule Text",    type: "string", group: "livestream" }),
    defineField({ name: "liveVenueName",   title: "Venue Name",       type: "string", group: "livestream" }),
    defineField({ name: "liveVenueAddr",   title: "Venue Address",    type: "string", group: "livestream" }),
    defineField({ name: "liveMapsUrl",     title: "Google Maps URL",  type: "url",    group: "livestream" }),
    defineField({ name: "liveStreamUrl",   title: "Stream URL",       type: "string", group: "livestream" }),
    defineField({ name: "livePastMsgUrl",  title: "Past Messages URL", type: "string", group: "livestream" }),
    defineField({ name: "liveImage",       title: "Background Image", type: "image",  group: "livestream", options: { hotspot: true } }),

    // ── Services Section ────────────────────────────────────
    defineField({ name: "servicesEyebrow",  title: "Eyebrow",      type: "string", group: "services" }),
    defineField({ name: "servicesHeading",  title: "Heading",      type: "string", group: "services" }),
    defineField({ name: "servicesDesc1",    title: "Paragraph 1",  type: "text",   group: "services" }),
    defineField({ name: "servicesDesc2",    title: "Paragraph 2",  type: "text",   group: "services" }),
    defineField({
      name: "servicesCards", title: "Service Cards", type: "array", group: "services",
      of: [defineArrayMember({
        type: "object",
        fields: [
          defineField({ name: "iconName", title: "Icon Name (Lucide)", type: "string" }),
          defineField({ name: "title",    title: "Title",              type: "string" }),
          defineField({ name: "text",     title: "Description",        type: "text"   }),
        ],
      })],
    }),

    // ── Benefits Section ────────────────────────────────────
    defineField({ name: "benefitsEyebrow",    title: "Eyebrow",    type: "string", group: "benefits" }),
    defineField({ name: "benefitsHeading",    title: "Heading",    type: "string", group: "benefits" }),
    defineField({ name: "benefitsSubheading", title: "Subheading", type: "text",   group: "benefits" }),
    defineField({
      name: "benefitsCards", title: "Benefit Cards", type: "array", group: "benefits",
      of: [defineArrayMember({
        type: "object",
        fields: [
          defineField({ name: "icon",        title: "Icon Name (Lucide)", type: "string" }),
          defineField({ name: "title",       title: "Title",              type: "string" }),
          defineField({ name: "description", title: "Description",        type: "text"   }),
        ],
      })],
    }),

    // ── Gatherings ──────────────────────────────────────────
    defineField({ name: "gatheringsEyebrow",    title: "Eyebrow",    type: "string", group: "gatherings" }),
    defineField({ name: "gatheringsHeading",    title: "Heading",    type: "string", group: "gatherings" }),
    defineField({ name: "gatheringsSubheading", title: "Subheading", type: "text",   group: "gatherings" }),
    defineField({
      name: "gatheringItems", title: "Gathering Items", type: "array", group: "gatherings",
      of: [defineArrayMember({
        type: "object",
        fields: [
          defineField({ name: "type",        title: "Type",        type: "string",
            options: { list: ["inperson","online","bible-study","prayer","outreach","coming-soon"] } }),
          defineField({ name: "badgeLabel",  title: "Badge Label", type: "string" }),
          defineField({ name: "title",       title: "Title",       type: "string" }),
          defineField({ name: "time",        title: "Time",        type: "string" }),
          defineField({ name: "description", title: "Description", type: "text"   }),
          defineField({ name: "mapsUrl",     title: "Maps URL",    type: "url"    }),
        ],
      })],
    }),

    // ── Current Series ──────────────────────────────────────
    defineField({ name: "seriesEyebrow",     title: "Eyebrow",     type: "string", group: "series" }),
    defineField({ name: "seriesTitle",       title: "Series Title", type: "string", group: "series" }),
    defineField({ name: "seriesDescription", title: "Description",  type: "text",   group: "series" }),

    // ── Donations ───────────────────────────────────────────
    defineField({ name: "donationsEyebrow",     title: "Eyebrow",            type: "string", group: "donations" }),
    defineField({ name: "donationsHeading",     title: "Heading",            type: "string", group: "donations" }),
    defineField({ name: "donationsSubheading",  title: "Subheading",         type: "text",   group: "donations" }),
    defineField({ name: "donationsProjectTitle",title: "Project Title",      type: "string", group: "donations" }),
    defineField({ name: "donationsProjectDesc", title: "Project Description",type: "text",   group: "donations" }),
    defineField({ name: "donationsRaised",      title: "Amount Raised (£)",  type: "number", group: "donations" }),
    defineField({ name: "donationsGoal",        title: "Goal Amount (£)",    type: "number", group: "donations" }),
    defineField({ name: "donationsUrl",         title: "Donation URL",       type: "url",    group: "donations" }),

    // ── Pastor Quote ────────────────────────────────────────
    defineField({ name: "pastorQuote",  title: "Quote",      type: "text",   group: "pastor" }),
    defineField({ name: "pastorBody1",  title: "Paragraph 1",type: "text",   group: "pastor" }),
    defineField({ name: "pastorBody2",  title: "Paragraph 2",type: "text",   group: "pastor" }),
    defineField({ name: "pastorName",   title: "Name",       type: "string", group: "pastor" }),
    defineField({ name: "pastorTitle",  title: "Title/Role", type: "string", group: "pastor" }),
    defineField({ name: "pastorImage",  title: "Photo",      type: "image",  group: "pastor", options: { hotspot: true } }),

    // ── First Timer Form ────────────────────────────────────
    defineField({ name: "firstTimerEyebrow",   title: "Eyebrow",    type: "string", group: "firstTimer" }),
    defineField({ name: "firstTimerHeading",   title: "Heading",    type: "string", group: "firstTimer" }),
    defineField({ name: "firstTimerSubheading",title: "Subheading", type: "text",   group: "firstTimer" }),
    defineField({
      name: "firstTimerHearOptions", title: "How Did You Hear Options",
      type: "array", group: "firstTimer",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({ name: "firstTimerEmail", title: "Notification Email", type: "string", group: "firstTimer" }),

    // ── Footer ──────────────────────────────────────────────
    defineField({ name: "footerDescription", title: "Description", type: "text",   group: "footer" }),
    defineField({ name: "footerAddress",     title: "Address",     type: "text",   group: "footer" }),
    defineField({ name: "footerMapsUrl",     title: "Maps URL",    type: "url",    group: "footer" }),
    defineField({ name: "footerPhone",       title: "Phone",       type: "string", group: "footer" }),
    defineField({
      name: "footerSocials", title: "Social Links", type: "array", group: "footer",
      of: [defineArrayMember({
        type: "object",
        fields: [
          defineField({ name: "platform", title: "Platform", type: "string",
            options: { list: ["facebook","instagram","youtube","twitter","tiktok"] } }),
          defineField({ name: "href",  title: "URL",   type: "url"    }),
          defineField({ name: "label", title: "Label", type: "string" }),
        ],
      })],
    }),
    defineField({
      name: "footerGatheringLinks", title: "Gathering Links", type: "array", group: "footer",
      of: [defineArrayMember({
        type: "object",
        fields: [
          defineField({ name: "label", title: "Label", type: "string" }),
          defineField({ name: "href",  title: "Path",  type: "string" }),
        ],
      })],
    }),
    defineField({
      name: "footerUsefulLinks", title: "Useful Links", type: "array", group: "footer",
      of: [defineArrayMember({
        type: "object",
        fields: [
          defineField({ name: "label",     title: "Label",     type: "string"  }),
          defineField({ name: "href",      title: "Path",      type: "string"  }),
          defineField({ name: "highlight", title: "Highlight", type: "boolean" }),
        ],
      })],
    }),
  ],
});
