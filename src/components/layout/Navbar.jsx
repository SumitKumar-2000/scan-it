import React from "react";
import Image from "next/image";
// import brandLogo from ""

export default function Navbar() {
  return <nav className="h-[8svh] pr-4 flex items-center">
    <Image
      src={"/images/brand_logo_dark.svg"}
      alt="Company Logo"
      width={100}
      height={40}
      priority
    />
  </nav>;
}
