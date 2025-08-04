import React, { useEffect, useRef, useState } from "react";
import ico from "../../assets/Icon.png";
import { Link } from "react-router-dom";

export default function TopBar() {
  const [langOpen, setLangOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const langRef = useRef(null);
  const currencyRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false);
      }
      if (currencyRef.current && !currencyRef.current.contains(event.target)) {
        setCurrencyOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="border-b border-[#E3E4E6] text-[#3E445A] py-3">
      <div className="container mx-auto px-4 text-xs flex flex-col lg:flex-row lg:justify-between gap-3 text-center">
        {/* القسم الأول: الروابط */}
        <div className="flex flex-row justify-center items-center gap-3">
          <Link to="/about" className="hover:text-[#35AFA0]">
            About Us
          </Link>
          <a href="/compare" className="hover:text-[#35AFA0]">
            Compare
          </a>
          <Link to="/wishlist" className="hover:text-[#35AFA0]">
            Wishlist
          </Link>
        </div>

        {/* القسم الثاني: المعلومات */}
        <div className="flex flex-row justify-center items-center flex-wrap gap-3 text-center">
          <p className="flex items-center gap-1">
            <img src={ico} alt="icon" className="w-4 h-4" />
            <span className="text-[11px] md:text-xs">
              100% Secure delivery without contacting the courier
            </span>
          </p>

          <p className="border-l pl-3 border-[#EDEEF5] text-[11px] md:text-xs">
            Need help? Call Us:
            <span className="font-semibold text-[#35AFA0] ml-1">+0020 500</span>
          </p>

          {/* Dropdowns */}
          <div className="flex items-center gap-2 border-l pl-3 border-[#EDEEF5] text-[11px] md:text-xs">
            {/* Language */}
            <div className="relative" ref={langRef}>
              <button
                className="hover:text-[#35AFA0]"
                onClick={() => setLangOpen(!langOpen)}
              >
                English ▾
              </button>
              {langOpen && (
                <ul className="absolute bg-white shadow-lg border border-[#E4E5EE] rounded mt-1 w-28 z-10 text-[#3E445A] text-sm">
                  <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">
                    English
                  </li>
                  <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">
                    Arabic
                  </li>
                  <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">
                    French
                  </li>
                </ul>
              )}
            </div>

            {/* Currency */}
            <div className="relative" ref={currencyRef}>
              <button
                className="hover:text-[#35AFA0]"
                onClick={() => setCurrencyOpen(!currencyOpen)}
              >
                USD ▾
              </button>
              {currencyOpen && (
                <ul className="absolute bg-white shadow-lg border border-[#E4E5EE] rounded mt-1 w-20 z-10 text-[#3E445A] text-sm">
                  <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">
                    USD
                  </li>
                  <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">
                    EUR
                  </li>
                  <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">
                    EGP
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
