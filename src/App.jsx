import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./index.css";
import PurchaseOrder from "./components/ProductDetails";
import Wishlist from "./components/Wishlist";
import CustomModal from "./components/CustomModal";
import Checkout from "./components/checkout";

import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';

import Shop from "./Pages/Shop";
import Layout from "./components/Layout";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Profile from "./Pages/Profile";
import Cart from "./Pages/Cart";
import ProductDetails from "./components/ProductDetails";



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
            <Route path="/profile" element={<Profile/>} /> 
            <Route path="/shop" element={<Shop/>} />
            <Route path="/wishlist" element={<Wishlist/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} /> 
            <Route path="/blog" element={<Blog/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/ProductDetails/:id" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={<div>Page Not Found</div>} />

        </Routes>
      </Router>
    </>
  );
}


export default App;


