import Cart from '../templates/cart';
import Home from '../templates/home';
import Login from '../templates/login';
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

  return ( <div >
          
          <Container fluid className="bg-dark text-white">
          <Row>
            <Col className="p-3"  sm={4}  >
              <h5 className="text-center" >Youngman Store</h5>
            </Col>
            <Col sm={6}  className="p-3 "  >
                <div >
                  <nav>
                     <Link to="/Store" className="text-white">Store</Link> |{" "}
                     <Link to="/Cart"  className="text-white" >Cart <FontAwesomeIcon icon={faCartArrowDown}  color="red  " />  </Link> |{" "}
                     <Link to="/Orders" className="text-white">Orders</Link> |{" "}
                     <Link to="/Profile" className="text-white">Profile</Link>
                  </nav>
                </div>
           </Col>
           <Col className="p-3"  sm={2} >
           <Link to="/Login"> <FontAwesomeIcon size="2x" icon={faSignInAlt}  color="red  " />  </Link>
            </Col>
           </Row>
          </Container>    

      <Routes>
      <Route path="/" element={ <Home /> }></Route>
      <Route path="/Store" element={ <BodyComponent /> }></Route>
      <Route path="/Cart" element={ <Cart /> }></Route>
      <Route path="/Orders" element={ <Orders /> }></Route>
      <Route path="/Profile" element={ <Profile /> }></Route>
      <Route path="/Login" element={ <Login /> }></Route>
      <Route path="/Checkout/:id" element={ <Checkout /> }></Route>
      </Routes>

  </div> ) ;
}

export default Header;


function Profile(){
  return ( <div>

          <h2> This Profile Components </h2>

  </div> );
}
function Orders(){
  return ( <div>

          <h2> This Orders Components </h2>

  </div> );
}
