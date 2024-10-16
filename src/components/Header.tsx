import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-lg font-bold">Follow Stats</h1>
     <div className="flex flex-col"><Link href="/login">login</Link>
      <Link href="/signup">signup</Link></div> 
    </header>
  );
};

export default Header;
