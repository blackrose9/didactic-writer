import React, {Component} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

 import blogger from '../img/blogger1.png'
 import em from '../img/em.jpg'
 import me from '../img/me.png'

export class Links extends Component {
   render(){
      return(
         <Container>
            <h1>Check out other stuff I have done</h1>
            <Row>
               <Col>
                  <Card style={{ width: '20rem' }}>
                     <Card.Img variant="top" src={blogger}/>
                     <Card.Body>
                        <Card.Title>Blogger</Card.Title>
                        <Card.Text>
                           This is my main blog where I write.
                        </Card.Text>
                        <Button variant="info" href="https://blackrose722.blogspot.com/">Visit Blog</Button>
                     </Card.Body>
                  </Card>
               </Col>
               <Col>
                  <Card style={{ width: '20rem' }}>
                     <Card.Img variant="top" src={em}/>
                     <Card.Body>
                        <Card.Title>Extraordinary Monk</Card.Title>
                        <Card.Text>
                           This is another blog where I write, I guess more meaningful stuff, I guess.
                        </Card.Text>
                        <Button variant="info" href="https://extraordinarymonk.wordpress.com/">Visit Blog</Button>
                     </Card.Body>
                  </Card>
               </Col>
               <Col>
                  <Card style={{ width: '20rem' }}>
                     <Card.Img variant="top" src={me}/>
                     <Card.Body>
                        <Card.Title>My Website</Card.Title>
                        <Card.Text>
                           Take a look at the other side of my life.
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