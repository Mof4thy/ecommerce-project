import React from "react";

import Navbar from "./Navbar";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <header>
      <div className="bg-[#35AFA0] text-white h-[36px] flex items-center justify-center text-xs">
        Due to current circumstances, there may be slight delays in order
        processing
      </div>

      {/*  about */}
      <TopBar />

      {/* profile */}
      <Navbar />
    </header>
  );
}
