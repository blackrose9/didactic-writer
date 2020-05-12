import React, {Component} from 'react';
import axios from 'axios';
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
            <div className="postContainer">
                  <h3>PostTitle</h3>
                  <p>This is a small snippet of what the post is about, lol</p>
                  <a href="#">Check this post out</a>
            </div>
         </div>
      )
   }
}

export default Posts;