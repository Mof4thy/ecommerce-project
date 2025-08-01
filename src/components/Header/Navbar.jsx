import React, { useContext, useEffect, useRef, useState } from "react";
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
import { UserContext } from "../../context/UserContext";
import { MdDelete } from "react-icons/md";

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
import emptyCart from "../../assets/empty-cart.png";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { useCart } from "../../hooks/UseCart";

export default function Navbar() {
  const { logout } = useContext(UserContext);
  const { cart, updateCart, removeFromCart } = useCart();
  const { user, isLoading } = useUser();

  const [openuser, setOpenUSer] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const cartRef = useRef();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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

 


  // Sign In هل يوجد توكن لو موجود يبق كده ف حاله اللوجن لو مش موجود يبقي هيتغير الايقون لل
  const isAuthenticated = !!localStorage.getItem("token");

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenUSer(false);
      }

      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setOpenCart(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);


  // [1]  بيانات الكارت متخزنه ف متغير 
    const items = cart?.cart?.items ?? [];

   // [2]  لحساب اجمالي السعر لكل البرودكت المضافه
 const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);


 // زيادة الكمية
const increaseQty = (id) => {
  const item = items.find((item) => item._id === id);
 
  
  if (item) {
    updateCart(item.product.id, item.quantity + 1);
    
  }
};

// تقليل الكمية
const decreaseQty = (id) => {
  const item = items.find((item) => item._id === id);
  if (item && item.quantity > 1) {
    updateCart(item.product.id, item.quantity - 1);
  }
};

// حذف المنتج
const removeItem = (id) => {
   const item = items.find((item) => item._id === id);
  removeFromCart(item.product.id);
};

  return (
    <>
      {/* Start Header-search */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between py-4 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center h-12 shrink-0">
            <img src={logo} alt="Logo" className="h-full w-auto" />
          </Link>

          {/* Search Bar */}
          <div className="flex-1 min-w-0 bg-[#F3F4F7] rounded-lg flex items-center px-3">
            <input
              type="text"
              placeholder="Search for Products, fruit, meat, eggs .etc..."
              className="w-full h-10 bg-transparent border-none focus:outline-none text-sm"
            />
            <button>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-gray-600 text-lg"
              />
            </button>
          </div>

          {/* User + Cart */}
          <div className="flex items-center gap-3">
            <div className="relative" ref={menuRef}>
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
                    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-400 z-50">
                      {!isLoading && user && (
                        <div className="w-full px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2 border-b border-gray-200">
                          <HiMiniUserCircle size={20} />
                          {user.name}
                        </div>
                      )}
                      <Link
                        to="/profile"
                        onClick={() => setOpenUSer(false)}
                        className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                      >
                        <LuUserRound size={20} /> Profile
                      </Link>
                      <button
                        onClick={() => {
                          setOpenUSer(false);
                          handleLogout();
                        }}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                      >
                        <TbLogout size={20} /> Logout
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-md bg-[#35AFA0] text-white font-semibold hover:bg-[#2e9c90]"
                >
                  Sign In
                </Link>
              )}
            </div>

            {/* Cart */}
            <div
              className="relative flex items-center"
              ref={cartRef}
              onClick={() => setOpenCart(!openCart)}
            >
              <p className="mr-4 cursor-pointer"> ${subtotal.toFixed(2)}</p>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFF1EE] cursor-pointer relative">
                <FontAwesomeIcon
                  icon={faBasketShopping}
                  className="text-[#EA2B0F] text-xl"
                />
                <span className="absolute -top-2 -right-2 bg-[#EA2B0F] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {items.length || 0}
                </span>
              </div>
              {openCart && (
                <div
                  className="absolute right-0 top-14 w-[90vw] sm:w-80 bg-white border border-gray-300 z-50 shadow-lg p-3"
                  onClick={(e) => e.stopPropagation()}
                >
                  {items.length == 0 ? (
                    <div className="text-center p-5">
                      <img
                        src={emptyCart}
                        alt="emptyCart"
                        className="w-20 h-20 mx-auto object-cover"
                      />
                      <p className="text-gray-600 font-[500] py-4">
                        No products in the cart.
                      </p>
                    </div>
                  ) : (
                    <>
                      <ul className="divide-y divide-gray-100 max-h-64 overflow-y-auto">
                          {items.map((item,index) => (
                          <li
                            key={index}
                            className="flex gap-4 items-center py-3 border-b last:border-none"
                          >
                            {/* صورة المنتج */}
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-14 h-14 object-cover rounded border border-gray-200"
                            />

                            {/* معلومات المنتج + التحكم */}
                            <div className="flex-1">
                              {/* اسم المنتج */}
                              <p className="text-sm font-semibold text-gray-800">
                                {item.product.name}
                              </p>

                              {/* السعر والكمية */}
                              <div className="flex items-center mt-1">
                                {/* التحكم في الكمية */}
                                <div className="flex items-center gap-2 mr-4">
                                  <button
                                    onClick={() => decreaseQty(item._id)}
                                    className="w-6 h-6 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-sm font-bold"
                                  >
                                    -
                                  </button>
                                  <span className="text-sm text-gray-700">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => increaseQty(item._id)}
                                    className="w-6 h-6 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-sm font-bold"
                                  >
                                    +
                                  </button>
                                </div>

                                {/* السعر الفردي */}
                                <span className="text-sm text-[#EA2B0F] font-medium">
                                  ${item.product.price.toFixed(2)}
                                </span>
                              </div>
                            </div>

                            {/* الإجمالي وزر الحذف */}
                            <div className="flex flex-col items-end gap-2">
                              <button
                                onClick={() => removeItem(item._id)}
                                className="text-gray-400 hover:text-red-500"
                                title="Remove"
                              >
                                <MdDelete size={20} />
                              </button>
                              <span className="text-sm font-semibold text-gray-800">
                                ${(item.quantity * item.product.price).toFixed(2)}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 border-t border-gray-400 pt-3">
                        <p className="text-sm flex justify-between">
                          <span className="text-[#71778E]">Subtotal:</span>
                          <span className="text-[#EA2B0F] font-semibold">
                            ${subtotal.toFixed(2)}
                          </span>
                        </p>
                        <div className="flex flex-col gap-2 mt-3">
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
                            className="w-full bg-[#EA2B0F] hover:bg-[#f75c3c] text-white text-sm text-center py-2"
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
      </div>
      {/* End Header-search */}

      <nav className="bg-white shadow-sm px-4">
        <div className="container mx-auto py-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Line with Categories & Hamburger */}
          <div className="flex items-center justify-between md:justify-start md:gap-6 w-full md:w-auto">
            {/* ALL CATEGORIES */}
            <div className="relative w-full md:w-auto">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 bg-[#35AFA0] text-white font-semibold px-4 py-3 rounded-full text-sm md:text-base w-full md:w-auto"
              >
                <IoIosMenu size={20} />
                <span className="flex-1 text-center whitespace-nowrap">
                  ALL CATEGORIES
                </span>
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
                      <span className="text-xl text-[#3E445A] opacity-50">
                        {cat.icon}
                      </span>
                      <span>{cat.name}</span>
                    </li>
                  ))}
                  <hr className="my-2 border-gray-200" />
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

            {/* Hamburger (mobile only) */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#35AFA0] text-2xl p-2 focus:outline-none"
              >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <ul
            className={`${
              mobileMenuOpen ? "flex" : "hidden"
            } md:flex md:flex-wrap flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 md:ml-[70px] text-[15px] font-semibold text-[#3E445A] 
  ${
    mobileMenuOpen
      ? "w-full left-0 right-0 top-full bg-white shadow-md border-t border-gray-200 z-20 px-4 py-2"
      : ""
  } md:static md:bg-transparent md:shadow-none md:border-none`}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block w-full bg-[#F0FAFF] text-[#35AFA0] p-2 rounded-md"
                    : "block w-full p-2 rounded-md hover:bg-[#F0FAFF] hover:text-[#35AFA0]"
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive
                    ? "block w-full bg-[#F0FAFF] text-[#35AFA0] p-2 rounded-md"
                    : "block w-full p-2 rounded-md hover:bg-[#F0FAFF] hover:text-[#35AFA0]"
                }
              >
                SHOP
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Meats&Seafood"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-2 p-2 rounded-md bg-[#F0FAFF] text-[#35AFA0]"
                    : "flex items-center gap-2 p-2 rounded-md hover:bg-[#F0FAFF] hover:text-[#35AFA0]"
                }
              >
                <TbMeat size={20} /> Meats & Seafood
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bekery"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-2 p-2 rounded-md bg-[#F0FAFF] text-[#35AFA0]"
                    : "flex items-center gap-2 p-2 rounded-md hover:bg-[#F0FAFF] hover:text-[#35AFA0]"
                }
              >
                <MdOutlineBakeryDining size={20} /> Bakery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/beverages"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-2 p-2 rounded-md bg-[#F0FAFF] text-[#35AFA0]"
                    : "flex items-center gap-2 p-2 rounded-md hover:bg-[#F0FAFF] hover:text-[#35AFA0]"
                }
              >
                <FiCoffee size={20} /> Beverages
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "block w-full bg-[#F0FAFF] text-[#35AFA0] p-2 rounded-md"
                    : "block w-full p-2 rounded-md hover:bg-[#F0FAFF] hover:text-[#35AFA0]"
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "block w-full bg-[#F0FAFF] text-[#35AFA0] p-2 rounded-md"
                    : "block w-full p-2 rounded-md hover:bg-[#F0FAFF] hover:text-[#35AFA0]"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
