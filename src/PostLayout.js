import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const  PostLayout= () => {
  return (
    <div>

        <Link to="/postpage/1">Post1</Link><br></br>
      <Link to="/postpage/2">Post2</Link><br></br>
      <Link to="/postpage/3">Post3</Link><br></br>
      <Link to="/postpage/newpost">New Post</Link><br></br>
      <Outlet/>
    </div>
   
  )
}

export default  PostLayout