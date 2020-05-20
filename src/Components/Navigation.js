import React from 'react';
import { NavLink } from "react-router-dom"
import Nav from 'react-bootstrap/Nav'

const Navigation = () => {
   return (
      <div>
         <Nav variant='tabs' defaultActivityKey='/'>
            <Nav.Item>
               <Nav.Link><NavLink to='/'>Home</NavLink></Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link><NavLink to='/posts'>Articles</NavLink></Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link><NavLink to='/links'>My Links</NavLink></Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link><NavLink to='/game'>A Game</NavLink></Nav.Link>
            </Nav.Item>
         </Nav>
      </div>
   )
}

export default Navigation;