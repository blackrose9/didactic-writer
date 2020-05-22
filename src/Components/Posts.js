import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import './component.css';

const BLOGID = '1462989236198393176';
const APIKEY = 'AIzaSyATmL86iRDf6Z1xbiBhI4ox_4M-F3T8i0Q';

export class Posts extends Component {
   state = {
      posts: []
   }
   componentDidMount(){
      // https://www.googleapis.com/blogger/v3/blogs/1462989236198393176/posts?key=AIzaSyATmL86iRDf6Z1xbiBhI4ox_4M-F3T8i0Q
      fetch('https://www.googleapis.com/blogger/v3/blogs/BLOGID/posts?key=APIKEY')
      .then(res => res.json())
      .then((data) => {
         this.setState({ posts: data})
      })
      .catch(console.log)
   }
   render(){
      return (
         <div className='Section-posts'>
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