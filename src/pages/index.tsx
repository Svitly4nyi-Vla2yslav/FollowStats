import Header from "@/components/Header";
import React from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">
          Hello, FollowStats!
        </h1>
      </div>
    </div>
  );
}
