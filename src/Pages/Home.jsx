import React from 'react'
import Hero from '../component/layout/Hero'
import GenderCollection from '../Products/GenderCollection'
import New from '../Products/New'

function Home() {
  return (
    <div>
        <Hero/>
        <GenderCollection/>
        <New/>
    </div>
  )
}

export default Home