// src/pages/Contact.jsx
import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-12 px-4 md:px-16 bg-white ">
      {/* Get in Touch */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          eveniet exercitationem laboriosam?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Location */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">

            <MapPin size={40} className="text-teal-500 mb-2 mx-auto" />


            <h4 className="font-semibold mb-1">102 Street 2714 Donovan</h4>
            <p className="text-sm text-gray-500">Lorem ipsum dolor...</p>
          </div>

          {/* Phone */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">

            <Phone size={40} className="text-teal-500 mb-2 mx-auto" />

            <h4 className="font-semibold mb-1">+02 1234 567 88</h4>
            <p className="text-sm text-gray-500">Lorem ipsum dolor...</p>
          </div>

          {/* Email */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">

            <Mail size={40} className="text-teal-500 mb-2 mx-auto" />

            <h4 className="font-semibold mb-1">info@example.com</h4>
            <p className="text-sm text-gray-500">Lorem ipsum dolor...</p>
          </div>
        </div>
      </section>

      {/* Send Us Form */}
      <section className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Send Us</h3>
        <p className="text-gray-500 mb-6">
          Contact us for all your questions and opinions...
        </p>

        <form className="space-y-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-gray-600">Name</label>
              <input type="text" className="input bg-gray-200" />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-gray-600">Email*</label>
              <input type="email" className="input bg-gray-200" />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-gray-600">Phone Number</label>
            <input type="text" className="input bg-gray-200" />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-gray-600">Your Message</label>
            <textarea rows="4" className="input bg-gray-200" />
          </div>
          <div className="text-left">
            <button
              type="submit"

              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded shadow"

            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

