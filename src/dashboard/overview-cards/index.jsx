import React from 'react'
import { overviewData } from './overviewData'

import OverviewCard from './OverviewCard'

function OverviewCards() {
  return (
    <div className='overview-cards'>
      <h2>Overview - Today</h2>
      {overviewData.map((data) => (
        <OverviewCard data={data} />
      ))}
    </div>
  )
}

export default OverviewCards
