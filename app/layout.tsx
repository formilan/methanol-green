import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Methanol.Green | Green Methanol Trading for Maritime Bunkering",
  description: "Boutique trading house specialized in green methanol for maritime bunkering. FuelEU Maritime compliance solutions. Based in the EU with deep expertise in Caspian energy markets.",
  keywords: "green methanol, maritime bunkering, FuelEU Maritime, EU ETS, e-methanol, sustainable shipping, carbon neutral fuel",
  openGraph: {
    title: "Methanol.Green | Green Methanol Trading",
    description: "Boutique trading house specialized in green methanol for maritime bunkering",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
