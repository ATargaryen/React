import React from 'react';
import { Card, Button, Figure, Row, Col } from 'react-bootstrap';
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

        <Row>
          <Col sm={3}>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={props.item.src}
              />
              <Figure.Caption>
                <b>{props.item.name}</b>
                <p> With supporting text below as a natural lead-in to additional content.{props.item.desc} </p>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col sm={9}>


            <Card.Title> <b>{props.item.name}</b> </Card.Title>
            <Card.Text>

              <p> With supporting text below as a natural lead-in to additional content.{props.item.desc} </p>

              Price : {props.item.price} <br />
              Quantity :
              <div className="btn-group" role="group" aria-label="Basic example">
                <button onClick={() => { props.handleDecreement(props.item.index, 'quantity') }} >-</button> <button>{props.item.quantity}</button>  <button onClick={() => { props.handleIncreement(props.item.index, 'quantity') }}>+</button> </div>
              <br />

              Color : {props.item.color}  <br />

            </Card.Text>
            <div className="float-end">
              <Button className="m-2 " onClick={() => { props.deleteItem(props.item) }} variant="outline-danger">REMOVE</Button>
              <Button className="m-2 " variant="outline-success" onClick={() => { navigate("/Checkout/" + props.item.id) }}>CHECKOUT</Button>
            </div>
          </Col>
        </Row>

      </Card.Body>
    </Card>


  </div>);
}
