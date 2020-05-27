import React from 'react'
import { followerData } from './followerData'

import FollowerCard from './FollowerCard'

function FollowerCards() {
  return (
    <>
      {followerData.map((data, index) => (
        <FollowerCard key={index} data={data} />
      ))}
    </>
  )
}

export default FollowerCards
