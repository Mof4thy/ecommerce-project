
import { useState } from "react";
import MainPosts from "../components/MainPosts";
import Sidebar from "../components/Sidebar"; 
import Pagination from "../components/Pagination";

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 2; 

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <div className="px-4 md:px-20 py-10 bg-white text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Posts */}
        <MainPosts />

        {/* Sidebar */}
        <Sidebar />

      </div>

   
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
</div>
   
   
  );
}

