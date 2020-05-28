import React, { useState } from 'react'

import DarkModeToggle from './dark-mode-toggle'
import FollowerCards from './follower-cards'
import OverviewCards from './overview-cards'

function Dashboard() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`dashboard ${darkMode && 'dark'}`}>
      <header>
        <div className='title'>
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </div>
        <DarkModeToggle toggleDarkMode={toggleDarkMode} />
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
