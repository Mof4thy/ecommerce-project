import React from "react";


const SortDropdown = React.memo(( {setSortBy} ) => {
    return (
        <div className="flex justify-between items-center bg-gray-200 py-2 px-4 rounded-md">
            <h1 className="text-md font-semibold">62 Products</h1>
            <div className="flex gap-1 items-center">
                <h2 className="text-md font-light">Sort by:</h2>

                <select className="bg-gray-200 p-2 rounded-md outline-none border-none" name="" id="" onChange={(e) => setSortBy(e.target.value)}>
                    <option value="price-low-to-high">Price: Low to High</option>
                    <option value="price-high-to-low">Price: High to Low</option>
                    <option value="name-a-to-z">Name: A to Z</option>
                    <option value="name-z-to-a">Name: Z to A</option>
                </select>
            </div>
        </div>
    )
})

export default SortDropdown;