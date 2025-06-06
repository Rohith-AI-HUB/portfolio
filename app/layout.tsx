import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rohith B | Professional Machine Learning Engineer",
  description:
    "Portfolio showcasing expertise in AI, Machine Learning, and Data Science. Featuring projects in deep learning, computer vision, NLP, and more.",
  keywords: "AI, Machine Learning, Data Science, Deep Learning, Computer Vision, NLP, Portfolio",
  authors: [{ name: "Rohith B" }],
  openGraph: {
    title: "Rohith B Portfolio",
    description: "Professional Machine Learning Engineer Portfolio",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
