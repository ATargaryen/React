import React, { useState } from 'react';
import ItemTemplate from '../templates/single-item';
import Cart from '../templates/cart-item';

export default function Body() {
    
    const item_property = {
        name : 'Ladder',
        src : './assets/images/p2.png',
        price : '2092',
    };
     
    const [ cartItems , setCartItems] = useState(['ladder','scaffold','wheel','lifter']);

    function deleteItem(item){
        console.log('printtt',item)
    
        setCartItems(cartItems.filter((e)=>{
            return e!==item;
        }))
    }

    return ( <div>     

       <h2 className="text-center">Hi, I am a Body!</h2>
       <ItemTemplate  item={item_property}  />

       { cartItems.length === 0 ? <h3> Oops your Cart is Empty !</h3> : cartItems.map(function(item, i){
        // call cart component with two parameter one array , on function deleteItem
       return  <Cart key={i} item={item} deleteItem={deleteItem}  /> }) }
 
       </div> );
}
