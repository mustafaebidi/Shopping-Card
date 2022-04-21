import './App.css';
import {  useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import CardContents from './components/cardcontents/cardcontents';
import Main from './components/main/main';
import {useEffect ,createContext} from "react";

import items from './data.json'
import PopupProducts from './components/popupproducts/popproducts';




export const ProductsInCard = createContext();

function App() {

  const [number,setNumber]=useState(0)


  const [audio] = useState(new Audio("../../../audio/addTo.mp3"));



  const [totalPurchasePrice,setTotalPurchasePrice]=useState(0)

  
  const [storeProductsInCard, setStoreProductsInCard] = useState([]);
  const [allProductsInPopup,setAllProductsInPopup]=useState([])

    
  const increaseNumberOfProduct= (index) => {

    const modify=[...storeProductsInCard]
    
    modify[index].quantity+=1
    setStoreProductsInCard(modify)


  }


  const deleteItemFromCard=(index)=>{

    const modify=[...storeProductsInCard]

    const newArr=modify.filter((el,id)=>{
      return(id !== index)
    })
    setStoreProductsInCard(newArr)
    upadteNumber(storeProductsInCard.length-1)


  }

  const decreaseNumberOfProduct= (index) => {
    const modify=[...storeProductsInCard]
    if(modify[index].quantity>1){
      modify[index].quantity-=1
      setStoreProductsInCard(modify)

    }

  }
  

  const addToCard = (data) => {
  
      const exist=storeProductsInCard.find((el)=>  el.id === data) 
      if(!exist){
        audio.play()

        const newData=items.items.find(el=> el.id === data)
        console.log(storeProductsInCard)

        const current=[...storeProductsInCard,{...newData,quantity:1}]
        setStoreProductsInCard(current)
        upadteNumber(storeProductsInCard.length+1)

        const assda=[...allProductsInPopup,newData]
        setAllProductsInPopup([...assda])
      }
      
  }

  function upadteNumber(newNumber){
    setNumber(newNumber)

  }

  useEffect(()=>{

    if(storeProductsInCard[0]){
      let total=0;
      for(let i=0;i<storeProductsInCard.length;i++){
        total+=(storeProductsInCard[i].price*storeProductsInCard[i].quantity)
      }
      setTotalPurchasePrice(total)

    }
    

  },[storeProductsInCard])

  useEffect(()=>{

    let loadingStatus=""

    if(allProductsInPopup[0]){

        loadingStatus=setTimeout(()=>{

            setAllProductsInPopup([])

        },4000)
    }
    
    return () => clearInterval(loadingStatus);

  },[allProductsInPopup])


  return (

    <ProductsInCard.Provider  value={{storeProductsInCard,addToCard,increaseNumberOfProduct,decreaseNumberOfProduct,deleteItemFromCard,totalPurchasePrice}}>

        <BrowserRouter>
          <Navbar number={number}/>
          <PopupProducts allProductsInPopup={allProductsInPopup} />

          <Routes>
            <Route path="/" element={<Main upadteNumber={upadteNumber}  items ={items.items}/>} />
            <Route path="/card" element={<CardContents number={number}  />} />
          </Routes>
        </BrowserRouter>
      </ProductsInCard.Provider>

  );
}

export default App;
