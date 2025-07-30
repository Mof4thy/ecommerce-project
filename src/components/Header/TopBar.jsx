import React, { useEffect, useRef, useState } from "react";
import ico from "../../assets/Icon.png";
import { Link } from "react-router-dom";

export default function TopBar() {
  // لتحديد ما إذا كانت قائمة اللغة مفتوحة
  const [langOpen, setLangOpen] = useState(false);
  //   تحديد ما إذا كانت قائمة العملات مفتوحة
  const [currencyOpen, setCurrencyOpen] = useState(false);

  //   لاستخدامها لاحقًا في معرفة هل تم الضغط خارج العنصر لإغلاق القائمة.
  const langRef = useRef(null);
  const currencyRef = useRef(null);

  // إغلاق عند النقر خارج القائمة
  /* 
عند الضغط خارج قائمة اللغة أو العملة يتم إغلاقها.

يستخدم useRef لتحديد ما إذا كان الضغط خارج العنصر
*/
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
    <div className="border-b border-[#E3E4E6] text-[#3E445A] flex flex-col md:flex-row items-center justify-between gap-2 md:h-[39px] py-4 ">
      <div className="container mx-auto px-4 h-full text-xs flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left Side */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          <a href="#" className="hover:text-[#35AFA0]">
            About Us
          </a>
          <a href="#" className="hover:text-[#35AFA0]">
            Compare
          </a>
          <Link to="/wishlist" className="hover:text-[#35AFA0]">
            Wishlist
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex flex-wrap justify-center md:justify-end gap-3 text-center md:text-right">
          <p className="flex items-center">
            <img src={ico} alt="" className="mr-1" />
            100% Secure delivery without contacting the courier
          </p>
          <p className="block  border-l border-[#EDEEF5] pl-3">
            Need help? Call Us:
            <span className="font-semibold text-[#35AFA0]">+0020 500</span>
          </p>

          <div className="flex items-center gap-2 border-l border-[#EDEEF5] pl-3 ">
            {/* Language Dropdown */}
            <div className="relative" ref={langRef}>
              <button
                className="hover:text-[#35AFA0] "
                onClick={() => setLangOpen(!langOpen)}
              >
                English ▾
              </button>
              {langOpen && (
                <ul className="absolute bg-white shadow-lg border border-[#E4E5EE] rounded mt-1 w-28 z-10 text-[#3E445A]">
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

            {/* Currency Dropdown */}
            <div className="relative" ref={currencyRef}>
              <button
                className="hover:text-[#35AFA0] "
                onClick={() => setCurrencyOpen(!currencyOpen)}
              >
                USD ▾
              </button>
              {currencyOpen && (
                <ul className="absolute bg-white shadow-lg border border-[#E4E5EE] rounded mt-1 w-20 z-10 text-[#3E445A]">
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
