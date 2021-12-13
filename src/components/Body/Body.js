import React, { useState , useEffect} from 'react';
import ItemTemplate from '../templates/single-item';
import Cart from '../templates/cart-item';

export default function Body() {
    
     //item state with default value
    const [items , setItems] = useState([{ name: 'Ladder', src: './assets/images/p2.png', price: 10, } ]);

    function processResult(items){

      const item_array = [];

      for(var i=0 ; i < items.length ; i++){

        const itm = {
          name: items[i].item_name,
          src: items[i].item_src,
          price:items[i].item_price,
        }

        item_array.push(itm)
      }

      setItems(item_array)  
    }

    useEffect(() => {
        fetch("http://127.0.0.1:8000/getItems")
          .then(res => res.json())
          .then(
            (result) => {
              processResult(result)
            },
            (error) => {
              console.log(error.message)
            }  
          )
      }, [])
     // []2nd parameter used mean function run only ones

    return (<>     
               <h2 className="text-center">Hi, I am a Body!</h2>
               <div  className="row p-4" >
                  {  
                    items.map(function(item, i){ 
                              return (<> 
                                       <div  className="col" >
                                       <ItemTemplate key={i} item={item}  /> 
                                       </div>
                                    </>)  
                    }) 
                  }
               </div>
        </> );
}
