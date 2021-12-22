import { Button, Card, Row, Col, Form, Stack, Container } from 'react-bootstrap';


export default function Profile() {
    return (<div>

        <Container className="bg-basic m-4">
            <h2>This is Profile Page</h2>
            <Card style={{ width: '70%' }}>
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
                        <Button variant="secondary" type="submit" className='float-end mt-4 btn-lg'>
                            Update Profile
                        </Button>

                    </Form>
                </Card.Body>
            </Card>

        </Container>


    </div>);
}