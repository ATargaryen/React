import React, { useState } from 'react';

import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign , faCheck } from '@fortawesome/free-solid-svg-icons'

export default function SingleItem(props) {


   var [ counter , setCounter] = useState(0);


   var [ cartButtonText , setCartButtonText] = useState("Add To Cart");
   var [ cartButtonVariant , setCartButtonVariant] = useState("primary");


    const setCartCount = () => {
      setCounter(counter+1);

      setCartButtonText('Carted')
      setCartButtonVariant('success')

      addItemToCart();
    };

    function addItemToCart(){

      const data = [{ 'item' : props.item , 'user_id' : '121'}]

      let header = {
        method : 'POST',
        mode: 'cors', 
        body: JSON.stringify(data)
      }

      fetch(process.env.REACT_APP_URL+"/addItemToCart", header )
      .then(res => res.json())
      .then(
        (result) => {
           
         console.log('Item Added To Cart');
          
        },
        (error) => {
          console.log(error.message)
        }  
    );
    }
    return ( <div>     
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.item.src} />
                <Card.Body>
                  <Card.Title>{props.item.name}</Card.Title>
                  <Card.Text>
                  <FontAwesomeIcon icon={  faRupeeSign }  color="black" />    {props.item.price } { counter  }
                  </Card.Text>
                  <Button onClick={ setCartCount } variant={cartButtonVariant}> { cartButtonText }  { cartButtonText == "Carted" ?  <FontAwesomeIcon size="1x" icon={faCheck}  color="white" />  : ""  }  </Button>
                </Card.Body>
              </Card>
                          
      </div> );
}
