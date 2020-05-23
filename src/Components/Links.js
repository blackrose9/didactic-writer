import React, {Component} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class Links extends Component {
   render(){
      return(
         <Container className='Section-links'>
            <h1>Some nice links you can check out</h1>
            <Row>
               <Col>
                  <Card style={{ width: '20rem' }}>
                     <Card.Body>
                        <Card.Title>Blogger</Card.Title>
                        <Card.Text>
                           This is my main blog where I write random articles about life and it's wonders.
                        </Card.Text>
                        <Button variant="info" href="https://blackrose722.blogspot.com/">Visit Blog</Button>
                     </Card.Body>
                  </Card>
               </Col>
               <Col>
                  <Card style={{ width: '20rem' }}>
                     <Card.Body>
                        <Card.Title>blackrose9</Card.Title>
                        <Card.Text>
                           Coming soon is a blog about my programming chronicals. 
                        </Card.Text>
                        <Button variant="info" href=''>Visit Blog</Button>
                     </Card.Body>
                  </Card>
               </Col>
               <Col>
                  <Card style={{ width: '20rem' }}>
                     <Card.Body>
                        <Card.Title>My Website</Card.Title>
                        <Card.Text>
                           If you are curious about the other side of my life, check this website out.
                        </Card.Text>
                        <Button variant="info" href="https://blackrose9.github.io/">Personal Website</Button>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      )
      
   }
}

export default Links;