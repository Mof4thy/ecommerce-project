import payments from "../../assets/payments.jpg.png";


import Emailsubscription from "./Emailsubscription ";
import Features from "./Features";
import Links from "./Links";
import Contact from "./Contact";

export default function Footer() {
  return (
    <footer className="text-white">
      {/* email subscription */}
      <Emailsubscription />
      {/* Features */}
      <Features />

      {/* Navigation Links */}
      <Links />

      {/* Contact  */}

      <Contact />
      {/* Copyright */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 p-4 border-t border-[#E4E5EE] text-[#9B9BB4] text-xs font-normal">
        <p className="text-center md:text-left">
          Copyright 2025 © All rights reserved by Blackrise Theme
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <ul className="flex gap-3">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Cookie</a>
            </li>
          </ul>
          <img src={payments} alt="payments" className="h-6" />
        </div>
      </div>
      
    </footer>
  );
}
