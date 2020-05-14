import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class TicTacToe extends Component {
   render(){
      return(
         <Container>
            <Row>
               <Col>
                  <h1>React and I</h1>
                  <p>This project was my first time using React and as initiation demands, I followed <a href="https://reactjs.org/tutorial/tutorial.html">this tutorial</a> and now me and React are friends. <br/> It was interesting to see this language come alive and make sense before my eyes. </p>
               </Col>
               <Col>
               <h1>Play a game of TicTacToe</h1>
               <p>Like a seed germinating and sprouting...</p>
               </Col>
            </Row>
         </Container>
      )
      
   }
}

export default TicTacToe;