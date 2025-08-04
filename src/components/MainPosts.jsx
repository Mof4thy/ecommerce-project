import React from "react";
import blog1img from '../images/blog1.PNG'
import blog2img from '../images/blog2.PNG'

export default function MainPosts() {
  const mainPosts = [
    {
      id: 1,
      title: "But I must explain to you how all this mistaken idea",

      image: blog1img,

      date: "12 June 2024",
      author: "Sara ElDeeb",
      category: "category",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut lectus dolor...",
    },
    {
      id: 2,
      title: "The Problem With Typefaces on the Web",

      image: blog2img,

      date: "27 June 2024",
      author: "Sara ElDeeb",
      category: "category",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut lectus dolor...",
    },
  ];

  return (
    <div className="md:col-span-2 space-y-12">
      {mainPosts.map((post) => (
        <div key={post.id}>
          <img
            src={post.image}
            alt="blog"
            className="rounded-lg w-full mb-4"
          />
          <span className="text-xs uppercase text-primaryGreen font-semibold">
            {post.category}
          </span>
          <h2 className="text-2xl font-bold mt-2">{post.title}</h2>
          <p className="text-sm text-gray-500 mt-1">
            {post.date} • {post.author}
          </p>
          <p className="text-gray-600 mt-3">{post.summary}</p>
        </div>
      ))}
    </div>
  );
}
