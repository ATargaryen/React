import Cart from '../templates/cart';
import Home from '../templates/home';
import Login from '../templates/login';
import Orders from '../templates/orders';
import Profile from '../templates/profile';
import Checkout from '../templates/checkout';
import BodyComponent from '../Body/Body';
import Analytics from '../templates/analytics';
import { Container , Row , Col , Dropdown, Button } from 'react-bootstrap';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt , faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

import { useSelector, useDispatch } from 'react-redux'
import { login , logout } from '../../features/User';

function Header() {

  // useSelector , useDispatch hook used to communicate with redux store
  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()

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
                   <div>  <Link to="/analytics" className="text-grey p-4" style={linkStyle}>Analytics</Link> </div>  
                    
                
                </div>
           </Col>
           <Col className="p-3"  sm={2} >
           {/* <Link to="/Login"> <FontAwesomeIcon size="2x" icon={faSignInAlt}  color="grey  " />  </Link> */}
          <Dropdown>
            <Dropdown.Toggle variant="secondary" size='sm'>
             {user.name} 
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item ><Link className='text-black' to="/Login" style={{ textDecoration:'none'}}>Sign Out</Link></Dropdown.Item>
              <Dropdown.Item ><Link className='text-black' to="/Profile" style={{ textDecoration:'none'}} >Settings</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
            </Col>
           </Row>
          </Container>    

      <Container className='container-fluid' style={{ marginTop : '80px'}}>
      <Routes>
      <Route path="/" element={ <Home /> }></Route>
      <Route path="/Store" element={ <BodyComponent /> }></Route>
      <Route path="/Cart" element={ <Cart /> }></Route>
      <Route path="/Orders" element={ <Orders /> }></Route>
      <Route path="/Profile" element={ <Profile /> }></Route>
      <Route path="/Login" element={ <Login /> }></Route>
      <Route path="/Checkout/:id" element={ <Checkout /> }></Route>
      <Route path="/analytics" element={ <Analytics /> }></Route>
      </Routes>

      </Container>

      <Button
          onClick={() => dispatch(logout())}
        >
          Change User Name
        </Button>

  </div> ) ;
}

export default Header;
