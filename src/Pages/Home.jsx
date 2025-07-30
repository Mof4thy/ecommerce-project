


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
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [img1, img2, img3];

const Card = ({ imageSrc, title, itemsCount, className = '' }) => (
  <div className={`flex flex-col items-center justify-center border border-gray-400 p-4 ${className}`}>
    {imageSrc && <img src={imageSrc} alt={title} className="mb-2 w-16 h-16 object-cover" />}
    <h5 className="text-lg font-semibold leading-tight text-center">{title}</h5>
    <p className="text-gray-700 mt-2">{itemsCount} items</p>
  </div>
);
const Card2 = ({ imageSrc, title, itemsCount, className = '' }) => (
  <div className={`flex flex-col items-center justify-center border border-gray-400 p-4 ${className}`}>
    {imageSrc && <img src={imageSrc} alt={title} className="mb-2 w-55 h-40 object-cover" />}
    <h5 className="text-lg font-semibold leading-tight text-center">{title}</h5>
    <p className="text-gray-700 mt-2">{itemsCount} items</p>
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
    <p className="text-blue-600 font-semibold text-md">${product.price}</p>
    <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">Add to Cart</button>
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
      
      <div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition duration-500"
        />

        <div className="absolute top-1/2 left-60 transform -translate-y-1/2 p-4 text-left">
          <p className="inline  text-gray-700 font-bold">EXCLUSIVE OFFER</p>
          <p className="inline bg-gradient-to-r from-emerald-300 text-green-800 px-2 py-1 rounded-full text-xl font-semibold ml-2">
            20% OFF
          </p>
          <h1 className="text-5xl font-bold text-black mt-2">Specialist in the <br/> grocery store</h1>
          <p className="text-gray-800 pt-5">Only this week. Don't miss...</p>
          <p className="inline mt-5 text-gray-700 text-sm ">From</p>
          <h1 className="inline text-red-600 text-4xl font-bold ml-2">$7.99</h1>
          <br />
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-full mt-6 hover:bg-green-600 transition">
            Shop Now
          </button>
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-75 px-3 py-1 rounded-full shadow"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-75 px-3 py-1 rounded-full shadow"
        >
          ›
        </button>
      </div>
      {/* First Section */}
      <div className="w-300 mx-auto p-4">
        <div className="grid grid-cols-5 mt-12">
          <Card title="Beverages" itemsCount={11} className="row-span-2" imageSrc={bubly} />
          <Card title="Biscuits & Snacks" itemsCount={6} imageSrc={caramel} />
          <Card title="Breads & Bakery" itemsCount={6} imageSrc={lemon} />
          <Card title="Breakfast & Diary" itemsCount={8} imageSrc={cheese}/>
          <Card title="Frozen Foods" itemsCount={7} imageSrc={haagen} />
          <Card title="Fruits & Vegetables" itemsCount={11} imageSrc={apple} />
          <Card title="Grocery & Staples" itemsCount={7} imageSrc={grocery} />
          <Card title="Household Needs" itemsCount={1} imageSrc={bleach} />
          <Card title="Meats & Seafood" itemsCount={5} imageSrc={seafood}/>
        </div>

        {/* Second Section */}
        <div className="flex mt-12 gap-6">
          <div className="w-[400px] h-[600px] p-4 border-red-700 border-2 rounded-lg ">
            <p className="text-xl mb-4">Deals of the <b>week! </b></p>
            <button className="bg-red-600 w-10 h-10 rounded-xl text-white mr-2">70</button>
            <p className="inline text-gray-950 mr-2">:</p> 
            <button className="bg-red-600 w-10 h-10 rounded-xl text-white mr-2">14</button>
            <p className="inline text-gray-950 mr-2">:</p> 
            <button className="bg-red-600 w-10 h-10 rounded-xl text-white mr-2">41</button>
            <p className="inline text-gray-950 mr-2">:</p> 
            <button className="bg-red-600 w-10 h-10 rounded-xl text-white mr-2">11</button>
            <p className="text-gray-500 mt-4">Remains until the end of the offer</p>
            <img src={chobani} alt="" />
            <p className="inline line-through mr-1 text-gray-400">$5.49</p>
            <p className="inline text-2xl text-red-600 font-bold">$4.49</p>
            <p className="text-black mt-2">Chobani Complete Vanilla Greek yogurt</p>
            <p className="text-green-500 text-xs font-bold mt-2">79 IN STOCK</p>

          </div>

          <div className="grid grid-cols-3 gap-4">
            <Card2 title="Biscuits & Snacks" itemsCount={6} imageSrc={Italian} />
            <Card2 title="Breads & Bakery" itemsCount={6} imageSrc={boom} />
            <Card2 title="Breakfast & Diary" itemsCount={8} imageSrc={chao} />
            <Card2 title="Frozen Foods" itemsCount={7} imageSrc={chispy} />
            <Card2 title="Fruits & Vegetables" itemsCount={11} imageSrc={blue} />
            <Card2 title="Grocery & Staples" itemsCount={7} imageSrc={berry}/>
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-12">BEST SELLERS</h3>
        <p className="text-gray-600 mb-6">Do not miss the current offers until the end of March</p>

        <div className="flex items-center justify-center mt-8">
          <button onClick={prevProducts} className="text-3xl mx-2 text-gray-600 hover:text-black">
            <FaArrowLeft />
          </button>

          <div className="flex overflow-hidden">
            {visibleProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <button onClick={nextProducts} className="text-3xl mx-2 text-gray-600 hover:text-black">
            <FaArrowRight />
          </button>
        </div>
        <p className="text-xl mt-12 bg-amber-100 text-center">SUPER DISCOUNT FOR YOUR 
          <h4 className="inline font-bold"> FIRST PURCHASE</h4> 
        </p>

        <div className="mt-12">
            <h3 className="text-2xl font-bold text-center">Featured Groceries</h3>
            <p className="text-gray-600 mb-6 text-center">A selection of our finest grocery items</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {gridProducts.map((product) => (
                    <div key={product.id} className="w-full p-4 bg-white shadow-lg rounded-lg flex flex-col">
                        <img src={product.thumbnail} alt={product.title} className="h-40 w-full object-cover rounded" />
                        <h3 className="text-lg font-bold mt-2 flex-grow">{product.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                        <div className="flex items-center my-2">
                            {Array.from({ length: 5 }, (_, i) => (
                                <FaStar key={i} className={i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'} />
                            ))}
                        </div>
                        <p className="text-blue-600 font-semibold text-md">${product.price}</p>
                        <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-12 w-full grid grid-cols-1 md:grid-cols-3 gap-4">
  <img src={img1} className="w-full h-full object-cover rounded-lg" alt="Promotional Banner 1" />
  <img src={img2} className="w-full h-full object-cover rounded-lg" alt="Promotional Banner 2" />
  <img src={img3} className="w-full h-full object-cover rounded-lg" alt="Promotional Banner 3" />
</div>

<div className="mt-12 w-full grid grid-cols-1 md:grid-cols-3 gap-4">
  <div className="w-64 text-center">
    <img src="https://via.placeholder.com/200" alt="Image 1" className="w-full h-40 object-cover rounded-lg mb-3" />
    <h3 className="text-xl font-bold mb-1">Title 1</h3>
    <p className="text-gray-600">Description 1</p>
  </div>

  <div className="w-64 text-center">
    <img src="https://via.placeholder.com/200" alt="Image 2" className="w-full h-40 object-cover rounded-lg mb-3" />
    <h3 className="text-xl font-bold mb-1">Title 2</h3>
    <p className="text-gray-600">Description 2</p>
  </div>

  <div className="w-64 text-center">
    <img src="https://via.placeholder.com/200" alt="Image 3" className="w-full h-40 object-cover rounded-lg mb-3" />
    <h3 className="text-xl font-bold mb-1">Title 3</h3>
    <p className="text-gray-600">Description 3</p>
  </div>
</div>

      </div>
    </div>
  );
};

export default Home;