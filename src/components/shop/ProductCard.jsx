// import productImage from "../../assets/product-image.png";
import { Plus, Minus , Star } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { useUser } from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';

const ProductCard = React.memo(({product}) => {

    const { addToCart, updateCart, isInCart, productCartQuantity } = useCart();
    const { token } = useUser();
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

   
    useEffect(()=>{
        if(token){
            setIsLoggedIn(true);
        }
        else {
            setIsLoggedIn(false)
        }
    },[token])


    const handleAddToCart = () =>{

        if(isLoggedIn){
            addToCart(product._id);
        }
        else{
            console.log("Please login to add to cart");
        }
    }

    const handleUpdateCart = (operation) =>{
        if(isLoggedIn){
            updateCart(product._id, operation);
        }
        else{
            console.log("Please login to update cart");
        }
    }

    const gotoproductdetail = () =>{    
        navigate(`/ProductDetails/${product._id}`);
    }

    return (
        
        <div className="border border-gray-200 px-2 sm:px-4 py-3 sm:py-4 rounded-md flex flex-col gap-2 h-full w-full " >
        
            <img src={product.image} alt="product image" className="w-full h-32 sm:h-40 object-cover rounded" />

            <div className="flex flex-col gap-1 flex-grow">
                <h2 className="text-sm sm:text-lg font-semibold min-h-[40px] sm:min-h-[60px] line-clamp-2 hover:text-blue-500 cursor-pointer" onClick={gotoproductdetail}>{product.name}</h2>
                <h2 className="text-xs sm:text-sm font-semibold text-gray-500">{product.brand}</h2>
                <h4 className={`text-xs sm:text-md font-semibold ${product.inStock ? "text-[#00B853]" : "text-red-500"}`}>{product.inStock ? "In Stock" : "Out of Stock"}</h4>
                <h4 className="text-sm sm:text-md font-semibold text-red-500">${product.price}</h4>

                <div className="flex items-center gap-1 border-none outline-none">
                    {Array.from({length: product.rating}).map((_, index) => (
                        <Star key={index} size={14} className="sm:w-4 sm:h-4" fill="#FFCD00" color="#FFCD00" />
                    ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-500">({product.reviews} reviews)</p>
            </div>

            {!isLoggedIn && 
            <div className="flex py-1 sm:py-2 bg-gray-400 hover:bg-gray-500 rounded-xl sm:rounded-2xl justify-center items-center">
                <button className="text-sm sm:text-md w-full font-semibold text-white cursor-pointer" onClick={()=>{navigate('/login')}}>Login to Add to Cart</button>
            </div>}


            {!isInCart(product._id) && isLoggedIn &&
            <div className="flex py-1 sm:py-2 bg-[#35AFA0] hover:bg-green-600 rounded-xl sm:rounded-2xl justify-center items-center">
                <button className=" text-sm sm:text-md w-full font-semibold text-white cursor-pointer" onClick={handleAddToCart}>Add to Cart</button>
            </div>}

            {isInCart(product._id) && isLoggedIn &&
            <div className="flex border border-gray-200 rounded-xl sm:rounded-2xl justify-between items-center gap-1 sm:gap-2 overflow-hidden mt-auto">
                <span className="px-2 sm:px-3 py-1 sm:py-2 bg-gray-200 cursor-pointer hover:bg-gray-300 " onClick={() => handleUpdateCart("decrement")}> <Minus size={14} className="sm:w-[18px] sm:h-[18px]" /> </span>
                <span className="text-xs sm:text-sm font-bold text-black min-w-[20px] text-center"> {productCartQuantity(product._id)} </span>
                <span className="px-2 sm:px-3 py-1 sm:py-2 bg-[#FFCD00] cursor-pointer hover:bg-yellow-400 " onClick={() => handleUpdateCart("increment")}> <Plus size={14} className="sm:w-[18px] sm:h-[18px]" /> </span> 
            </div>}
        </div>
    )
})

export default ProductCard;