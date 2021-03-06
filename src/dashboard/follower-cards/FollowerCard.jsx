import React from 'react'
import upArrow from '../img/icon-up.svg'
import downArrow from '../img/icon-down.svg'

function FollowerCard({ data }) {
  return (
    <div className={`card-wrapper ${data.site}`}>
      <div className='follower-card'>
        <div className='card-header'>
          <img
            src={data.icon}
            className='social-icon'
            alt={`${data.site} icon`}
          />
          <div className='social-handle'>{data.handle}</div>
        </div>
        <div className='follower-count'>
          {data.count}
          <span>{data.site === 'youtube' ? 'subscribers' : 'followers'}</span>
        </div>
        <footer className={data.difference >= 0 ? 'increase' : 'decrease'}>
          <img
            src={data.difference >= 0 ? upArrow : downArrow}
            alt={`${data.difference >= 0 ? 'Up' : 'Down'} arrow icon`}
          />{' '}
          {Math.abs(data.difference)} Today
        </footer>
      </div>
    </div>
  )
}

export default FollowerCard
