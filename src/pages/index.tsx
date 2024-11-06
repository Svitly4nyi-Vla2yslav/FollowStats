// import Header from "@/components/Header";
import { Metadata } from "next";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Follow Stats",
  description:
    "Analyze and monitor your Instagram followers with Follow Stats.",
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
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className="flex items-center flex-col justify-end h-full bg-purple mx-auto">
      <div className="flex items-center flex-col justify-end h-screen max-w-[425px] mx-auto">
        <div className="flex justify-center w-full" data-aos="fade-up">
          <Image
            src="/assets/image/Frame1.webp"
            alt="Image 1"
            className=""
            data-aos="fade-up"
            data-aos-delay="100"
            width={148}
            height={380}
          />
          <Image
            src="/assets/image/Frame2.webp"
            alt="Image 2"
            className=" "
            data-aos="fade-up"
            data-aos-delay="200"
            width={176}
            height={380}
          />
          <Image
            src="/assets/image/Frame.webp"
            alt="Image 3"
            className=""
            data-aos="fade-up"
            data-aos-delay="300"
            width={133}
            height={380}
          />
          <Image
            src="/assets/image/Vector1.webp"
            alt="Image 3"
            className="absolute w-full -z-10"
            data-aos="fade-up"
            data-aos-delay="300"
            width={104}
            height={81}
          />{" "}
          <Image
            src="/assets/image/Vector.webp"
            alt="Image 3"
            className="absolute -z-10"
            data-aos="fade-up"
            data-aos-delay="300"
            width={459}
            height={386}
          />
        </div>
        <div
          className="bg-light-gray rounded-t-2xl flex items-center flex-col mx-0
        justify-center h-full z-10 max-w-[425px]"
        >
          {" "}
          <Image
            src="/assets/image/1.webp"
            alt="Image 1"
            className=""
            data-aos="fade-up"
            data-aos-delay="100"
            width={80}
            height={80}
          />
          <h1 className="text-4xl text-center mt-3 font-bold text-black w-2/3">
            FollowStats: Profile Analyzer
          </h1>
          <p className="text-sm mt-5 text-center font-regular font-outfit text-black w-2/3">
            Check who has unfollowed you, who is interested in your profile, who
            visits your page, how interesting your friends&apos; profiles are,
            and more!
          </p>
          <Link href="/onboarding" className="mt-5 mx-0">
            <span className="bg-purple p-4 px-28 text-light-gray rounded-lg ">
              Get Started{" "}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
