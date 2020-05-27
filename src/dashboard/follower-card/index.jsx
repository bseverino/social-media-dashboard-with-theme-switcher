import React from 'react'
import facebookIcon from '../img/icon-facebook.svg'
import upArrow from '../img/icon-up.svg'

function FollowerCard(props) {
  return (
    <div className='card-wrapper'>
      <div className='follower-card'>
        <header>
          <img src={facebookIcon} className='social-icon' />
          <div className='social-handle'>@nathanf</div>
        </header>
        <section>
          1987
          <span>followers</span>
        </section>
        <footer>
          <img src={upArrow} /> 12 Today
        </footer>
      </div>
    </div>
  )
}

export default FollowerCard
