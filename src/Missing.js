import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='Missing'>
      <h2>Page Not Found</h2>
      <p>Well, That's Dissappointing!</p>
      <Link to='/'><p>Visit our home page</p></Link>  
        </main>
  )
}

export default Missing