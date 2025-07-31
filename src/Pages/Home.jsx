


import { useState, useEffect } from "react";
import img1 from "../images/image1.png";
import img2 from "../images/image2.png";
import img3 from "../images/image3.png";
import bubly from "../images/oil.png";
import caramel from "../images/caramel.png";
import lemon from "../images/lemon.png";
import cheese from "../images/cheese.png";
import haagen from "../images/haagen.png";
import apple from "../images/apple.png";
import grocery from "../images/grocery.png";
import bleach from "../images/bleach.png";
import seafood from "../images/seafood.png";
import chobani from "../images/chobani.jpg";
import Italian from "../images/italian.png";
import boom from "../images/boom.png";
import chao from "../images/Chao.png";
import chispy from "../images/chipsy.png";
import blue from "../images/blue.png";
import berry from "../images/berry.png";
import back1 from "../images/back1.jpg";
import back2 from "../images/back2.jpg";
import back4 from "../images/back4.png";
import back3 from "../images/back3.jpg";
import back5 from "../images/back5.jpg";
import bottle from "../images/bottle.png";
import milk from "../images/milk.png";
import iceCream from "../images/iceCream.png";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [img1, img2, img3];

const Card = ({ imageSrc, title, itemsCount, className = '' }) => (
  <div className={`flex flex-col items-center justify-center border border-gray-400 p-4 ${className}`}>
    {imageSrc && <img src={imageSrc} alt={title} className="mb-2 w-16 h-16 object-cover" />}
    <h5 className="text-lg font-semibold leading-tight text-center">{title}</h5>
    <p className="text-gray-700 mt-2">{itemsCount} items</p>
  </div>
);
const Card2 = ({ imageSrc, title, priceOld, priceNew, discount, className = '' }) => (
  <div className={`relative flex flex-col border border-gray-400 p-4 ${className}`}>
    {discount && (
      <div className="absolute top-2 left-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded">
        {discount}%
      </div>
    )}

    {imageSrc && (
      <img
        src={imageSrc}
        alt={title}
        className="mb-2 w-55 h-40 object-cover m-auto"
      />
    )}

    {/* Title */}
    <h5 className="font-semibold leading-tight text-center">{title}</h5>

    {/* In Stock */}
    <p className="text-green-600 mt-2 text-xs">IN STOCK</p>

    {/* Prices */}
    <div className="mt-1">
      <span className="line-through mr-1 text-gray-400">{priceOld}</span>
      <span className="text-red-600 font-bold">{priceNew}</span>
    </div>
  </div>
);


const ProductCard = ({ product }) => (
  <div className="w-64 p-4 bg-white shadow-lg rounded-lg mx-2 flex-shrink-0">
    <img src={product.thumbnail} alt={product.title} className="h-40 w-full object-cover rounded" />
    <h3 className="text-lg font-bold mt-2">{product.title}</h3>
    <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
    <div className="flex items-center my-2">
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar key={i} className={i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'} />
      ))}
    </div>
    <p className="text-red-600 font-semibold text-md">${product.price}</p>
    <button className=" mt-2 w-full bg-yellow-500 rounded-full text-black cursor-pointer hover:bg-amber-500 ">Add to Cart</button>
  </div>
);

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const [gridProducts, setGridProducts] = useState([]);
  const [productIndex, setProductIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        const foodCategories = ['groceries', 'fruits', 'vegetables', 'dairy', 'meat'];
        const filtered = data.products.filter(product =>
          foodCategories.includes(product.category.toLowerCase())
        );
        setProducts(filtered);

        const groceryProducts = data.products.filter(
          (product) => product.category === 'groceries'
        ).slice(0, 10);
        setGridProducts(groceryProducts);
      });
  }, []);

  const visibleProducts = products.slice(productIndex, productIndex + 5);

  const nextProducts = () => {
    if (productIndex + 5 < products.length) setProductIndex(productIndex + 5);
  };

  const prevProducts = () => {
    if (productIndex - 5 >= 0) setProductIndex(productIndex - 5);
  };

  return (
    // Main Home Component
<div className="home flex flex-col items-center justify-center bg-gray-100">
  <div className="relative w-full h-[500px] sm:h-[320px] overflow-hidden rounded-lg shadow-lg">
    <img
      src={images[currentIndex]}
      alt={`Slide ${currentIndex + 1}`}
      className="w-full h-full object-cover transition duration-500"
    />

    <div className="absolute top-1/2 left-60 sm:left-4 transform -translate-y-1/2 p-4 ml-40 w-[40%] sm:w-[90%]">
      <p className="inline text-gray-700 font-bold sm:text-xs">EXCLUSIVE OFFER</p>
      <p className="inline bg-gradient-to-r from-emerald-300 text-green-800 px-2 py-1 rounded-full text-xl sm:text-base font-semibold ml-2">
        20% OFF
      </p>
      <h1 className="text-5xl sm:text-2xl font-bold text-black mt-2 leading-snug">
        Specialist in the <br /> grocery store
      </h1>
      <p className="text-gray-800 pt-5 text-sm sm:text-xs">Only this week. Don't miss...</p>
      <p className="inline mt-5 text-gray-700 text-sm sm:text-xs">From</p>
      <h1 className="inline text-red-600 text-4xl sm:text-2xl font-bold ml-2">$7.99</h1>
      <br />
      <button className="bg-emerald-600 text-white px-4 py-2 rounded-full mt-4 w-40 cursor-pointer hover:bg-green-600 transition text-sm sm:text-xs">
        Shop Now
      </button>
    </div>

    {/* أزرار التنقل */}
    <button
      onClick={prevSlide}
      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-75 px-3 py-1 rounded-full shadow sm:text-sm"
    >
      ‹
    </button>
    <button
      onClick={nextSlide}
      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-75 px-3 py-1 rounded-full shadow sm:text-sm"
    >
      ›
    </button>
  </div>

      {/* First Section */}
<div className="w-full max-w-[1200px] mx-auto p-4">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-12">
    <Card title="Beverages" itemsCount={11} className="row-span-2" imageSrc={bubly} />
    <Card title="Biscuits & Snacks" itemsCount={6} imageSrc={caramel} />
    <Card title="Breads & Bakery" itemsCount={6} imageSrc={lemon} />
    <Card title="Breakfast & Diary" itemsCount={8} imageSrc={cheese} />
    <Card title="Frozen Foods" itemsCount={7} imageSrc={haagen} />
    <Card title="Fruits & Vegetables" itemsCount={11} imageSrc={apple} />
    <Card title="Grocery & Staples" itemsCount={7} imageSrc={grocery} />
    <Card title="Household Needs" itemsCount={1} imageSrc={bleach} />
    <Card title="Meats & Seafood" itemsCount={5} imageSrc={seafood} />
  </div>


        {/* Second Section */}
<div className="w-full px-4 py-8">
  {/* Deals of the Week + Cards */}
  <div className="flex flex-col lg:flex-row gap-6">
    
    {/* Deals of the Week Card */}
    <div className="w-full lg:w-[400px] h-auto p-4 border-red-700 border-2 rounded-lg">
      <p className="text-xl mb-4">Deals of the <b>week!</b></p>
      
      <div className="flex items-center mb-2">
        <button className="bg-red-600 w-10 h-10 rounded-xl text-white mr-2">70</button>
        <p className="inline text-gray-950 mr-2">:</p>
        <button className="bg-red-600 w-10 h-10 rounded-xl text-white mr-2">14</button>
        <p className="inline text-gray-950 mr-2">:</p>
        <button className="bg-red-600 w-10 h-10 rounded-xl text-white mr-2">41</button>
        <p className="inline text-gray-950 mr-2">:</p>
        <button className="bg-red-600 w-10 h-10 rounded-xl text-white mr-2">11</button>
      </div>

      <p className="text-gray-500 mt-2 mb-2">Remains until the end of the offer</p>
      <img src={chobani} alt="" className="w-full h-auto rounded-lg" />
      
      <div className="mt-2">
        <p className="inline line-through mr-1 text-gray-400">$5.49</p>
        <p className="inline text-2xl text-red-600 font-bold">$4.49</p>
      </div>

      <p className="text-black mt-2">Chobani Complete Vanilla Greek yogurt</p>
      <p className="text-green-500 text-xs font-bold mt-2">79 IN STOCK</p>
      <p className="text-gray-500 mt-2 text-xs text-right">
        AVAILABLE <b className="text-black text-lg">79</b>
      </p>

      <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
        <div
          className="bg-gradient-to-r from-red-600 to-yellow-500 h-3 rounded-full mt-1"
          style={{ width: '79%' }}
        ></div>
      </div>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 gap-4 flex-1">
      <Card2 title="All Natural Italian-Style Chicken Meatballs" priceOld="$9.35" priceNew="$7.25" discount="22" imageSrc={Italian} />
      <Card2 title="Angies's Boomchickapop Sweet & Salty Kettle Corn" priceOld="$4.29" priceNew="$3.29" discount={23} imageSrc={boom} />
      <Card2 title="Field Roast Chao Cheese Creamy Original" priceOld="$24.00" priceNew="$19.50" discount={19} imageSrc={chao} />
      <Card2 title="Foster farms Takeout Crispy Classic Buffalo Wings" priceNew="49.99" imageSrc={chispy} />
      <Card2 title="Blue Diaamond Almonds Lightly Salted" priceNew="$11.68" imageSrc={blue} />
      <Card2 title="Blueberries -1 Pint Package" priceOld="$4.49" priceNew="$3.99" discount={11} imageSrc={berry}/>
    </div>
  </div>
</div>


        {/* third section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
  <div className="relative">
    <img
      src={back1}
      alt="Promotional Image"
      className="w-full h-64 md:h-65 object-cover rounded-lg"
    />
    <div className="absolute top-0 left-0 w-full h-full  bg-opacity-40 rounded-lg flex items-start md:items-center justify-center md:pl-30 pt-5 md:pt-0">
      <div className="text-center px-2">
        <h3 className="text-xl font-bold text-black">Cookie and Ice Cream</h3>
        <p className="text-sm text-gray-800">Bacola Weekend Discount</p>
        <button className="mt-2 cursor-pointer bg-amber-900 text-white px-4 py-1 rounded-full hover:bg-amber-700 transition">
          Shop Now
        </button>
      </div>
    </div>
  </div>

  <div className="relative">
    <img
      src={back2}
      alt="Grocery Icon"
      className="w-full h-64 md:h-65 object-cover rounded-lg"
    />
    <div className="absolute top-0 left-0 w-full h-full rounded-lg flex items-start md:items-center justify-center md:pl-40 pt-5 md:pt-0">
      <div className="text-center px-2">
        <h3 className="text-xl font-bold text-black">Cookie and Ice Cream</h3>
        <p className="text-sm text-gray-800">Bacola Weekend Discount</p>
        <button className="mt-2 cursor-pointer bg-pink-700 text-white px-4 py-1 rounded-full hover:bg-pink-500 transition">
          Shop Now
        </button>
      </div>
    </div>
  </div>
</div>

{/* Fourth section */}
<h3 className="text-2xl font-bold mt-12 text-center">BEST SELLERS</h3>
<p className="text-gray-600 mb-6 text-center">Do not miss the current offers until the end of March</p>

<div className="flex items-center justify-center mt-8 px-2">
  <button onClick={prevProducts} className="text-2xl sm:text-3xl mx-1 sm:mx-2 text-gray-600 hover:text-black">
    <FaArrowLeft />
  </button>

  <div className="flex overflow-x-auto no-scrollbar space-x-4 sm:space-x-6">
    {visibleProducts.map((product) => (
      <div key={product.id} className="min-w-[200px] sm:min-w-[250px]">
        <ProductCard  product={product} />
      </div>
    ))}
  </div>

  <button onClick={nextProducts} className="text-2xl sm:text-3xl mx-1 sm:mx-2 text-gray-600 hover:text-black">
    <FaArrowRight />
  </button>
</div>

        {/* Fifth Section */}
<p className="text-lg mt-12 bg-orange-200 text-center px-4">
  SUPER DISCOUNT FOR YOUR{' '}
  <span className="inline font-bold"> FIRST PURCHASE</span>
</p>

<div className="mt-12 px-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    {gridProducts.map((product) => (
      <div
        key={product.id}
        className="w-full p-4 bg-white shadow-lg rounded-lg flex flex-col"
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-40 w-full object-cover rounded"
        />
        <h3 className="text-lg font-bold mt-2 flex-grow">{product.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <div className="flex items-center my-2">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              key={i}
              className={
                i < Math.round(product.rating)
                  ? 'text-yellow-400'
                  : 'text-gray-300'
              }
            />
          ))}
        </div>
        <p className="text-red-600 font-semibold text-md">${product.price}</p>
      </div>
    ))}
  </div>
</div>

<div className=" mt-12 w-full px-4 grid grid-cols-3 md:grid-cols-3 gap-4 ">
  <div className="relative">
  <img
    src={back3}
    className="w-full h-65 object-cover rounded-lg"
    alt="Promotional Banner 1"
  />
  <div className="absolute top-0 left-0 w-full h-full  bg-opacity-40 rounded-lg flex items-start mt-20 ml-10 md:pt-0">
      <div className="text-center">
        <h3 className="text-xl font-bold text-white pb-2">Natural Eggs</h3>
        <p className="text-sm text-white pb-5">Eat one every day</p>
        <button className="mt-2 bg-gray-300 text-black px-10 h-8 rounded-full hover:bg-gray-400 cursor-pointer transition">
          Shop Now
        </button>
      </div>
    </div>
    </div>
  <div className="relative">
  <img
    src={back4}
    className="w-full h-65 object-cover rounded-lg"
    alt="Promotional Banner 1"
  />
  <div className="absolute top-0 left-0 w-full h-full  bg-opacity-40 rounded-lg flex mt-10 text-black ml-5 ">
      <div className="text-center px-2">
        <h3 className="text-2xl font-bold">Taste the Best</h3>
        <p className="text-sm text-gray-500 mb-3">Shine the morning</p>
        <button className="mt-2 w-40 bg-amber-600 text-white px-4 py-1 rounded-full hover:bg-amber-700 cursor-pointer transition">
          Shop Now
        </button>
      </div>
    </div>
    </div>
    <div className="relative">
  <img
    src={back5}
    className="w-full h-65 object-cover rounded-lg"
    alt="Promotional Banner 1"
  />
  <div className="absolute top-0 left-0 w-full h-full  bg-opacity-40 rounded-lg flex items-start mt-10 lg:ml-20 sm:ml-0">
      <div className="text-center ">
        <h3 className="text-xl font-bold text-white">Cookie and Ice Cream</h3>
        <p className="text-sm text-gray-300">Bacola Weekend Discount</p>
        <button className="mt-2 bg-gradient-to-b from-amber-600 to-white text-black px-4 py-1 rounded-full hover:bg-amber-500 cursor-pointer transition">
          Shop Now
        </button>
      </div>
    </div>
    </div>
</div>

<div className="mt-12 w-full  px-4 grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
  <div className="w-full max-w-xs mx-auto">
    <img
      src={bottle}
      alt="Image 1"
      className="w-full h-65 object-cover rounded-lg mb-3"
    />
    <h3 className="text-xl font-bold mb-1">But I must explain to you how all this mistaken idea</h3>
    <p className="text-gray-600">Jan 13 2025</p>
  </div>

  <div className="w-full max-w-xs mx-auto">
    <img
      src={milk}
      alt="Image 2"
      className="w-full h-65 object-cover rounded-lg mb-3"
    />
    <h3 className="text-xl font-bold mb-1">The problem with Typefaces on the Web</h3>
    <p className="text-gray-600">Jan 13 2025</p>
  </div>

  <div className="w-full max-w-xs mx-auto text-center">
    <img
      src={iceCream}
      alt="Image 3"
      className="w-full h-65 object-cover rounded-lg mb-3"
    />
    <h3 className="text-xl font-bold mb-1">English Breakfast Tea with Tasty Donut Deserts</h3>
    <p className="text-gray-600">Jan 13 2025</p>
  </div>
</div>

      </div>
    </div>
  );
};

export default Home;