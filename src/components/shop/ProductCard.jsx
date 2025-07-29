import productImage from "../../assets/product-image.png";
import { Plus, Minus , Star } from 'lucide-react';

const ProductCard = ({product}) => {
    return (
        <div className="border border-gray-200 px-4 py-4 rounded-md flex flex-col gap-2 h-full ">
        
            <img src={productImage} alt="product" className="w-full h-auto" />
            <h1 className="text-lg font-semibold min-h-[60px] line-clamp-2">{product.name}</h1>
            <h4 className="text-md font-semibold text-[#00B853]">In Stock</h4>
            <h4 className="text-md font-semibold text-red-500">${product.price}</h4>

            <div className="flex items-center gap-1 border-none outline-none ">
                {Array.from({length: product.rating}).map((_, index) => (
                    <Star key={index} size={16} fill="#FFCD00" color="#FFCD00" />
                ))}
            </div>
            <p className="text-sm text-gray-500">({product.reviews} reviews)</p>


            {/* <div className="flex p-2 bg-[#35AFA0] rounded-2xl justify-center items-center">
                <button className="text-md font-semibold text-white">Add to Cart</button>
            </div> */}

            <div className="flex  border border-gray-200 rounded-2xl justify-between items-center gap-2 overflow-hidden">
                <span className=" px-3 py-2 bg-gray-200 "> <Minus size={18} /> </span>
                <span className="text-sm font-bold text-black "> 2 </span>
                <span className=" px-3 py-2 bg-[#FFCD00] "> < Plus size={18} /> </span> 

            </div>
        </div>
    )
}

export default ProductCard;