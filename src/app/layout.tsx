import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "House of Prayer Bourne Ministry",
  description:
    "Welcome to House of Prayer Bourne — A Place Where Prayer Makes All Things Possible. A community of faith, love, and worship in Bourne, Lincolnshire.",
  // UK English locale for SEO
  other: {
    "og:locale": "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" type="image/x-icon" href="/images/hopLogo.png" />
      </head>
      <body>
        {/* Navbar and Footer are rendered inside page.tsx so they receive content props */}
        {children}
      </body>
    </html>
  );
}
