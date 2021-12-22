import React, { useState } from 'react';

import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'

export default function SingleItem(props) {


   var [ counter , setCounter] = useState(0);


    const setCartCount = () => {
      setCounter(counter+1);

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
                  <Button onClick={ setCartCount } variant="primary">Add To Cart</Button>
                </Card.Body>
              </Card>
                          
      </div> );
}
