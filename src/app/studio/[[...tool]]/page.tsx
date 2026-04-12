/**
 * The embedded Sanity Studio is removed — it conflicts with React 19.
 * Use the hosted studio instead: run `npx sanity deploy` once to get
 * a permanent URL like https://house-of-prayer.sanity.studio
 *
 * This page redirects anyone who visits /studio to the hosted studio.
 */
import { redirect } from "next/navigation";

export default function StudioRedirect() {
  // Replace this URL with your deployed studio URL after running: npx sanity deploy
  redirect("https://manage.sanity.io");
}
