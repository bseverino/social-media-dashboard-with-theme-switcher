import React from 'react'

import FollowerCards from './follower-cards'
import OverviewCards from './overview-cards'

function Dashboard() {
  return (
    <div className='dashboard dark'>
      <header>
        <div className='title'>
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </div>
        <div className='dark-mode'>
          <label>Dark Mode</label>
          <div className='dark-mode-toggle'>
            <div className='dark-mode-button' />
          </div>
        </div>
      </header>
      <main>
        <FollowerCards />
        <OverviewCards />
      </main>
      <footer className='attribution'>
        Challenge by{' '}
        <a href='https://www.frontendmentor.io?ref=challenge'>
          Frontend Mentor
        </a>
        . Coded by <a href='https://bseverino.com'>Bianca Severino</a>.
      </footer>
    </div>
  )
}

export default Dashboard
