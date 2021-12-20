import React from 'react';
import {
    useParams
  } from "react-router-dom";
export default function Checkout() {

    let { id }  = useParams();

    return ( <div>

             <h2>This is Checkout Page for item { id } </h2>

             Shipping address




          </div> );
}
  




