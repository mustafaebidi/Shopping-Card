


import { createContext,useState } from "react";
import Aside from "../aside/aside";
import Products from '../products/products'


import "./main.css"

export const ProductsInCard = createContext("sa");


function Main({items}) {

    const [name,setname]=useState()
    const [order,setOrder]=useState("ascendi.ng")




    function handleName(data){
        setname(data.toLowerCase())
    }

    function orderData(){
        const modifyData=[...items]
        if(order === 'ascending'){
            modifyData.sort(function(a, b){return b.price-a.price});
            console.log(modifyData)
            return modifyData
        }
        else if(order === "descending"){
            modifyData.sort(function(a, b){return a.price-b.price});
            return modifyData
        }
        else{
            return modifyData
        }

    }

    function filterData(){
        console.log(780450)
        if(name){
            
            const newData=orderData().filter((element)=>{

                const covertToSmall=element.name.toLowerCase();

                return(covertToSmall.includes(name))
            })

            return newData
        }
        else
        {
            return orderData()

        }
    }



  return (
        

        <div className="main">
            <div className="container">
                <Aside handleName={handleName} setOrder={setOrder}/>
                <Products alldata={filterData()}/>
            </div>
        </div>

  );
}

export default Main;
