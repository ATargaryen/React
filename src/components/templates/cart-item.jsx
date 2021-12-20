import React from 'react';
import { Card, Button} from 'react-bootstrap';
import {
  useNavigate
} from "react-router-dom";

export default function Cart(props) {

  let navigate = useNavigate();

  return (<div>

    {/* use arrow funtion to call deleteItem to prevent autocall */}
    <Card className="m-5">
      <Card.Header>ITEM</Card.Header>
      <Card.Body>
        <Card.Title> <b>{props.item.name}</b> </Card.Title>
        <Card.Text>

          <p> With supporting text below as a natural lead-in to additional content.{props.item.desc} </p>
    
          Price : {props.item.price} <br />
          Quantity : 
          <div className="btn-group" role="group" aria-label="Basic example">
           <button onClick={() => { props.handleDecreement(props.item.index,'quantity') }} >-</button> <button>{props.item.quantity}</button>  <button onClick={() => { props.handleIncreement(props.item.index,'quantity') }}>+</button> </div>
           <br />
         
          Color : {props.item.color}  <br />
           
        </Card.Text>
        <div className="float-end">
           <Button className="m-2 " onClick={() => { props.deleteItem(props.item) }} variant="outline-danger">REMOVE</Button>
           <Button className="m-2 " variant="outline-success" onClick={()=> {  navigate("/Checkout/"+ props.item.id )}}>CHECKOUT</Button>
        </div>
      </Card.Body>
    </Card>


  </div>);
}
