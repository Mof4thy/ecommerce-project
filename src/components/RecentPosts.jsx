// RecentPosts.jsx
import React from "react";
import RecentPostItem from "./RecentPostItem";

const recentPosts = [
  {
    id: 1,
    title: "Best Summer Outfits",
    date: "July 20, 2025",
    image: "/images/post1.jpg",
  },
  {
    id: 2,
    title: "How to Choose Sunglasses",
    date: "July 18, 2025",
    image: "/images/post2.jpg",
  },
  {
    id: 3,
    title: "Makeup Trends 2025",
    date: "July 15, 2025",
    image: "/images/post3.jpg",
  },
];

export default function RecentPosts() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-900 mb-2">Recent Posts</h3>
      {recentPosts.map((post) => (
        <RecentPostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
