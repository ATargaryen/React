import React, { Form , useEffect , useState} from 'react';
import {
  useParams
} from "react-router-dom";
import { Container, Row, Col, Button, Figure , Accordion , Stack} from 'react-bootstrap';

export default function Checkout() {

  let { id } = useParams();

  const [checkOutItem , setcheckOutItem] = useState([
    { id:'212' , name: 'default',  src: './assets/images/p2.png', price: 10 , quantity:4 , desc : 'default desc'  , color: 'yellow' , gst : '18' ,total_amt : '7020'}]);

  const [customerDetails , setCustomerDetails] = useState({

    customer_name : '',
    customer_email : '',
    customer_phone : '',
    customer_address_line : '',
    customer_city : '',
    customer_pincode : '',
    customer_state : '',

  });

   const [ paymentFlag , setPaymentFlag] = useState(false);



  function processResult(res){
    // set cart item details
    const item_array = [];

      const itm = {
        id: res.item_name,
        name: res.item_name,
        src: res.item_src,
        price:res.item_price,
        quantity:res.item_qty,
        desc:res.item_desc,
        color:res.item_color,
        gst:res.item_gst,
        total_amt:res.item_total,
      }

      item_array.push(itm)
      setcheckOutItem(item_array)  
  }

  // get cart item with id
  useEffect(() => {
    fetch("http://127.0.0.1:8000/getCartItem/"+id)
      .then(res => res.json())
      .then(
        (result) => {
          processResult(result)
        },
        (error) => {
          console.log(error.message)
        }  
      )
  }, [])

  function submitCustomerForm(e){

    // store customer details on server
    console.log('Payment Flag '+paymentFlag);
    e.preventDefault();  // restrict form default functionality

      let header = {
        method : 'POST',
        mode: 'cors', 
        body: JSON.stringify(customerDetails)
      }
      fetch("http://127.0.0.1:8000/submitCustomerShippingForm", header )
        .then(res => res.json())
        .then(
          (result) => {
            if(result === true){
              setPaymentFlag(true) ; console.log('Payment Flag '+paymentFlag); }else{ console.log('Customer Details Form Not Submitted Correctly') ;}
            
          },
          (error) => {
            console.log(error.message)
          }  
      );
  }


  // handle customer form

  const handleNameInputChange = (event) => {
    event.persist();
    setCustomerDetails((customerDetails) => ({
      ...customerDetails,
      customer_name: event.target.value,
    }));
  }
  const handleEmailInputChange = (event) => {
    event.persist();
    setCustomerDetails((customerDetails) => ({
      ...customerDetails,
      customer_email: event.target.value,
    }));
  }
  const handlePhoneInputChange = (event) => {
    event.persist();
    setCustomerDetails((customerDetails) => ({
      ...customerDetails,
      customer_phone: event.target.value,
    }));
  }
  const handleAddressLineInputChange = (event) => {
    event.persist();
    setCustomerDetails((customerDetails) => ({
      ...customerDetails,
      customer_address_line: event.target.value,
    }));
  }
  const handleAddressCityInputChange = (event) => {
    event.persist();
    setCustomerDetails((customerDetails) => ({
      ...customerDetails,
      customer_city: event.target.value,
    }));
  }
  const handlePincodeInputChange = (event) => {
    event.persist();
    setCustomerDetails((customerDetails) => ({
      ...customerDetails,
      customer_pincode: event.target.value,
    }));
  }
  const handleStateInputChange = (event) => {
    event.persist();

    console.log(event.target.value);
    setCustomerDetails((customerDetails) => ({
      ...customerDetails,
      customer_state: event.target.value,
    }));
  }

  return (<div className='bg-white m-5'>

    <div className="headr m-4 text-center">
    <h2> Checkout Form For Item {id} {paymentFlag}</h2>
    </div>
   
   
   <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Shipping Details Form</Accordion.Header>
    <Accordion.Body>
    <Stack gap={3} className="col mx-auto p-4">
    <form onSubmit={submitCustomerForm}>
      <div className='m-4'>
        <input type="text" className='form-control' name="customer_name" value={customerDetails.customer_name}  onChange={ handleNameInputChange } placeholder="Enter Your Name"  required />
      </div>
      <div className='m-4'>
        <input type="text" className='form-control' name="customer_email" value={customerDetails.email} onChange={ handleEmailInputChange } placeholder="Enter Your Email" required />
      </div >
      <div className='m-4'>
        <input type="text" className='form-control' name="customer_phone" value={customerDetails.phone}  onChange={ handlePhoneInputChange } placeholder="Enter Your Phone"  required/>
      </div>
      <div className='m-4'>
        <label className="m-2" htmlFor="shipping_address">Shipping Address</label>
        <address>
          <input type="text" className='form-control mt-2' name="customer_address_line" value={customerDetails.email} onChange={ handleAddressLineInputChange } placeholder="Address Line" required />
          <input type="text" className='form-control mt-2' name="customer_city" value={customerDetails.email}  onChange={ handleAddressCityInputChange } placeholder="City"  required/>
          <Row>
            <Col>
              <input type="number" className='form-control mt-2' name="customer_pincode" value={customerDetails.email}  onChange={ handlePincodeInputChange } placeholder="Pincode"  required/>
            </Col>
            <Col>
              <select name="customer_state" onChange={ handleStateInputChange } id="" className='form-control mt-2'  required >
                <option value="" selected="true" disabled>Select State</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="DL">Delhi</option>
                <option value="MH">Maharastra</option>

              </select>
            </Col>
          </Row>
        </address>

        <div className='d-grid p-5'>
        <Button type="submit" size="lg" variant="dark">SUBMIT DELIVERY ADDRESS</Button>
        </div>
      </div>

    </form>
</Stack>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Items Overview</Accordion.Header>
    <Accordion.Body>
    <Row >
      <Col  sm={4}>
      <Figure className="m-5">
<Figure.Image
width={600}
height={200}
alt="171x180"
src="../assets/images/p2.png"

/>
</Figure>
      </Col>
      <Col  sm={8}>

         <div className="item_overview d-grid p-4">
         <div className="item_name m-4">
            <label htmlFor="item_name">Item : </label> <span> { checkOutItem[0].name }</span>
          </div>
          <div className="item_name m-4">
            <label htmlFor="item_name">Description :</label>  <span> { checkOutItem[0].desc } </span>
          </div>
          <div className="item_name m-4">
            <label htmlFor="item_name">Price :</label>  <span>{ checkOutItem[0].price }</span>
          </div>
          <div className="item_name m-4">
            <label htmlFor="item_name">Color : </label> <input type="color" value="#FFFF00"></input> <input type="color" value="#000000"></input>
          </div>
         </div>
  
      </Col>
    </Row>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Payment</Accordion.Header>
    <Accordion.Body>
      <div className="payemt_div">

          <div className="item_name m-4">
            <label htmlFor="item_name">Item : </label> <span>{ checkOutItem[0].name }</span>
          </div>
          <div className="item_name m-4">
            <label htmlFor="item_name">Price :</label>  <span>{ checkOutItem[0].price }</span>
          </div>
          <div className="item_name m-4">
            <label htmlFor="item_name">Quantity :</label>  <span>{ checkOutItem[0].quantity }</span>
          </div>
          <div className="item_name m-4">
            <label htmlFor="item_name">Gst % :</label>  <span>{ checkOutItem[0].gst }</span>
          </div>
          <div className="item_name m-4">
            <label htmlFor="item_name">TOTAL AMOUNT :</label>  <span>{ checkOutItem[0].total_amt }</span>
          </div>
          <div className='d-grid p-5 text-center"'>


          <Button size="md" variant="success" >DO PAYMENT</Button>
         </div>
      </div>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>   
</div>);
}





