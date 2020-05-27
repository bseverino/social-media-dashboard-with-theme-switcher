import React from 'react'

import FollowerCard from './follower-card'

function Dashboard() {
  return (
    <>
      <header>
        <div>
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </div>
        <div>
          <p>Dark Mode</p>
        </div>
      </header>
      <main>
        <FollowerCard />
        <h2>Overview - Today</h2>
      </main>
      <footer>
        Challenge by{' '}
        <a href='https://www.frontendmentor.io?ref=challenge'>
          Frontend Mentor
        </a>
        . Coded by <a href='https://bseverino.com'>Bianca Severino</a>.
      </footer>
    </>
  )
}

export default Dashboard
