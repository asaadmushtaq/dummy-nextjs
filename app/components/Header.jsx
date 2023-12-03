import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="text-center">
      <div className="py-6 bg-cyan-700">
        <Link href={"/"}>
          <h1 className="text-4xl font-bold">Welcome to Baghdad</h1>
        </Link>
      </div>
      <ul className="flex justify-center space-x-4 bg-slate-700 py-4">
        <Link className="hover:text-cyan-300" href={"/"}>
          Homepage
        </Link>
        <Link className="hover:text-cyan-300" href={"/blogs"}>
          Blogs
        </Link>
        <Link className="hover:text-cyan-300" href={"/contactus"}>
          Contact Us
        </Link>
        <Link className="hover:text-cyan-300" href={"/about"}>
          About
        </Link>
      </ul>
    </div>
  );
};

export default Header;
