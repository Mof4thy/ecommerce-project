import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../services/ProductsApi";

const useProductById = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
  });
};

export default useProductById;