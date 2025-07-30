import  FiltersSidebar  from "../components/shop/FiltersSidebar";
import ShopBanner from "../components/shop/ShopBanner";
import SortDropdown from "../components/shop/SortDropdown ";
import ProductGrid from "../components/shop/ProductGrid ";
import Pagination from "../components/shop/Pagination ";
import productsData from "../data/products";
import { useState, useEffect } from "react";


const Shop = () => {


    const [products] = useState(productsData);
    
    // filtered products
    const [filteredProducts, setFilteredProducts] = useState(productsData);
    const [selectedCategorys, setSelectedCategorys] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);

    // sort by
    const [sortBy, setSortBy] = useState("newest");

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const [totalPages, setTotalPages] = useState(1);

    // visible products
    const [visibleProducts, setVisibleProducts] = useState([]);


    useEffect(() => {
        // Step 1: Filter
        const filtered = products.filter((product) => {
            const categoryMatch = selectedCategorys.length === 0 || selectedCategorys.includes(product.category);
            const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
            return categoryMatch && brandMatch;
        });
    
        // Step 2: Sort
        const sorted = [...filtered].sort((a, b) => {
            if (sortBy === "price-low-to-high") return a.price - b.price;
            if (sortBy === "price-high-to-low") return b.price - a.price;
            if (sortBy === "name-a-to-z") return a.name.localeCompare(b.name);
            if (sortBy === "name-z-to-a") return b.name.localeCompare(a.name);
            return 0;
        });
    
        // Save full sorted list for pagination
        setFilteredProducts(sorted);
    
        // Reset to first page on filter/sort change
        setCurrentPage(1);
    }, [selectedCategorys, selectedBrands, products, sortBy]);

    

     // Handle pagination: calculate which products to show on current page
     useEffect(() => {
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
        setVisibleProducts(currentProducts);

        // total pages
        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        setTotalPages(totalPages);

    }, [filteredProducts, currentPage]);
    


    return (    
        <div>
            <div className="flex flex-col lg:flex-row gap-8">

                <aside  className=" w-full lg:w-1/5">
                    <FiltersSidebar 
                        selectedCategorys={selectedCategorys} 
                        selectedBrands={selectedBrands} 
                        setSelectedCategorys={setSelectedCategorys} 
                        setSelectedBrands={setSelectedBrands}
                        />
                </aside >

                <div className=" flex flex-col gap-6 w-full lg:w-4/5">
                    <ShopBanner/>
                    <SortDropdown setSortBy={setSortBy}/>                    
                    <ProductGrid products={visibleProducts}/>

                    {/* pagination */}
                    <Pagination
                      currentPage={currentPage} 
                      totalPages={totalPages} 
                      onPageChange={setCurrentPage}
                      />
                </div>

            </div>
        </div>
    )
}

export default Shop;

