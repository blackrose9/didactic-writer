import React, {Component} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import './component.css';

export class Posts extends Component {
   state = {
      posts: [],
      isLoaded: false
   }

   componentDidMount () {
      axios.get('')
      .then(res => this.setState({
         posts:res.data,
         isLoaded: true
      }))
      .catch(err => console.error(err))
   }

   render(){
      console.log(this.state);
      return (
         <div>
            <h1>Stuff I write</h1>
            <p>Here will be where a list of the stuff I have written. Called using Wordpress Headless CMS <br/> So exciting!</p>
            <Card>
               <Card.Body>
                  <blockquote className="blockquote mb-0">
                     <p>
                     {' '}
                     This is a small snippet of what the post is about, lol.{' '}
                     </p>
                     <footer className="blockquote-footer">
                     ExtraordinaryMonk's <cite title="Source Title"><a href="#">ThePrincessAndThePauper</a></cite>
                     </footer>
                  </blockquote>
               </Card.Body>
            </Card>
            <Card>
               <Card.Body>
                  <blockquote className="blockquote mb-0">
                     <p>
                     {' '}
                     Another small snippet of what the post is about, lol.{' '}
                     </p>
                     <footer className="blockquote-footer">
                     ExtraordinaryMonk's <cite title="Source Title"><a href="#">RoundhouseKick</a></cite>
                     </footer>
                  </blockquote>
               </Card.Body>
            </Card>
         </div>
      )
   }
}

export default Posts;