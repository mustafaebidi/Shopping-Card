
import "./aside.css"
import { useState } from 'react';


function Aside({handleName,setOrder}) {
    ///const [audio] = useState(new Audio(url));

    const[value,setValue]= useState()

    function handleChange(e){
        setValue(e.target.value)
        handleName(e.target.value)
    }

    function hadleRadioButton(e){

        setOrder(e.target.value)

    }



  
  return (
        <div className="filter">
            <form>
                <input  class="search" onChange={(e)=>handleChange(e)} value={value} />
            </form>

            <div class="sort-data">
                <span>
                    <input name="order"  type="radio" id="1" value="ascending" onChange={hadleRadioButton} />
                    <label title="" for="1">Ascending</label>
                </span>

                <span>
                    <input name="order"  type="radio" id="2" value="descending"  onChange={hadleRadioButton}/>
                    <label title="" for="2" >Descending</label>
                </span>  

            </div>

            
        </div>

  );
}

export default Aside;
