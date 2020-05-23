import React from 'react';
import { NavLink } from "react-router-dom"
import Nav from 'react-bootstrap/Nav'

const Navigation = () => {
   return (
      <div>
         <Nav variant='tabs' defaultActivityKey='/'>
            <Nav.Item>
               <Nav.Link><NavLink to='/'><h5>Home</h5></NavLink></Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link><NavLink to='/posts'><h5>Articles</h5></NavLink></Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link><NavLink to='/links'><h5>My Links</h5></NavLink></Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link><NavLink to='/game'><h5>A Game</h5></NavLink></Nav.Link>
            </Nav.Item>
         </Nav>
      </div>
   )
}

export default Navigation;