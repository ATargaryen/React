import React, { useState } from 'react';

import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faRupeeSign } from '@fortawesome/free-solid-svg-icons'

export default function SingleItem(props) {


   var [ counter , setCounter] = useState(0);


    const setCartCount = () => {
      setCounter(counter+1);
    };
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
