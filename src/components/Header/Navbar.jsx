import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { TbMeat } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineBakeryDining } from "react-icons/md";
import { FiCoffee } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import { TbLogout } from "react-icons/tb";
import { HiMiniUserCircle } from "react-icons/hi2";

import {
  LuCoffee,
  LuCookie,
  LuSandwich,
  LuEggFried,
  LuSnowflake,
  LuApple,
  LuShoppingBasket,
  LuDrumstick,
  LuBadgePercent,
  LuStar,
  LuTruck,
} from "react-icons/lu";

import logo from "../../assets/Link - Bacola Store.jpg";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [openuser, setOpenUSer] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const cartRef = useRef();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // إغلاق القائمة عند الضغط خارجها
 

  //  لينكات الناف بار
  const categories = [
    { name: "Beverages", icon: <LuCoffee /> },
    { name: "Biscuits & Snacks", icon: <LuCookie /> },
    { name: "Breads & Bakery", icon: <LuSandwich /> },
    { name: "Breakfast & Dairy", icon: <LuEggFried /> },
    { name: "Frozen Foods", icon: <LuSnowflake /> },
    { name: "Fruits & Vegetables", icon: <LuApple /> },
    { name: "Grocery & Staples", icon: <LuShoppingBasket /> },
    { name: "Meats & Seafood", icon: <LuDrumstick /> },
    { name: "Value of the Day", icon: <LuBadgePercent /> },
    { name: "Top 100 Offers", icon: <LuStar /> },
    { name: "New Arrivals", icon: <LuTruck /> },
  ];

  const cartItems = [
    // {
    //   id: 1,
    //   name: "Apple",
    //   price: 10,
    //   qty: 2,
    //   image: logo,
    // },
    // {
    //   id: 2,
    //   name: "Banana",
    //   price: 5,
    //   qty: 3,
    //   image: logo,
    // },
  ];
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  // Sign In هل يوجد توكن لو موجود يبق كده ف حاله اللوجن لو مش موجود يبقي هيتغير الايقون لل
  const isAuthenticated = !!localStorage.getItem("token");

 useEffect(() => {
  const handler = (e) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target)
    ) {
      setOpenUSer(false);
    }

    if (
      cartRef.current &&
      !cartRef.current.contains(e.target)
    ) {
      setOpenCart(false);
    }
  };

  document.addEventListener("mousedown", handler);
  return () => document.removeEventListener("mousedown", handler);
}, []);


  return (
    <>
      {/* Start Header-search */}
      <div className="container mx-auto p-4 ">
        {/* DESKTOP Layout */}
        <div className="hidden md:flex flex-wrap items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center h-14 mr-20">
            <img src={logo} alt="Logo" className="h-full w-auto" />
          </Link>

          {/* Search Bar */}
          <div className="flex-1 mx-4 bg-[#F3F4F7] rounded-lg flex items-center px-3">
            <input
              type="text"
              placeholder="Search for Products, fruit, meat, eggs .etc..."
              className="w-full pr-3 h-12 bg-transparent border-none focus:outline-none"
            />
            <button>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-gray-600 text-lg"
              />
            </button>
          </div>

          {/* Icons */}
          <div className="relative mr-4" ref={menuRef}>
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => setOpenUSer(!openuser)}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-gray-600 text-xl"
                  />
                </button>

                {openuser && (
                  <div className="absolute right-0 mt-2 w-35 bg-white border border-gray-400 z-100">
                    <div className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2 border-b border-gray-300">
                      <HiMiniUserCircle size={20} />
                      name
                    </div>
                    <Link
                      to="/profile"
                      onMouseDown={(e) => {
                        e.stopPropagation(); 
                        setOpenUSer(false);
                      }}
                      className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                    >
                      <LuUserRound size={20} />
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        setOpenUSer(false);
                        handleLogout();
                      }}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                    >
                      <TbLogout size={20} />
                      Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 rounded-md bg-[#35AFA0] text-white font-semibold hover:bg-[#2e9c90] transition duration-200"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Cart Icon with Dropdown */}
          <div
            className="flex items-center relative"
            ref={cartRef}
            onClick={() => setOpenCart(!openCart)}
          >
            <div className="hidden sm:block mr-2 cursor-pointer">
              ${subtotal.toFixed(2)}
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFF1EE] cursor-pointer relative">
              <FontAwesomeIcon
                icon={faBasketShopping}
                className="text-[#EA2B0F] text-xl"
              />
              <span className="absolute -top-2 -right-2 bg-[#EA2B0F] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            </div>

            {openCart && (
              <div className="absolute right-0 top-14 w-80 bg-white border border-gray-300 z-50 shadow-lg p-3">
                {cartItems.length === 0 ? (
                  <div className="text-center p-5">
                    <img
                      src={logo}
                      alt=""
                      className="w-12 h-12 mx-auto object-cover"
                    />
                    <p className="text-gray-500 text-center py-4">
                      No products in the cart.
                    </p>
                  </div>
                ) : (
                  <>
                    <ul className="divide-y divide-gray-100 max-h-64 overflow-y-auto">
                      {cartItems.map((item) => (
                        <li
                          key={item.id}
                          className="flex gap-3 py-2 items-center"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 mr-2 object-cover"
                          />
                          <div className="flex-1">
                            <p className="text-sm">{item.name}</p>
                            <p className="text-xs text-gray-600">
                              {item.qty} ×{" "}
                              <span className="text-[#EA2B0F]">
                                ${item.price.toFixed(2)}
                              </span>
                            </p>
                          </div>
                          <p className="text-sm font-normal">
                            ${(item.qty * item.price).toFixed(2)}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 border-t border-gray-400 ">
                      <p className="text-sm flex justify-between py-5">
                        <span className="text-[13px] text-[#71778E] font-normal">
                          Subtotal:
                        </span>
                        <span className="text-[#EA2B0F] text-base">
                          ${subtotal.toFixed(2)}
                        </span>
                      </p>
                      <div className="flex flex-col gap-2">
                        <Link
                          to="/cart"
                          onClick={() => setOpenCart(false)}
                          className="w-full bg-gray-100 hover:bg-gray-200 text-sm text-center py-2"
                        >
                          View Cart
                        </Link>
                        <Link
                          to="/checkout"
                          onClick={() => setOpenCart(false)}
                          className="w-full bg-[#EA2B0F]  hover:bg-[#f75c3c] text-white text-sm text-center py-2"
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE Layout */}
      <div className="md:hidden flex flex-col gap-2">
        {/* Logo */}
        <Link to="/" className="flex justify-center items-center mb-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Menu + Search + Icons */}
        <div className="flex items-center justify-between gap-2 px-4">
          {/* Mobile Menu Button */}
          <button
            className="text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Search */}
          <div className="flex-1 bg-[#F3F4F7] rounded-lg flex items-center px-3">
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-10 bg-transparent border-none focus:outline-none text-sm"
            />
            <button>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-gray-600 text-lg"
              />
            </button>
          </div>

          {/* User Menu */}
          {/* Icons */}
          <div className="relative " ref={menuRef}>
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => setOpenUSer(!openuser)}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-gray-600 text-xl"
                  />
                </button>

                {openuser && (
                  <div className="absolute right-0 mt-2 w-35 bg-white border border-gray-400 z-100">
                    <div className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2 border-b border-gray-300">
                      <HiMiniUserCircle size={20} />
                      name
                    </div>
                    <div
                      to="/profile"
                      onClick={() => setOpenUSer(false)}
                      className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                    >
                      <LuUserRound size={20} />
                      Profile
                    </div>
                    <button
                      onClick={() => {
                        setOpenUSer(false);
                        handleLogout();
                      }}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                    >
                      <TbLogout size={20} />
                      Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 rounded-md bg-[#35AFA0] text-white font-semibold hover:bg-[#2e9c90] transition duration-200"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Cart */}
          <div
            className="flex items-center relative"
            ref={cartRef}
            onClick={() => setOpenCart(!openCart)}
          >
            <div className="hidden sm:block mr-2 cursor-pointer">
              ${subtotal.toFixed(2)}
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFF1EE] cursor-pointer relative">
              <FontAwesomeIcon
                icon={faBasketShopping}
                className="text-[#EA2B0F] text-xl"
              />
              <span className="absolute -top-2 -right-2 bg-[#EA2B0F] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            </div>

            {openCart && (
              <div className="absolute right-0 top-14 w-80 bg-white border border-gray-300 z-50 shadow-lg p-3">
                {cartItems.length === 0 ? (
                  <div className="text-center p-5">
                    <img
                      src={logo}
                      alt=""
                      className="w-12 h-12 mx-auto object-cover"
                    />
                    <p className="text-gray-500 text-center py-4">
                      No products in the cart.
                    </p>
                  </div>
                ) : (
                  <>
                    <ul className="divide-y divide-gray-100 max-h-64 overflow-y-auto">
                      {cartItems.map((item) => (
                        <li
                          key={item.id}
                          className="flex gap-3 py-2 items-center"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 mr-2 object-cover"
                          />
                          <div className="flex-1">
                            <p className="text-sm">{item.name}</p>
                            <p className="text-xs text-gray-600">
                              {item.qty} ×{" "}
                              <span className="text-[#EA2B0F]">
                                ${item.price.toFixed(2)}
                              </span>
                            </p>
                          </div>
                          <p className="text-sm font-normal">
                            ${(item.qty * item.price).toFixed(2)}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 border-t border-gray-400 ">
                      <p className="text-sm flex justify-between py-5">
                        <span className="text-[13px] text-[#71778E] font-normal">
                          Subtotal:
                        </span>
                        <span className="text-[#EA2B0F] text-base">
                          ${subtotal.toFixed(2)}
                        </span>
                      </p>
                      <div className="flex flex-col gap-2">
                        <Link
                          to="/cart"
                          onClick={() => setOpenCart(false)}
                          className="w-full bg-gray-100 hover:bg-gray-200 text-sm text-center py-2"
                        >
                          View Cart
                        </Link>
                        <Link
                          to="/checkout"
                          onClick={() => setOpenCart(false)}
                          className="w-full bg-[#EA2B0F]  hover:bg-[#f75c3c] text-white text-sm text-center py-2"
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* End Header-search */}

      {/* start Route-link */}
      <nav className="bg-white shadow-sm px-4">
        <div className="container mx-auto py-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* ALL CATEGORIES */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 bg-[#35AFA0] text-white font-semibold p-3 rounded-full text-sm w-full md:w-auto"
            >
              <IoIosMenu size={20} />
              <span className="flex-1 text-center">ALL CATEGORIES</span>
              <FaChevronDown
                className={`transition-transform duration-200 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown */}
            {open && (
              <ul className="absolute z-10 mt-10 pt-5 w-64 bg-white shadow-lg border border-gray-200">
                {categories.map((cat, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 text-[13px] text-[#3E445A] hover:bg-[#F0FAFF] hover:text-[#35AFA0] cursor-pointer"
                  >
                    <span className="text-xl text-[#3E445A] opacity-50 ">
                      {cat.icon}
                    </span>
                    <span>{cat.name}</span>
                  </li>
                ))}

                {/* الخط الفاصل */}
                <hr className="my-2 border-gray-200" />

                {/* العناصر الثلاثة الأخيرة بدون أيقونات */}

                {["Value of the Day", "Top 100 Offers", "New Arrivals"].map(
                  (label, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 text-[13px] text-[#3E445A] hover:bg-[#F0FAFF] hover:text-[#35AFA0] cursor-pointer"
                    >
                      {label}
                    </li>
                  )
                )}
              </ul>
            )}
          </div>

          {/* Navigation Links */}
          <ul
            className={`${
              mobileMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-start md:items-center gap-4 text-[15px] font-semibold text-[#3E445A] w-full md:w-auto`}
          >
            <li>
              <Link
                to="/"
                className="text-[#35AFA0] bg-[#F0FAFF] p-2 rounded-full"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="p-2 rounded-full hover:bg-[#F0FAFF] hover:text-[#35AFA0]"
              >
                SHOP
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center gap-2 p-2 rounded-full hover:bg-[#F0FAFF] hover:text-[#35AFA0]"
              >
                <TbMeat size={20} /> Meats & Seafood
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center gap-2 p-2 rounded-full hover:bg-[#F0FAFF] hover:text-[#35AFA0]"
              >
                <MdOutlineBakeryDining size={20} /> Bakery
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center gap-2 p-2 rounded-full hover:bg-[#F0FAFF] hover:text-[#35AFA0]"
              >
                <FiCoffee size={20} /> Beverages
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="p-2 rounded-full hover:bg-[#F0FAFF] hover:text-[#35AFA0]"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="p-2 rounded-full hover:bg-[#F0FAFF] hover:text-[#35AFA0]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* end Route-link */}
    </>
  );
}
