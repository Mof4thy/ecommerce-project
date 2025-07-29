import { getProducts } from "../services/ProductsApi";
import { useQuery } from "@tanstack/react-query";


const useProducts = () => {

    return useQuery(
        {
            queryKey:["products"],
            queryFn:getProducts,
            staleTime:1000 * 60 * 30
        }
    )

}

export { useProducts };