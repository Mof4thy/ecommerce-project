import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({children}) => {
  return (
    <>
      <Header />
    <div className="min-h-screen">
      <main className="py-6 md:py-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {children}
        <Outlet />   
      </main>
    </div>
      <Footer/>
    </>
  );
};

export default Layout;