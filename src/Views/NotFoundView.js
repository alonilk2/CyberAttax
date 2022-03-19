import React from 'react'
import '../App.css'
import '../CSS/index.css'

import SideMenu from '../Components/SideMenu'

function NotFoundView () {
  return (
    <div className='App'>
      <div className='App-body'>
        <div className='side-menu'>
          <SideMenu />
        </div>
        <div className='list-container'>
          <h1> Error 404: Page Not Found </h1>
        </div>
      </div>
    </div>
  )
}

export default NotFoundView
