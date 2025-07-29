import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./index.css";
import PurchaseOrder from "./components/PurchaseOrder";
import Wishlist from "./components/Wishlist";
import CustomModal from "./components/CustomModal";
import Checkout from "./components/checkout";
import Shop from "./Pages/Shop";
import Layout from "./components/Layout";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

const dummy = {
  products: [
    {
      id: 1,
      name: "SkinnyPop Popcorn SkinnyPack Original",
      price: {
        min: 15.0,
        max: 25.0,
      },
      original_price: null,
      unit: "1 bag",
      description:
        "Sugar, Unbleached Enriched Flour (Wheat Flour, Niacin, Reduced Iron, Thiamine Mononitrate (Vitamin B1), Riboflavin (Vitamin B2), Folic Acid), Palm and/or Canola Oil, Cocoa Processed with Alkali, High Fructose Corn Syrup, Leavening (Baking Soda and/or Calcium Phosphate), Cornstarch, Salt…",
      tags: ["Fast Food", "Organic Corn", "Flavoured", "Dry Food"],
      available_sizes: ["small", "medium", "large"],
      on_sale: false,
      images: [
        "popcorn_main.png",
        "popcorn_thumb1.png",
        "popcorn_thumb2.png",
        "popcorn_thumb3.png",
      ],
      quantity: 1,
      buttons: {
        wishlist: true,
        share: true,
        add_to_cart: true,
      },
    },
    {
      id: 2,
      name: "Fresh Green Leaf Lettuce",
      price: {
        min: 2.64,
        max: 2.64,
      },
      original_price: 3.0,
      unit: "1 each",
      description:
        "Freshly harvested green leaf lettuce, rich in vitamin A and folate.",
      tags: ["Vegetable", "Organic", "Leafy", "Salad"],
      available_sizes: ["small", "large"],
      on_sale: true,
      images: ["lettuce_green.png"],
      quantity: 1,
      buttons: {
        wishlist: true,
        share: false,
        add_to_cart: true,
      },
    },
    {
      id: 3,
      name: "Leafy Romaine Mixed Lettuce",
      price: {
        min: 2.5,
        max: 2.5,
      },
      original_price: 2.8,
      unit: "1 each",
      description: "Blend of romaine and mixed greens, ideal for fresh salads.",
      tags: ["Organic", "Fresh", "Salad Mix"],
      available_sizes: ["medium"],
      on_sale: true,
      images: ["lettuce_romaine.png"],
      quantity: 1,
      buttons: {
        wishlist: true,
        share: true,
        add_to_cart: true,
      },
    },
    {
      id: 4,
      name: "Fresh Express Iceberg Garden Salad Blend",
      price: {
        min: 25.0,
        max: 40.0,
      },
      original_price: null,
      unit: "1 bag",
      description:
        "Crisp iceberg lettuce blended with carrots and red cabbage.",
      tags: ["Salad", "Healthy", "Blend", "Family Size"],
      available_sizes: ["medium", "large"],
      on_sale: false,
      images: ["iceberg_blend.png"],
      quantity: 1,
      buttons: {
        wishlist: false,
        share: true,
        add_to_cart: true,
      },
    },
    {
      id: 5,
      name: "Organic Girl Lettuce",
      price: {
        min: 1.5,
        max: 1.5,
      },
      original_price: null,
      unit: "1 bag",
      description: "Certified organic lettuce, perfect for healthy lifestyles.",
      tags: ["Organic", "Vegan", "Healthy", "Leafy"],
      available_sizes: ["small"],
      on_sale: false,
      images: ["organic_girl_lettuce.png"],
      quantity: 1,
      buttons: {
        wishlist: true,
        share: false,
        add_to_cart: true,
      },
    },
    {
      id: 6,
      name: "Organic Spring Mix",
      price: {
        min: 2.6,
        max: 2.6,
      },
      original_price: 3.0,
      unit: "1 each",
      description: "Spring mix of tender organic greens, ready to eat.",
      tags: ["Organic", "Spring", "Greens", "Mixed"],
      available_sizes: ["medium"],
      on_sale: true,
      images: ["spring_mix.png"],
      quantity: 1,
      buttons: {
        wishlist: true,
        share: true,
        add_to_cart: true,
      },
    },
    {
      id: 7,
      name: "Organic Pink Lettuce",
      price: {
        min: 3.0,
        max: 3.0,
      },
      original_price: null,
      unit: "1 each",
      description:
        "A rare variety of lettuce with a hint of pink, rich in antioxidants.",
      tags: ["Unique", "Organic", "Antioxidant"],
      available_sizes: ["small"],
      on_sale: false,
      images: ["pink_lettuce.png"],
      quantity: 1,
      buttons: {
        wishlist: false,
        share: false,
        add_to_cart: true,
      },
    },
  ],
};

function App() {
  return (
    <>

      <Router>
        <Routes>
          {/* layout is the main layout that contains the navbar and footer and the children routes that are the pages  */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register/>} /> 
            <Route path="/login" element={<Login/>} /> 
            <Route path="/home" element={<Home/>} /> 
            <Route path="/shop" element={<Shop/>} />
            <Route path="/wishlist" element={<Wishlist/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/PurchaseOrder" element={<PurchaseOrder data = {dummy}/>} />
          </Route>
          <Route path="*" element={<div>Page Not Found</div>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;