import React from 'react'
import { overviewData } from './overviewData'

import OverviewCard from './OverviewCard'

function OverviewCards() {
  return (
    <div className='overview-cards'>
      <h2>Overview - Today</h2>
      <div className='overview-cards-wrapper'>
        {overviewData.map((data) => (
          <OverviewCard data={data} />
        ))}
      </div>
    </div>
  )
}

export default OverviewCards
