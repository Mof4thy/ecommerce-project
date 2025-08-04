// RecentPostItem.jsx
import React from "react";

export default function RecentPostItem({ post }) {
  return (
    <div className="flex gap-4 items-center">
      <img
        src={post.image}
        alt={post.title}
        className="w-16 h-16 object-cover rounded"
      />
      <div>
        <h4 className="text-sm font-semibold text-gray-800">{post.title}</h4>
        <p className="text-xs text-gray-500">{post.date}</p>
      </div>
    </div>
  );
}
