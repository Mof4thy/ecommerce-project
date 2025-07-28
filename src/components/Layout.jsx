import { Outlet } from "react-router-dom";

const Layout = ({children}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      <main className="py-8">
        {children}
        <Outlet />   
      </main>
    </div>
  );
};

export default Layout;