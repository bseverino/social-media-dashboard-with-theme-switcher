import React from 'react'
import { followerData } from './followerData'

import FollowerCard from './FollowerCard'

function FollowerCards() {
  return (
    <div className='follower-cards'>
      {followerData.map((data, index) => (
        <FollowerCard key={index} data={data} />
      ))}
    </div>
  )
}

export default FollowerCards
