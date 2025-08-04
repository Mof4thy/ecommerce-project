import React from 'react';
import { AiOutlineFileProtect, AiOutlineDollar } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";

export default function FooterFeatures() {
  return (
    <footer className="bg-[#F7F8FD] border-t border-[#E3E4E6]">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-[13px] font-medium text-[#202435] py-4 border-b border-[#E3E4E6]">
        
        {/* Feature 1 */}
        <div className="flex items-center gap-2 px-5 py-4 border-b sm:border-b-0 lg:border-r border-[#E3E4E6] whitespace-nowrap overflow-hidden">
          <AiOutlineFileProtect size={20} className="min-w-[20px]" />
          <span className="truncate">Everyday fresh products</span>
        </div>

        {/* Feature 2 */}
        <div className="flex items-center gap-2 px-5 py-4 border-b sm:border-b-0 lg:border-r border-[#E3E4E6] whitespace-nowrap overflow-hidden">
          <TbTruckDelivery size={20} className="min-w-[20px]" />
          <span className="truncate">Free delivery for order over $70</span>
        </div>

        {/* Feature 3 */}
        <div className="flex items-center gap-2 px-5 py-4 border-b sm:border-b-0 lg:border-r border-[#E3E4E6] whitespace-nowrap overflow-hidden">
          <CiDiscount1 size={20} className="min-w-[20px]" />
          <span className="truncate">Daily Mega Discounts</span>
        </div>

        {/* Feature 4 */}
        <div className="flex items-center gap-2 px-5 py-4 whitespace-nowrap overflow-hidden">
          <AiOutlineDollar size={20} className="min-w-[20px]" />
          <span className="truncate">Best price on the market</span>
        </div>

      </div>
    </footer>
  );
}
