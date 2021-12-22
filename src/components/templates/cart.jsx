import React, { useState , useEffect } from 'react';
import CartItem from '../templates/cart-item';



export default function Cart(props) {

    // list of cart items

    const [cartItems , setCartItems] = useState([
        { id:'212' , name: 'Ladder',  src: './assets/images/p2.png', price: 10 , quantity:4 , desc : 'item used to climb'  , color: 'yellow'}
    ]);

    const [cartItemCount , setCartItemCount] = useState(4);


    function processResult(cartItems){

        const item_array = [];

        console.log(cartItems);
  
        for(var i=0 ; i < cartItems.length ; i++){
  
          const itm = {
            id: cartItems[i].id,
            name: cartItems[i].name,
            src: cartItems[i].image,
            price:cartItems[i].price,
            quantity:cartItems[i].quantity,
            desc:cartItems[i].desc,
            color:cartItems[i].color,
          }
  
          item_array.push(itm)
        }
  
        setCartItems(item_array)  
      }

    useEffect(() => {

        const data = [{user_id :process.env.REACT_APP_USER_ID }];
        let header = {
            method : 'POST',
            mode: 'cors', 
            body: JSON.stringify(data)
        }

        fetch(process.env.REACT_APP_URL+"/getCartItems", header )
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


    return ( <div >

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
  




