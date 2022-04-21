
import "./card.css"
import {useContext} from 'react';
import {ProductsInCard} from  "../../App"

function Card({sku,quantity,price,indx,name}) {
    ///const [audio] = useState(new Audio(url));

    const { increaseNumberOfProduct ,decreaseNumberOfProduct,deleteItemFromCard} = useContext(ProductsInCard);

  
  return (
    <tr>
        <td  style={{width: "50px"}}><img src={`/image/products/${sku}.webp`} alt=""/></td>
        <td className="name-product">{name}</td>
        <td><span className="product-quantity" >{quantity}</span></td>
        <td style={{width: "150px"}} >
            <div className="qullity">
                <div className="quantity-control">
                    <div className="inc" onClick={()=>increaseNumberOfProduct(indx)}>+</div>
                    <div className="dic" onClick={()=> decreaseNumberOfProduct(indx) }>-</div>
                </div>
            </div>
        </td>
        <td >
            <div className="total-product-price">
                {quantity*price}
            </div>
        </td>
        <td>
            <div className="delete-item" onClick={ ()=> deleteItemFromCard(indx) }>x</div>
            
        </td>

    </tr>

  );
}

export default Card;
