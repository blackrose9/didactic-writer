import React from 'react';
import { NavLink } from "react-router-dom"

const Navigation = () => {
   return (
      <div>
         <NavLink to='/'>Home</NavLink>
         <NavLink to='/posts'>Articles</NavLink>
         <NavLink to='/links'>My Links</NavLink>
      </div>
   )
}

export default Navigation;