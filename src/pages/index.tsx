// import Header from "@/components/Header";
import { Metadata } from "next";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import Image from "next/image";

import Frame1 from "../assets/Frame1.svg";
import Frame2 from "../assets/Frame2.svg";
import Frame from "../assets/Frame.svg";
import Vector1 from "../assets/Vector1.svg";
import Vector from "../assets/Vector.svg";
import Logo from "../assets/1.svg";

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
          <div className="flex relative top-24 max-w-[425px] mx-auto space-x-2 
          justify-center overflow-hidden">
            {" "}
            <Frame
              className="relative -z-10"
              data-aos="fade-right"
              data-aos-delay="300"
            />
            <Frame1
              className=" -z-20 "
              data-aos="zoom-in"
              data-aos-delay="100"
            />
            <Frame2
              className="relative -z-10"
              data-aos="fade-left"
              data-aos-delay="200"
            />
          </div>
          <Vector1
            className="absolute w-full -z-30"
            data-aos="fade-up"
            data-aos-delay="300"
          />
          <Vector
            className="absolute -z-30"
            data-aos="fade-up"
            data-aos-delay="300"
          />
        </div>
        <div
          className="bg-light-gray rounded-t-2xl flex 
          items-center flex-col mx-0
        justify-center h-full z-10 max-w-[425px]"
          data-aos="fade-up"
          data-aos-easing="linear"
        >
          {" "}
          <Logo className="flex" data-aos="zoom-in" data-aos-delay="200" />
          <h1 className="text-4xl text-center mt-3 font-bold
           text-black w-2/3">
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
