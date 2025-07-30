import banner from "../../assets/shop-banner.jpg.png"
import React from "react";

const ShopBanner = React.memo(() => {

    return (    
        <div className="flex flex-col gap-4 relative ">
            <img src={banner} alt="banner" className="w-full h-auto object-cover" />

            <div className="absolute flex    justify-center items-center w-full h-full ">
                <div className="flex flex-col items-start text-left">
                    <h2 className="text-black text-2xl font-extralight">Organic Meals Prepared</h2>
                    <h2 className="text-black text-3xl font-semibold">Delivered to <span className="text-[#00B853]">your Home</span></h2>
                    <h2 className="text-gray-500 text-md font-extralight ">Fully prepared & delivered nationwide.</h2>
                </div>
            </div>
        </div>
    )


})

export default ShopBanner;