import React from "react";
import Inputcheckbox from "./Inputcheckbox";

const CategoryFilter = React.memo(({selectedCategorys, setSelectedCategorys, categories}) => {


    
    const handleCategoryToggle = (categoryName) => {
        if (selectedCategorys.includes(categoryName)) {
          setSelectedCategorys(selectedCategorys.filter((c) => c !== categoryName));
        } else {
          setSelectedCategorys([...selectedCategorys, categoryName]);
        }
      };



    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-lg font-semibold">Product Categories</h1>

            <div className="flex flex-col gap-2">

                {categories.map((category, index)=>(
                    <Inputcheckbox key={index} name={category} id={index} onChange={() => handleCategoryToggle(category)} />
                ))}
            </div>


        </div>
    )
})

export default CategoryFilter;