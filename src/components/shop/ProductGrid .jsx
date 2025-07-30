import ProductCard from "./ProductCard";

const ProductGrid = ({products}) => {

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch gap-2">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}

        </div>
    )
}

export default ProductGrid;