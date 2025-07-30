import React from 'react'
import img from "../../assets/coupon.png.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Emailsubscription () {
  return (
   <div className="bg-[#35AFA0]">
     <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-stretch gap-6 px-4 py-10 md:py-0 min-h-[300px]">
       {/* Left Section */}
       <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
         <p className="opacity-50 text-white">
           <span className="underline">$20 discount</span> for your first order
         </p>
         <p className="text-[22px] md:text-[26px] font-semibold text-white mt-2">
           Join our newsletter and get...
         </p>
         <p className="text-sm opacity-70 text-white mt-1">
           Join our email subscription now to get updates <br className="hidden md:block" />
           on promotions and coupons.
         </p>
   
         {/* Form */}
         <form className="w-full max-w-md mx-auto md:mx-0 mt-6">
           <div className="flex border border-[#E4E5EE] bg-white rounded overflow-hidden p-1">
             <div className="relative flex-grow">
               <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                 <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
               </span>
               <input
                 type="email"
                 placeholder="Enter your email"
                 className="pl-10 pr-4 w-full h-[40px] text-gray-700 focus:outline-none"
               />
             </div>
             <button
               type="submit"
               className="bg-[#35AFA0] text-white font-semibold hover:bg-teal-600 transition-all duration-300 px-4 rounded-sm"
             >
               Subscribe
             </button>
           </div>
         </form>
       </div>
   
       {/* Right Section */}
       <div className="w-full md:w-1/2 flex justify-center md:justify-end items-end">
         <img
           src={img}
           alt="coupon"
           className="object-contain h-auto max-h-[200px] md:max-h-[250px]"
         />
       </div>
     </div>
   </div>
  )
}
