import React from 'react'
import { Link, useParams } from 'react-router-dom'

const PostPage = ({post, handleDelete}) => {

  const{id}=useParams();
  const posts=post.find(post=>(post.id).toString()===id)
  return (
    <main className='PostPage'>
      <article className='post'>
        {posts &&
          <>
          <h2>{posts.title}</h2>
          <p className='postDate'>{posts.datetime}</p>
          <p className='postBody'>{posts.body}</p>
          <Link to={`/edit/${posts.id}`}><button className='editbutton' style={{backgroundColor:'skyblue'}}>Edit Post</button></Link>
          <button className='deletebutton' onClick={()=>handleDelete(posts.id)} style={{backgroundColor:'red'}}>Delete Post</button>
          </>
        }
        {!posts && 
        <>
          <h2>Post Not Found</h2>
          <p>Well, That's dissappointing...</p>
          <p><Link to='/'>Visit our homepage</Link></p>
        </>

        }

      </article>
       
          </main>
  )
}

export default PostPage