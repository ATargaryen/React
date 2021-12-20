import React, { useState } from 'react';
import CartItem from '../templates/cart-item';



export default function Cart(props) {

    // list of cart items

    const [cartItems , setCartItems] = useState([
        { id:'212' , name: 'Ladder',  src: './assets/images/p2.png', price: 10 , quantity:4 , desc : 'item used to climb'  , color: 'yellow'},
        { id:'213' ,name: 'Wheel', src: './assets/images/p2.png', price: 10 , quantity:4 , desc : 'item used to paint' , color: 'yellow'},
        { id:'214' ,name: 'Scaffold', src: './assets/images/p2.png', price: 10 , quantity:4 , desc : 'item used to paint' , color: 'yellow'}
    ]);

    const [cartItemCount , setCartItemCount] = useState(4);

    // delete cart items
    function deleteItem(item){
        console.log('printtt',item)
    
        setCartItemCount(cartItemCount-1);

        setCartItems(cartItems.filter((e)=>{
            return e!==item;
        }))
    }

    function handleDecreement(itemIndex,prop){
   
    // decrease item cart qty value
   
       const temp_array = [...cartItems];
       temp_array[itemIndex].quantity -= 1 ;
       setCartItems(temp_array);
     
    }

    function handleIncreement(itemIndex,prop){

       // increate item cart qty value
        const temp_array = [...cartItems];
        temp_array[itemIndex].quantity += 1 ;
        setCartItems(temp_array);
 
    }


    return ( <div>

               { cartItemCount === 0 ?  '' : <h2> My Cart { cartItemCount }</h2>  }

                { 
                  cartItems.length === 0 ? <h3 className='text-center'> Oops your Cart is Empty !</h3> : cartItems.map(function(item, i){ 
                    item.index = i;  // set item arr index
                    return ( 
                           <div> 
                                <CartItem key={i} item={item} deleteItem={deleteItem} handleDecreement={handleDecreement}  handleIncreement= {handleIncreement}/> 
                            </div>
                            )  
                    }) 

                }


          </div> );
}
  




