import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary flex flex-col items-center h-[60svh] p-8">
      <Image
        src={"/images/brand_logo_light.svg"}
        alt="Company Logo"
        width={200}
        height={80}
        priority
      />
      <div className="w-full max-sm:text-[9px] text-[12px] text-center mt-5">
        <p>You just saved a few pages from being printed. Not all heroes wear capes —</p>
        <p>some just scan smartly!</p>
      </div>
    </footer>
  );
}
