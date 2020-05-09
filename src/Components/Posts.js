import React, {Component} from 'react'
import axios from 'axios'

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
         </div>
      )
   }
}

export default Posts;