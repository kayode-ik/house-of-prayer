// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore — resolved after: npm install
import { createClient } from "next-sanity";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore — resolved after: npm install
import imageUrlBuilder from "@sanity/image-url";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore — resolved after: npm install
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const projectId  = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset    = process.env.NEXT_PUBLIC_SANITY_DATASET    ?? "production";
export const apiVersion = "2024-01-01";

/**
 * Lazy singleton — only created when projectId is present.
 * This prevents a crash on startup when .env.local isn't filled in yet.
 */
let _client: ReturnType<typeof createClient> | null = null;

export function getClient() {
  if (!projectId) return null;
  if (!_client) {
    _client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === "production",
      // Next.js ISR: cache Sanity responses for 60 seconds.
      // Pages rebuild in the background — visitors always get fast cached HTML.
      stega: false,
    });
  }
  return _client;
}

// Keep a named `client` export for any code that imports it directly
export const client = { fetch: async (query: string) => getClient()?.fetch(query) ?? null };

/** Convert a Sanity image reference into a plain URL string.
 *  Returns "" when Sanity is not yet configured. */
export function urlFor(source: SanityImageSource): string {
  const c = getClient();
  if (!c) return "";
  return imageUrlBuilder(c).image(source).auto("format").url();
}
