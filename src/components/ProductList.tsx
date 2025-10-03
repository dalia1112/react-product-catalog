import type { Product } from "../types/product"
import ProductCard from "./ProductCard"

interface props{
  products:Product[]
}
const ProductList = ({products}:props) => {
  return (
    <>
    {
        products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.title}
                image={product.image}
                price={product.price}
                id={product.id}
              />
            ))
    }
    
    </>
  )
}

export default ProductList