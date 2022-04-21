import { Fragment } from "react"
import ReactDOM from 'react-dom';

import "./popupproducts.css"

function PopupProducts({ allProductsInPopup }) {

    const handleKeyDown = (e) => {
        let elementFromDom = ReactDOM.findDOMNode(e.target);
        console.log(elementFromDom)
        elementFromDom.style.display = "none"
    };



    const all = allProductsInPopup.map((el) => {
        return (
            <div key={el.id * 9} id="sasa" className="product-alert" onAnimationEnd={handleKeyDown}>
                <h2>Product added to Cart</h2>
                <div className="info-alret">
                    <div className="con-image">
                        <img src={`/image/products/${el.sku}.webp`} alt="" />
                    </div>
                    <div>
                        {el.name}
                    </div>
                </div>
            </div>
        )
    })





    return (
        <Fragment>
            {ReactDOM.createPortal(all, document.getElementById("popup-products"))}
        </Fragment>

    )

}

export default PopupProducts


