import Inputcheckbox from "./Inputcheckbox";
import productsData from "../../../data/products";

const CategoryFilter = ({selectedCategorys, setSelectedCategorys}) => {


    const categories = [...new Set(productsData.map(product => product.category))].map((category, index) => {
        return {
            id: `category-${index + 1}`,
            name: category,
        }
    });
    
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

                {categories.map((category)=>(
                    <Inputcheckbox key={category.id} name={category.name} id={category.id} onChange={() => handleCategoryToggle(category.name)} />
                ))}
            </div>


        </div>
    )
}

export default CategoryFilter;