import React, { useState } from 'react';
import ItemTemplate from '../templates/single-item';
import Cart from '../templates/cart-item';

export default function Body() {
    
    const item_property = {
        name : 'Ladder',
        src : './assets/images/p2.png',
        price : '2092',
    };
     
    return ( <div>     

       <h2 className="text-center">Hi, I am a Body!</h2>
       <ItemTemplate  item={item_property}  />

       </div> );
}
