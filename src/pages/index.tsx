import Header from "@/components/Header";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Follow Stats",
  description: "Analyze and monitor your Instagram followers with Follow Stats.",
  keywords: ["Instagram analytics", "followers tracking", "social media stats"],
  openGraph: {
    title: "Follow Stats",
    description: "Get insights on your Instagram followers and activity.",
    url: "https://follow-stats.netlify.app/",
    siteName: "Follow Stats",
    images: [
      {
        url: "/assets/tempImageryDmsK.png", // Обов’язково заміни на актуальне зображення для перегляду
        width: 568,
        height: 530,
        alt: "Preview image for Follow Stats",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Follow Stats",
    description: "Track and analyze your Instagram followers.",
    images: ["/assets/tempImageryDmsK.png"], // Вкажи актуальне зображення для Twitter
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: "index, follow",
};

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex items-center flex-col justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">
          Hello, FollowStats!
        </h1>
        <Link href="/onboarding" className="mt-4">
          <span className="bg-yellow-400  mt-4 p-2 text-white rounded-lg ">
            Get Started{" "}
          </span>
        </Link>
      </div>
    </div>
  );
}
