import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';



export default function Cart(props) {

    // list of cart items
    const [ cartItems , setCartItems] = useState(['ladder','scaffold','wheel','lifter']);


    // delete cart items
    function deleteItem(item){
        console.log('printtt',item)
    
        setCartItems(cartItems.filter((e)=>{
            return e!==item;
        }))
    }


    return ( <div>

                { 
                  cartItems.length === 0 ? <h3> Oops your Cart is Empty !</h3> : cartItems.map(function(item, i){ 
                    return ( 
                           <div> 
                                <h2>item { item }</h2> 
                                  
                                <button className="btn btn-sm btn-danger" onClick={ ()=> {deleteItem(item)} }>X</button>
                            </div>
                            )  
                    }) 

                }

<ListGroup as="ol" numbered>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <Badge variant="primary" pill>
      14
    </Badge>
  </ListGroup.Item>

  
</ListGroup>

          </div> );
}
  




