import React from 'react'
import app from "../../assets/app-store.png.png";
import google from "../../assets/google-play.png.png";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
     <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 p-4">
        <div className="flex items-center gap-2 text-gray-800 text-lg font-semibold">
          <div className="border rounded-full border-[#E3E4E6] p-2">
            <FiPhoneCall size={20} />
          </div>
          <div>
            <h4 className="text-[20px] font-semibold">8 800 555-55</h4>
            <span className="block text-[11px] font-normal opacity-50">
              Working: 8:00 - 22:00
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="text-center text-[#202435]">
            <h6 className="text-[14px] font-semibold">
              Download App on Mobile:
            </h6>
            <p className="text-[12px] opacity-50">
              15% discount on your first purchase
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img src={google} alt="Google Play" className="h-10" />
            <img src={app} alt="App Store" className="h-10" />
          </div>
          <div className="flex items-center gap-2 text-xl text-[#35AFA0]">
            <div className="border border-[#E3E4E6] rounded-full p-2">
              <a href="#" aria-label="Facebook" className="hover:text-blue-600">
                <FaFacebookF />
              </a>
            </div>
            <div className="border border-[#E3E4E6] rounded-full p-2">
              <a href="#" aria-label="Twitter" className="hover:text-blue-400">
                <FaTwitter />
              </a>
            </div>
            <div className="border border-[#E3E4E6] rounded-full p-2">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-pink-500"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}
