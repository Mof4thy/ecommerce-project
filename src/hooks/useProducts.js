import { getProducts } from "../services/ProductsApi";
import { useQuery } from "@tanstack/react-query";


const useProducts = () => {

    const {data, isLoading, error} = useQuery(
        {
            queryKey:["products"],
            queryFn:getProducts,
            staleTime:1000 * 60 * 30
        }
    )

    return {data, isLoading, error};
}

export { useProducts };