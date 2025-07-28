
import CategoryFilter from "./filters/CategoryFilter";
// import PriceFilter from "./filters/PriceFilter";
import BrandFilter from "./filters/BrandFilter";
// import AvailabilityFilter from "./filters/AvailabilityFilter";
import sidebanner from "../../assets/image.png"


const FiltersSidebar = ({selectedCategorys, selectedBrands, setSelectedCategorys, setSelectedBrands}) => {

    return (
        <div className="flex flex-col gap-4  ">
            <CategoryFilter selectedCategorys={selectedCategorys} setSelectedCategorys={setSelectedCategorys}/>
            <BrandFilter selectedBrands={selectedBrands} setSelectedBrands={setSelectedBrands}/>
            <img src={sidebanner} alt="sidebanner" className="w-full h-full object-cover" />
        </div>
    )

}

export default FiltersSidebar;