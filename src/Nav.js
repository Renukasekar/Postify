import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({search, setSearch}) => {
  return (
    <nav className='Nav'>
      <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='searchbox'>Search Posts</label>
        <input
        id='searchbox'
        placeholder='search posts'
        type='text'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        ></input>

      </form>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='post'>Post</Link></li>
          <li><Link to='about'>About</Link></li>
        </ul>
        </nav>
  )
}

export default Nav