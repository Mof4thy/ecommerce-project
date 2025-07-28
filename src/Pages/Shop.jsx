import  FiltersSidebar  from "../components/shop/FiltersSidebar";
import ShopBanner from "../components/shop/ShopBanner";
import SortDropdown from "../components/shop/SortDropdown ";
import ProductGrid from "../components/shop/ProductGrid ";
import Pagination from "../components/shop/Pagination ";
import productsData from "../data/products";
import { useState, useEffect } from "react";


const Shop = () => {


    const [products] = useState(productsData);
    const [filteredProducts, setFilteredProducts] = useState(productsData);

    const [selectedCategorys, setSelectedCategorys] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);

    useEffect(() => {
        const filtered = products.filter((product) => {
            const categoryMatch = selectedCategorys.length === 0 || selectedCategorys.includes(product.category);
            const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
            return categoryMatch && brandMatch;
        });
        
        setFilteredProducts(filtered);
    }, [selectedCategorys, selectedBrands, products]);


    return (    
        <div className="border-2 border-gray-200 py-6 md:py-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">

                <aside  className=" w-full lg:w-1/5">
                    <FiltersSidebar selectedCategorys={selectedCategorys} selectedBrands={selectedBrands} setSelectedCategorys={setSelectedCategorys} setSelectedBrands={setSelectedBrands}/>
                </aside >

                <div className=" flex flex-col gap-6 w-full lg:w-4/5">
                    <ShopBanner/>
                    <SortDropdown/>                    
                    <ProductGrid products={filteredProducts}/>
                    <Pagination/>
                </div>

            </div>
        </div>
    )
}

export default Shop;