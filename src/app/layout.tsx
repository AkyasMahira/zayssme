import type { Metadata } from "next";
import { Roboto_Mono, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Wrapper from "@/components/layouts/app/wrapper";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zayssme.my.id"),

  title: {
    default: "Zayssme",
    template: "%s | Zayssme",
  },

  description:
    "Portfolio website of Akyas Mahira — web developer, software engineer, and creator of personal projects.",

  keywords: [
    "Akyas Mahira",
    "Zayssme",
    "web developer",
    "software engineer",
    "frontend developer",
    "fullstack developer",
    "next.js developer",
    "typescript developer",
    "portfolio website",
    "programming",
    "web development",
    "personal projects",
  ],

  authors: [
    {
      name: "Akyas Mahira",
      url: "https://github.com/AkyasMAhira",
    },
  ],

  creator: "Akyas Mahira",

  icons: {
    icon: "/untitled.svg",
  },

  verification: {
    google: "XRsOgHAwdi2D8vg2NvkPbl4v8fGIGvEEG6I9-g7Pduo",
  },

  openGraph: {
    title: "Zayssme",
    description:
      "Portfolio website of Akyas Mahira — web developer and software engineer.",
    url: "https://zayssme.my.id",
    siteName: "Zayssme",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Zayssme Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Zayssme",
    description:
      "Portfolio website of Akyas Mahira — web developer and software engineer.",
    images: ["/banner.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${robotoMono.variable} antialiased font-normal font-geist text-foreground`}
      >
        <Wrapper>{children}</Wrapper>

        <Toaster
          richColors
          toastOptions={{
            style: {
              background: "#2E2E2E",
              border: "none",
              color: "#F2F2F4",
            },
          }}
        />
      </body>
    </html>
  );
}