import Product from "./Product";
import {productList} from "../utils/constant";

export const ProductCard = () => {
  return (
    <div className="product_card">
        {
          productList.map((product,index) => {
             return (
                <Product key={product.id} product={product}/>
             )
          })
        }
    </div>
  )
}
