
import CategoryFilter from "./filters/CategoryFilter";
// import PriceFilter from "./filters/PriceFilter";
import BrandFilter from "./filters/BrandFilter";
// import AvailabilityFilter from "./filters/AvailabilityFilter";
import sidebanner from "../../assets/image.png"
import React from "react";



const FiltersSidebar = React.memo(({selectedCategorys, selectedBrands, setSelectedCategorys, setSelectedBrands, categories, brands}) => {

    return (
        <div className="flex flex-col gap-4  ">
            <CategoryFilter selectedCategorys={selectedCategorys} setSelectedCategorys={setSelectedCategorys} categories={categories}/>
            <BrandFilter selectedBrands={selectedBrands} setSelectedBrands={setSelectedBrands} brands={brands}/>
            <img src={sidebanner} alt="sidebanner" className="w-full h-full object-cover" />
        </div>
    )

})

export default FiltersSidebar;