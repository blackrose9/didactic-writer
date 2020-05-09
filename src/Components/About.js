import React, {Component} from 'react'
import { render } from '@testing-library/react'

export class About extends Component {
   render(){
      return(
         <div>
            <h1>About Me</h1>
            <p>My name is Sarah, I am developer by profession and a writer because me and words... that's a love story for another day<br/>
            I am a gamer by design, and an adventurer ny nature because apparently that's what being Sagittarius is all about.
            </p>
         </div>
      )
      
   }
}

export default About;