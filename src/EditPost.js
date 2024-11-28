import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const EditPost = ({post,handleEdit,editTitle,setEditTitle,editBody,setEditBody}) => {
  const {id}=useParams()
  const posts=post.find(post=>(post.id).toString()===id);
  useEffect(()=>{
    if(posts)
    {
      setEditTitle(posts.title)
      setEditBody(posts.body)
    }
  },[posts,setEditTitle,setEditBody]
  )
  return (
    <main className='NewPost'>
      {editTitle &&
      <>
      <h2>Edit Post</h2>
      <form className='newPostForm' onSubmit={(e)=>e.preventDefault()}>

          <label htmlFor='postTitle'>Title:</label>
          <input type='text'
          id="postTitle"
          required
          value={editTitle}
          onChange={(e)=>setEditTitle(e.target.value)}/>
          <label htmlFor='postBody'>Post:</label>
          <textarea type='text'
          id="postBody"
          required
          value={editBody}
          onChange={(e)=>setEditBody(e.target.value)}/>
          <button type='submit' onClick={()=>handleEdit(posts.id)}>Submit</button>
        </form>
      </>
        
      }
              {!editTitle && 
        <>
          <h2>Post Not Found</h2>
          <p>Well, That's dissappointing...</p>
          <p><Link to='/'>Visit our homepage</Link></p>
        </>

        }
    </main>
  )
}

export default EditPost