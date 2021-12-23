import { Button, Card, Row, Col, Form, Stack, Container } from 'react-bootstrap';
import React, {useEffect , useState} from 'react';

import { SocialIcon } from 'react-social-icons';
export default function Profile() {

    const iconStyle = {
        height: 25,
        width: 25,
        margin : '2px',
    }

    var [ profileButtonText , setProfileButtonText] = useState("Add To Cart");
    var [ profileButtonVariant , setProfileButtonVariant] = useState("secondary");

    function updateProfile(e){
        e.preventDefault(); 
        setProfileButtonVariant('success')
        setProfileButtonText('Updated')
    }

    return (<div>

        <Container className="m-4">
            <h2>This is Profile Page</h2>

            <Row>
                <Col sm={8} className=''>
                <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title className='p-2'>User Profile</Card.Title>
                    <Form>
                        <Row className='mb-4'>
                            <Col>
                                <Form.Label>COMPANY</Form.Label>
                                <Form.Control type="text" placeholder='Your Company' />
                            </Col>
                            <Col>
                                <Form.Label>USER NAME</Form.Label>
                                <Form.Control type="text" placeholder='Your Company User Name' />
                            </Col>
                            <Col>
                                <Form.Label>EMAIL ADDRESS</Form.Label>
                                <Form.Control type="email" placeholder='Your Company Email' />
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col>
                            <Form.Label>FIRST NAME</Form.Label>
                                <Form.Control type="email" placeholder='Aman' />
                            </Col>
                            <Col>
                                <Form.Label> LAST NAME </Form.Label>
                                <Form.Control type="email" placeholder='Chaudhary' />
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col>
                            <Form.Label> Address </Form.Label>
                                <Form.Control type="email" placeholder='Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09' />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <Form.Label> CITY </Form.Label>
                                <Form.Control type="email" placeholder='AGRA' />
                            </Col>
                            <Col>
                            <Form.Label> COUNTRY </Form.Label>
                                <Form.Control type="email" placeholder='INDIA' />
                            </Col>
                       
                            <Col>
                            <Form.Label> POSTAL CODE </Form.Label>
                                <Form.Control type="email" placeholder='Zip Code' />
                            </Col>
                        </Row>
                        <Button variant={profileButtonVariant} onClick={updateProfile} type="submit" className='float-end mt-4 btn-lg'>
                            {profileButtonText}
                        </Button>

                    </Form>
                </Card.Body>
            </Card>

                </Col>
                <Col sm={4}>

                    <Card>
                    <Card.Body>
                   <img class="card-img-top" src="https://i.imgur.com/K7A78We.jpg" alt="Card image cap"/>

                    <div class="pro-img text-center " style={{ margin : '-80px'}} >
                       <img className='rounded-circle w-25  border border-dark border-1' src="https://i.imgur.com/8RKXAIV.jpg" alt="user"/>
                    </div>

                    <div className="text-center" style={{ margin : '80px'}}>
                    <Card.Text className='p-2 text-red'>Aman Chaudhary</Card.Text>

                    <Card.Text className='p-2 text-bold'>YOUNGMAN , INDIA</Card.Text>
                    </div>


                
                    <div className='pt-3 d-flex justify-content-center' > 
                    
                    <hr />
                    <ul class="social-list d-flex" style={{ listStyle : 'none'}}>
                        <li> <SocialIcon url="https://twitter.com"  style={ iconStyle } bgColor="Grey"/></li>
                        <li> <SocialIcon url="https://www.facebook.com/"  style={ iconStyle } bgColor="Grey" /></li>
                        <li> <SocialIcon url="https://instagram.com" style={ iconStyle } bgColor="Grey" /></li>
                        <li> <SocialIcon url="https://pinterest.com" style={ iconStyle }  bgColor="Grey" /></li>
                    </ul>
        
                    </div>

                    
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </Container>


    </div>);
}