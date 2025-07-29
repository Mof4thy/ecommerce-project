import React from "react";

export default function Links() {
  return (
    <div className="bg-[#F7F8FD]">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-[#202435] p-4 py-20">
        {[...Array(5)].map((_, i) => (
          <div key={i}>
            <h4 className="font-semibold text-[15px] mb-3">
              Fruit & Vegetables
            </h4>
            <ul className="text-[13px] text-[#71778E] font-normal space-y-1">
              <li>
                <a href="#">Fresh Vegetables</a>
              </li>
              <li>
                <a href="#">Herbs & Seasonings</a>
              </li>
              <li>
                <a href="#">Fresh Fruits</a>
              </li>
              <li>
                <a href="#">Cuts & Sprouts</a>
              </li>
              <li>
                <a href="#">Exotic Fruits & Veggies</a>
              </li>
              <li>
                <a href="#">Packaged Produce</a>
              </li>
              <li>
                <a href="#">Party Trays</a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
