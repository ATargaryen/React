import React, { useState } from 'react';
import Cart from '../templates/cart';

export default function Cart(props) {

    return ( <div>

        <div className="container m-2 d-inline-flex">
             {/* use arrow funtion to call deleteItem to prevent autocall */}
           <h2>Item { props.item } <button className="btn btn-sm btn-danger" onClick={ ()=> {props.deleteItem(props.item)} }>X</button> </h2>  
        </div>
   
   </div>);
}
