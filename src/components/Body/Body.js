import React, { useState , useEffect} from 'react';
import ItemTemplate from '../templates/single-item';

export default function Body() {
    
     //item state with default value
    const [items , setItems] = useState([{ item_id: '212' , name: 'Ladder', src: './assets/images/p2.png', price: 10, } ]);

    function processResult(items){

      const item_array = [];

      for(var i=0 ; i < items.length ; i++){

        const itm = {
          item_id: items[i].id,
          name: items[i].name,
          src: items[i].image,
          price:items[i].price,
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
               <div  className="row p-4" style={{backgroundColor: "#8ED5FA"}} >
               <h2 className="text-center">Hi, I am a Body!</h2>
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
