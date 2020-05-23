import React from 'react';
import Card from 'react-bootstrap/Card'

const PostItem = ({posts}) => {
   return(
      <div className='Section-posts'>
         <h1>Stuff I write</h1>
         <p>Here will be where a list of the stuff I have written. Called using Blogger API <br/> So exciting!</p>

         {posts.map((post) => (
            <Card>
               <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                     <Card.Subtitle><a href={post.url}>See this post</a></Card.Subtitle>
                     <footer className="blockquote-footer">
                     {post.author.displayName}
                     </footer>
               </Card.Body>
            </Card>
         ))}
      </div>
   )
}

export default PostItem;