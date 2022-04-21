
import "./product.css"
import {  useContext } from 'react';

import {ProductsInCard} from  "../../App"

function Product({name,price,sku,type,isFreeShipping,id}) {

    const { addToCard } = useContext(ProductsInCard);


  
  return (
        <div className="product-item">
            <div className="opation">
                <div className="add-to-card" onClick={()=>{
                    addToCard(id)
                }}>Add To Card</div>
            </div>
            <div className="img-container">
                <img src={`/image/products/${sku}.webp`} alt=""/>
            </div>
            <div className="info">
                <h4>{name}</h4>
                <h3 className="price">{price}</h3>
            </div>
        </div>

  );
}

export default Product;
