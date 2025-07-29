import { Outlet } from "react-router-dom";
// import Header from "./Header";

const Layout = ({children}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      <main className="py-6 md:py-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {children}
        <Outlet />   
      </main>
    </div>
  );
};

export default Layout;