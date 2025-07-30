import  FiltersSidebar  from "../components/shop/FiltersSidebar";
import ShopBanner from "../components/shop/ShopBanner";
import SortDropdown from "../components/shop/SortDropdown ";
import ProductGrid from "../components/shop/ProductGrid ";
import Pagination from "../components/shop/Pagination ";
import { useState, useEffect, useMemo } from "react";
import { useProducts } from "../hooks/useProducts";

const Shop = () => {

    // products data from the server (cached)
    const { data: products, isLoading, error } = useProducts();



    // filtered products
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



    const categories = useMemo(()=>{
        if(!products) return [];
        return [...new Set(products.map(product => product.category))];
    }, [products]);

    const brands = useMemo(()=>{
        if(!products) return [];
        return [...new Set(products.map(product => product.brand))];
    }, [products]);


    const filteredAndSortedProducts = useMemo(() => {
        if (!products) return [];
        
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
        
        return sorted;
    }, [products, selectedCategorys, selectedBrands, sortBy]);

    

     // Handle pagination: calculate which products to show on current page
    useEffect(() => {
        
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const currentProducts = filteredAndSortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
        setVisibleProducts(currentProducts);

        // total pages
        const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage);
        setTotalPages(totalPages);
        
        // Reset to first page when filters change
        if (currentPage > totalPages && totalPages > 0) {
            setCurrentPage(1);
        }
    }, [filteredAndSortedProducts, currentPage]);


    // Loading state
    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-lg">Loading products...</div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-red-500 text-lg">
                    Error loading products: {error.message}
                </div>
            </div>
        );
    }

    return (    
        <div>
            <div className="flex flex-col lg:flex-row gap-8">

                <aside  className=" w-full lg:w-1/5">
                    <FiltersSidebar 
                        selectedCategorys={selectedCategorys} 
                        selectedBrands={selectedBrands} 
                        setSelectedCategorys={setSelectedCategorys} 
                        setSelectedBrands={setSelectedBrands}
                        categories={categories}
                        brands={brands}
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

