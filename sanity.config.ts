// @ts-nocheck — types resolve after: npm install
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

const projectId = "k0dy1iv8";
const dataset   = "production";

export default defineConfig({
  name: "house-of-prayer",
  title: "House of Prayer Bourne",
  projectId,
  dataset,
  basePath: "/studio",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem().title("Site Settings").id("siteSettings")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            S.divider(),
            S.listItem().title("Live Page").id("livePage")
              .child(S.document().schemaType("livePage").documentId("livePage")),
            S.listItem().title("Services Page").id("servicesPage")
              .child(S.document().schemaType("servicesPage").documentId("servicesPage")),
            S.listItem().title("Series Page").id("seriesPage")
              .child(S.document().schemaType("seriesPage").documentId("seriesPage")),
            S.listItem().title("About Page").id("aboutPage")
              .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
            S.listItem().title("Gallery Page").id("galleryPage")
              .child(S.document().schemaType("galleryPage").documentId("galleryPage")),
            S.listItem().title("Contact Page").id("contactPage")
              .child(S.document().schemaType("contactPage").documentId("contactPage")),
            S.listItem().title("Donate Page").id("donatePage")
              .child(S.document().schemaType("donatePage").documentId("donatePage")),
          ]),
    }),
  ],

  schema: { types: schemaTypes },
});
