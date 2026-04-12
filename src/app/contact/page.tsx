import { getContactPage } from "@/lib/content";
import ContactClient from "./ContactClient";

export const revalidate = 60;

export default async function ContactPage() {
  const c = await getContactPage();
  return <ContactClient c={c} />;
}
