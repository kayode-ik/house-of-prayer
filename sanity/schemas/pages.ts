// @ts-nocheck — types resolve after: npm install
import { defineType, defineField, defineArrayMember } from "sanity";

// ─── Live Page ───────────────────────────────────────────────────────────────

export const livePage = defineType({
  name: "livePage",
  title: "Live Page",
  type: "document",
  fields: [
    defineField({ name: "heroHeading",    title: "Hero Heading",    type: "string" }),
    defineField({ name: "heroSubheading", title: "Hero Subheading", type: "text"   }),
    defineField({ name: "streamTitle",       title: "Stream Title",       type: "string" }),
    defineField({ name: "streamDescription", title: "Stream Description", type: "text"   }),
    defineField({ name: "youtubeChannelUrl", title: "YouTube Channel URL", type: "url"   }),
    defineField({ name: "scheduleHeading", title: "Schedule Heading", type: "string" }),
    defineField({
      name: "scheduleItems", title: "Schedule Items", type: "array",
      of: [defineArrayMember({
        type: "object",
        fields: [
          defineField({ name: "time",   title: "Time",   type: "string"  }),
          defineField({ name: "label",  title: "Label",  type: "string"  }),
          defineField({ name: "isLive", title: "Is Live (Sunday service)", type: "boolean" }),
        ],
      })],
    }),
    defineField({ name: "pastMessagesHeading",    title: "Past Messages Heading",    type: "string" }),
    defineField({ name: "pastMessagesSubheading", title: "Past Messages Subheading", type: "text"   }),
  ],
});

// ─── Services Page ───────────────────────────────────────────────────────────

export const servicesPage = defineType({
  name: "servicesPage",
  title: "Services Page",
  type: "document",
  fields: [
    defineField({ name: "heroHeading",    title: "Hero Heading",    type: "string" }),
    defineField({ name: "heroSubheading", title: "Hero Subheading", type: "text"   }),
    defineField({ name: "wtxHeading",    title: "What to Expect: Heading",    type: "string" }),
    defineField({ name: "wtxSubheading", title: "What to Expect: Subheading", type: "text"   }),
    defineField({
      name: "wtxItems", title: "What to Expect Items", type: "array",
      of: [defineArrayMember({
        type: "object",
        fields: [
          defineField({ name: "icon",  title: "Icon (Lucide name)", type: "string" }),
          defineField({ name: "title", title: "Title",              type: "string" }),
          defineField({ name: "text",  title: "Description",        type: "text"   }),
        ],
      })],
    }),
    defineField({ name: "planHeading", title: "Plan Your Visit: Heading", type: "string" }),
    defineField({ name: "planAddress", title: "Address",                  type: "text"   }),
    defineField({ name: "planMapsUrl", title: "Google Maps URL",          type: "url"    }),
    defineField({ name: "planMapsEmbed", title: "Google Maps Embed URL",  type: "url"    }),
    defineField({ name: "planPhone",   title: "Phone",                    type: "string" }),
  ],
});

// ─── Series Page ─────────────────────────────────────────────────────────────

export const seriesPage = defineType({
  name: "seriesPage",
  title: "Series Page",
  type: "document",
  fields: [
    defineField({ name: "heroHeading",    title: "Hero Heading",    type: "string" }),
    defineField({ name: "heroSubheading", title: "Hero Subheading", type: "text"   }),
    defineField({
      name: "currentSeries", title: "Current Series", type: "object",
      fields: [
        defineField({ name: "title",       title: "Title",       type: "string" }),
        defineField({ name: "description", title: "Description", type: "text"   }),
        defineField({ name: "tag",         title: "Tag Badge",   type: "string" }),
        defineField({ name: "image",       title: "Cover Image", type: "image", options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: "pastSeries", title: "Past Series", type: "array",
      of: [defineArrayMember({
        type: "object",
        fields: [
          defineField({ name: "title",       title: "Title",       type: "string" }),
          defineField({ name: "description", title: "Description", type: "text"   }),
          defineField({ name: "tag",         title: "Tag Badge",   type: "string" }),
          defineField({ name: "image",       title: "Cover Image", type: "image", options: { hotspot: true } }),
        ],
      })],
    }),
  ],
});

// ─── About Page ──────────────────────────────────────────────────────────────

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({ name: "heroHeading",    title: "Hero Heading",    type: "string" }),
    defineField({ name: "heroSubheading", title: "Hero Subheading", type: "text"   }),
    // Story
    defineField({ name: "storyEyebrow", title: "Story Eyebrow",   type: "string" }),
    defineField({ name: "storyHeading", title: "Story Heading",   type: "string" }),
    defineField({ name: "storyBody1",   title: "Story Paragraph 1", type: "text" }),
    defineField({ name: "storyBody2",   title: "Story Paragraph 2", type: "text" }),
    defineField({ name: "storyImage",   title: "Story Image",     type: "image", options: { hotspot: true } }),
    // Mission
    defineField({ name: "missionHeading", title: "Mission Section Heading", type: "string" }),
    defineField({ name: "missionVision",  title: "Vision",                  type: "text"   }),
    defineField({ name: "missionMission", title: "Mission",                 type: "text"   }),
    defineField({ name: "missionValues",  title: "Values",                  type: "text"   }),
    // Leadership
    defineField({ name: "leadersHeading",    title: "Leadership Heading",    type: "string" }),
    defineField({ name: "leadersSubheading", title: "Leadership Subheading", type: "text"   }),
    defineField({
      name: "leaderTeam", title: "Leadership Team", type: "array",
      of: [defineArrayMember({
        type: "object",
        fields: [
          defineField({ name: "name",  title: "Name",       type: "string" }),
          defineField({ name: "role",  title: "Role/Title", type: "string" }),
          defineField({ name: "bio",   title: "Bio",        type: "text"   }),
          defineField({ name: "image", title: "Photo",      type: "image", options: { hotspot: true } }),
        ],
      })],
    }),
    // Beliefs
    defineField({ name: "beliefsHeading",    title: "Beliefs Heading",    type: "string" }),
    defineField({ name: "beliefsSubheading", title: "Beliefs Subheading", type: "text"   }),
    defineField({
      name: "beliefItems", title: "Belief Items", type: "array",
      of: [defineArrayMember({
        type: "object",
        fields: [
          defineField({ name: "icon",  title: "Icon (Lucide name)", type: "string" }),
          defineField({ name: "title", title: "Title",              type: "string" }),
          defineField({ name: "text",  title: "Description",        type: "text"   }),
        ],
      })],
    }),
    // Stats
    defineField({
      name: "stats", title: "Stats", type: "array",
      of: [defineArrayMember({
        type: "object",
        fields: [
          defineField({ name: "label", title: "Label", type: "string" }),
          defineField({ name: "value", title: "Value", type: "string" }),
        ],
      })],
    }),
  ],
});

// ─── Gallery Page ─────────────────────────────────────────────────────────────

export const galleryPage = defineType({
  name: "galleryPage",
  title: "Gallery Page",
  type: "document",
  fields: [
    defineField({ name: "heroHeading",    title: "Hero Heading",    type: "string" }),
    defineField({ name: "heroSubheading", title: "Hero Subheading", type: "text"   }),
    defineField({
      name: "photos", title: "Gallery Photos", type: "array",
      of: [defineArrayMember({
        type: "object",
        fields: [
          defineField({ name: "image",    title: "Photo",    type: "image", options: { hotspot: true } }),
          defineField({ name: "alt",      title: "Alt Text", type: "string" }),
          defineField({ name: "caption",  title: "Caption",  type: "string" }),
          defineField({ name: "category", title: "Category", type: "string",
            options: { list: ["worship","outreach","community","building"] } }),
        ],
      })],
    }),
  ],
});

// ─── Contact Page ─────────────────────────────────────────────────────────────

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({ name: "heroHeading",    title: "Hero Heading",    type: "string" }),
    defineField({ name: "heroSubheading", title: "Hero Subheading", type: "text"   }),
    defineField({ name: "detailsAddress",   title: "Address",             type: "text"   }),
    defineField({ name: "detailsMapsUrl",   title: "Google Maps URL",     type: "url"    }),
    defineField({ name: "detailsMapsEmbed", title: "Google Maps Embed URL", type: "url"  }),
    defineField({ name: "detailsPhone",     title: "Phone",               type: "string" }),
    defineField({ name: "detailsEmail",     title: "Email",               type: "string" }),
    defineField({ name: "detailsHours",     title: "Service Hours",       type: "string" }),
    defineField({
      name: "socialLinks", title: "Social Links", type: "array",
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
  ],
});

// ─── Donate Page ──────────────────────────────────────────────────────────────

export const donatePage = defineType({
  name: "donatePage",
  title: "Donate Page",
  type: "document",
  fields: [
    defineField({ name: "heroHeading",    title: "Hero Heading",    type: "string" }),
    defineField({ name: "heroSubheading", title: "Hero Subheading", type: "text"   }),
    defineField({ name: "waysHeading", title: "Ways to Give: Heading", type: "string" }),
    defineField({
      name: "waysItems", title: "Ways to Give Items", type: "array",
      of: [defineArrayMember({
        type: "object",
        fields: [
          defineField({ name: "icon",        title: "Icon (Lucide name)", type: "string" }),
          defineField({ name: "title",       title: "Title",              type: "string" }),
          defineField({ name: "description", title: "Description",        type: "text"   }),
          defineField({ name: "cta",         title: "CTA Button Label",   type: "string" }),
          defineField({ name: "ctaHref",     title: "CTA Button Link",    type: "string" }),
        ],
      })],
    }),
    defineField({ name: "faqHeading", title: "FAQ Heading", type: "string" }),
    defineField({
      name: "faqItems", title: "FAQ Items", type: "array",
      of: [defineArrayMember({
        type: "object",
        fields: [
          defineField({ name: "q", title: "Question", type: "string" }),
          defineField({ name: "a", title: "Answer",   type: "text"   }),
        ],
      })],
    }),
  ],
});
