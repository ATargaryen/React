import React, { useState } from 'react';

export default function SingleItem(props) {

    const temp_style = {
      backgroundColor: '#FF0000',
    };


   var [ counter , setCounter] = useState(0);


    const setCartCount = () => {
      setCounter(counter+1);
    };
    return ( <div>     
       <h2>Single Item Template</h2>
        
       <div className="item_template w-50" style={ temp_style }>
       <img src={props.item.src} onClick={ myfunction } alt="item_image" ></img>
        <h5 className="badge-primary " style={{ fontWeight : "bold", fontSize : 30 , fontFamily : 'serif' }}>{props.item.name}  {props.item.price }  </h5> 
       </div>
       
       <h2 id="item_selected_lbl">{ counter  }</h2> <button className="btn btn-primary" onClick={ setCartCount } >Add To Cart</button> 
      
      </div>
      );
}
  
function myfunction(){
  alert('Hello JSX !')
}



