import "./globals.css";
import { jsonLd } from "./jsonLd";
export { metadata } from './metadata'

import { Fraunces, Montserrat } from "next/font/google"

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['700'],
  variable: "--font-fraunces"
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: "--font-montserrat"
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${fraunces.variable} ${montserrat.variable} antialiased h-full`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
