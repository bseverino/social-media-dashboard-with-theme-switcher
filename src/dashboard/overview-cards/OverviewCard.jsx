import React from 'react'
import upArrow from '../img/icon-up.svg'
import downArrow from '../img/icon-down.svg'

function OverviewCard({ data }) {
  return (
    <div className='overview-card'>
      <div className='overview-left'>
        <div className='overview-type'>{data.type}</div>
        <div className='overview-count'>{data.count}</div>
      </div>
      <div className='overview-right'>
        <img src={data.icon} alt='' />
        <div
          className={`overview-difference ${
            data.difference >= 0 ? 'increase' : 'decrease'
          }`}
        >
          <img src={data.difference >= 0 ? upArrow : downArrow} alt='' />{' '}
          {Math.abs(data.difference)}%
        </div>
      </div>
    </div>
  )
}

export default OverviewCard
