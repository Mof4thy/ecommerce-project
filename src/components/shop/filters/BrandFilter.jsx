import Inputcheckbox from "./Inputcheckbox";
import productsData from "../../../data/products";


const BrandFilter = ({selectedBrands, setSelectedBrands}) => {

    const brands = [...new Set(productsData.map(product => product.brand))].map((brand, index) => {
        return {
            id: index + 1,
            name: brand,
        }
    });
    
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

                {brands.map((brand)=>(
                        <Inputcheckbox key={brand.id} name={brand.name} id={brand.id} onChange={() => handleBrandToggle(brand.name)} />
                ))}
            </div>


        </div>
    )
}

export default BrandFilter;