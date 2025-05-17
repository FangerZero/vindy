"use client";

import * as React from "react";
import VindictusLogo from "@/public/images/Vindictus.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const pages = ["Character", "Marketplace", "Misc"];

function ResponsiveAppBar() {
  const router = useRouter();

  return (
    <>
      <a href="/">
        <Image src={VindictusLogo} alt="Vindictus Logo that says vindictus " />
      </a>

      {pages.map((page) => (
        <Link class="" href={`/${page.toLowerCase()}`}>
          {page}
        </Link>
      ))}
    </>
  );
}
export default ResponsiveAppBar;
