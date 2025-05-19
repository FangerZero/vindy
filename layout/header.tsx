"use client";

import * as React from "react";
import VindictusLogo from "@/public/images/Vindictus.png";
import Image from "next/image";
import Link from "next/link";

const pages = ["Character", "Marketplace"];

function Header() {
  return (
    <div className="flex flex-row p-2">
      <a href="/" className="pr-8">
        <Image src={VindictusLogo} alt="Vindictus Logo that says vindictus " />
      </a>

      {pages.map((page) => (
        <Link
          key={page}
          href={`/${page.toLowerCase()}`}
          className="align-middle p-6 hover:text-sky-400 active:text-sky-800"
        >
          {page}
        </Link>
      ))}
    </div>
  );
}
export default Header;
