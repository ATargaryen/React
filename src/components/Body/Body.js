import React, { useState , useEffect} from 'react';
import ItemTemplate from '../templates/single-item';
import Cart from '../templates/cart-item';

export default function Body() {
    
    const [item_name, setName] = useState('Ladder');
    const [item_src, setSrc] = useState('./assets/images/p2.png');
    const [item_price, setPrice] = useState(0);

    const item_property = {
        name : item_name,
        src : item_src,
        price : item_price ,
    };

    function setItems($item){
      
      console.log("Set Items");
      setName($item[0].item_name)
      setSrc($item[0].item_src)
      setPrice($item[0].item_price)
    }

    useEffect(() => {
        fetch("http://127.0.0.1:8000/getItems")
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result)
              setItems(result)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              console.log(error)
            } 
          )
      }, [])
     // []2nd parameter used mean function run only ones
    return ( <div>     

       <h2 className="text-center">Hi, I am a Body!</h2>
       <ItemTemplate  item={item_property}  />

       </div> );
}
