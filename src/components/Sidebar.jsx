import React from "react";
import Post1img from '../images/blog1.PNG';
import Post2img from '../images/blog2.PNG';
import Post3img from '../images/post3.PNG';
import Widgetimg from '../images/widget.PNG';

import {
  FaFacebookF,
  FaTwitter,
  FaRedditAlien,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

export default function Sidebar() {
  const recentPosts = [
    {
      id: 1,
      title: "But I must explain to you how all this mistaken idea",
      image: Post1img,

    },
    {
      id: 2,
      title: "The Problem With Typefaces on the Web",

      image: Post2img,

    },
    {
      id: 3,
      title: "English Breakfast Tea With Tasty Donut Desserts",

      image: Post3img,

    },
  ];

  const tags = [
    "ecommerce",
    "food",
    "grocery",
    "kibtheme",
    "organic",
    "shop",
    "shopify",
    "store",
  ];

  return (
    <aside className="space-y-8">
      {/* Recent Posts */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-sm font-semibold border-b pb-2 mb-4">RECENT POSTS</h3>
        {recentPosts.map((post) => (
          <div key={post.id} className="flex items-center gap-3 mb-4">
            <div className="relative w-12 h-12 shrink-0">
              <img
                src={post.image}
                alt={post.title}
                className="w-12 h-12 rounded-full object-cover"
              />

              <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold border-2 border-white">

                {post.id}
              </span>
            </div>
            <p className="text-sm text-gray-800 leading-snug hover:underline cursor-pointer">
              {post.title}
            </p>
          </div>
        ))}
      </div>

      {/* Social Media */}
      <div>
        <h3 className="font-semibold text-lg mb-4">Social Media</h3>
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 bg-blue-600 text-white py-2 px-4 rounded">
            <FaFacebookF /> Facebook
          </button>
          <button className="w-full flex items-center gap-3 bg-pink-500 text-white py-2 px-4 rounded">
            <FaInstagram /> Instagram
          </button>
          <button className="w-full flex items-center gap-3 bg-sky-400 text-white py-2 px-4 rounded">
            <FaTwitter /> Twitter
          </button>
          <button className="w-full flex items-center gap-3 bg-orange-500 text-white py-2 px-4 rounded">
            <FaRedditAlien /> Reddit
          </button>
          <button className="w-full flex items-center gap-3 bg-red-500 text-white py-2 px-4 rounded">
            <FaPinterestP /> Pinterest
          </button>
        </div>
      </div>

      {/* Widget Banner */}
      <div>
        <h3 className="font-semibold text-lg mb-4">WIDGET BANNER</h3>

        <img src={Widgetimg} alt="widget" className="w-full h-[400px] rounded" />

      </div>

      {/* Tags */}
      <div>
        <h3 className="font-semibold text-lg mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2 text-sm">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-300 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
