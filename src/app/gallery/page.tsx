import { getGalleryPage } from "@/lib/content";
import GalleryClient from "./GalleryClient";

export const revalidate = 60;

export default async function GalleryPage() {
  const c = await getGalleryPage();
  return <GalleryClient c={c} />;
}
