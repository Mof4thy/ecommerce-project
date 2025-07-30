import Inputcheckbox from "./Inputcheckbox";
import React from "react";

const BrandFilter = React.memo(({selectedBrands, setSelectedBrands, brands}) => {

    const handleBrandToggle = (brandName) => {
        if (selectedBrands.includes(brandName)) {
          setSelectedBrands(selectedBrands.filter((b) => b !== brandName));
        } else {
          setSelectedBrands([...selectedBrands, brandName]);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-lg font-semibold">Brands</h1>

            <div className="flex flex-col gap-2">
                {brands.map((brand, index)=>(
                    <Inputcheckbox key={index} name={brand} id={index} onChange={() => handleBrandToggle(brand)} />
                ))}
            </div>
        </div>
    )
})

export default BrandFilter;