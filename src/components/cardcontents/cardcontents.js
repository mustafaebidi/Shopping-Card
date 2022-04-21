

import Card from '../card/card'
import {ProductsInCard} from  "../../App"
import {Fragment, useContext} from 'react';
import "./cardcontents.css"




export const Purchases=()=>{

  const { storeProductsInCard } = useContext(ProductsInCard);
  const allProducts=storeProductsInCard.map((el,indx)=>{

    return(<Card key={el.id*2} indx={indx} {...el} />)
  
  })


  return (
    <table className='purchases'>
      <tbody>
        {allProducts}
      </tbody>
    </table>


  )

}


function CardContents({number}) {

  const { totalPurchasePrice } = useContext(ProductsInCard);




  
  return (

    <Fragment>
    <div className="table-container">
        <div className="con">
          <Purchases/>
        </div>
        <div class="row">
          <div className='purchase-details'>
            <table>
              <tbody>
                <tr>
                  <td><strong>Count items:</strong></td>
                  <td>
                    <span>
                      {number}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Total:</strong>
                  </td>
                  <td>
                    <span id="cart_number">{totalPurchasePrice}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
    </Fragment>






  );
}

export default CardContents;

