import React, {Component} from 'react';
import PostItem from './PostItem'

const BLOGID = '1462989236198393176';
const APIKEY = 'AIzaSyATmL86iRDf6Z1xbiBhI4ox_4M-F3T8i0Q';

export class BlogPosts extends Component{
   state = {
      posts: []
   }
   componentDidMount(){
      fetch(`https://www.googleapis.com/blogger/v3/blogs/${BLOGID}/posts?key=${APIKEY}`)
      .then(res => res.json())
      .then((data) => {
         this.setState({ posts: data.items})
      })
      .catch(console.log)
   }
   render(){
      return (
         <PostItem posts={this.state.posts}/>
      )
   }
}

export default BlogPosts;