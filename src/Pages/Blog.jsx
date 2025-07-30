import MainPosts from "../components/MainPosts";
import Sidebar from "../components/Sidebar"; // عدلي المسار حسب مكان الملف

export default function Blog() {
  return (
    <div className="px-4 md:px-20 py-10 bg-white text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Posts */}
        <MainPosts />

        {/* Sidebar */}
        <Sidebar />
      </div>
    </div>
  );
}
