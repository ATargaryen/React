import Cart from '../templates/cart';
import Home from '../templates/home';
import Login from '../templates/login';
import Orders from '../templates/orders';
import Profile from '../templates/profile';
import Checkout from '../templates/checkout';
import BodyComponent from '../Body/Body';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt , faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

function Header() {

  const linkStyle = {
    textDecoration: "none",
    fontWeight: "400",
    color : '#5e5e5e',
  };

  return ( <div >
          
          <Container fluid className="bg-light fixed-top text-grey">
          <Row className="">
            <Col className="p-3"  sm={4}  >
              <h5 className="text-center" >Youngman Store</h5>
            </Col>
            <Col sm={6}  className="p-3 "  >
                <div className="nav-bar d-flex text-grey">
                     <div>  <Link to="/Store" className="text-grey p-4" style={linkStyle} >Store</Link> </div>

                      <div> <Link to="/Cart"  className="text-grey p-4" style={linkStyle}>Cart  </Link>  </div>
                      {/* <FontAwesomeIcon icon={faCartArrowDown}  color="red  " /> */}
                     
                   <div>  <Link to="/Orders" className="text-grey p-4" style={linkStyle}>Orders</Link>  </div> 
                   <div>  <Link to="/Profile" className="text-grey p-4" style={linkStyle}>Profile</Link> </div>  
                    
                
                </div>
           </Col>
           <Col className="p-3"  sm={2} >
           <Link to="/Login"> <FontAwesomeIcon size="2x" icon={faSignInAlt}  color="grey  " />  </Link>
            </Col>
           </Row>
          </Container>    

      <Container className='container-fluid mt-4'>
      <Routes>
      <Route path="/" element={ <Home /> }></Route>
      <Route path="/Store" element={ <BodyComponent /> }></Route>
      <Route path="/Cart" element={ <Cart /> }></Route>
      <Route path="/Orders" element={ <Orders /> }></Route>
      <Route path="/Profile" element={ <Profile /> }></Route>
      <Route path="/Login" element={ <Login /> }></Route>
      <Route path="/Checkout/:id" element={ <Checkout /> }></Route>
      </Routes>

      </Container>



  </div> ) ;
}

export default Header;
