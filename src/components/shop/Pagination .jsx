import { ArrowLeft, ArrowRight } from "lucide-react";
const Pagination = ( {currentPage, totalPages, onPageChange} ) => {
    return (
        <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
            
            {currentPage > 1 && (
                <button className="px-4 py-4 rounded-full"
                    onClick={() => onPageChange(currentPage - 1)}> <ArrowLeft size={16} /> 
                </button>
            )}
            
            {currentPage < totalPages && (
                <button className="px-4 py-4  rounded-full" 
                    onClick={() => onPageChange(currentPage + 1)}> <ArrowRight size={16} /> 
                </button>
            )}
        </div>
    )
}

export default Pagination;

