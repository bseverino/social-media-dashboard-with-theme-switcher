import React from 'react'

function DarkModeToggle({ toggleDarkMode }) {
  return (
    <div className='dark-mode'>
      <label>Dark Mode</label>
      <div className='dark-mode-toggle' onClick={toggleDarkMode}>
        <div className='dark-mode-button' />
      </div>
    </div>
  )
}

export default DarkModeToggle
