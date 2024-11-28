import React from 'react'
import Feed from './Feed'
const Home = ({searchResults}) => {
  return (
    <main className='Home'>
        {searchResults.length ?(
          <Feed post={searchResults}/>
        ):
        (
          <p style={{marginTop:"2rem"}}>No posts to display</p>
        )
      }
        </main>
  )
}

export default Home