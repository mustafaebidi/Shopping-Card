
import './products.css'
import Product from "../product/product"


function Products({alldata}) {


  const allProducts=alldata.map(({...data})=>{
      return(<Product key ={data.id}  {...data} />)

  })

  return (

        <div className="products">
                {allProducts}
        </div>



  );
}

export default Products;
