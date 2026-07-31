import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Providers from "@/components/providers"
import "./globals.css"

export const metadata: Metadata = {
  title: "Modern Knight Chess Academy – FIDE Certified Master Training & Student Portal",
  description:
    "Modern Knight Chess Academy offers FIDE certified chess coaching, grandmaster masterclasses, tournament preparation, interactive student PGN puzzle arena, and physical training centers.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Modern Knight Chess Academy",
          "url": "https://modernknightchess.com",
          "sameAs": [
            "https://modernknightchess.com"
          ]
        }
        `}
        </script>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased selection:bg-[#0B4398] selection:text-white`}>
        <Providers>
          <Header />
          <Suspense fallback={null}>{children}</Suspense>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
