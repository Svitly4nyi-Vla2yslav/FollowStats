import Header from "@/components/Header";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Follow Stats",
  description: "Test Project",
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
