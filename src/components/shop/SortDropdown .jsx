


const SortDropdown = () => {
    return (
        <div className="flex justify-between items-center bg-gray-200 py-2 px-4 rounded-md">
            <h1 className="text-md font-semibold">62 Products</h1>
            <div className="flex gap-1 items-center">
                <h2 className="text-md font-light">Sort by:</h2>
                <select className="bg-gray-200 p-2 rounded-md outline-none border-none" name="" id="">
                    <option value="1">Newest</option>
                    <option value="2">Oldest</option>
                    <option value="3">Price: Low to High</option>
                    <option value="4">Price: High to Low</option>
                    <option value="5">Name: A to Z</option>
                    <option value="6">Name: Z to A</option>
                </select>
            </div>
        </div>
    )
}

export default SortDropdown;