import React from 'react'
import '../App.css'
import '../CSS/index.css'
import AttackDetails from '../Components/AttackDetails'
import SideMenu from '../Components/SideMenu'

function AttackListView (props) {
  return (
    <div className='App'>
      <div className='App-body'>
        <div className='side-menu'>
          <SideMenu />
        </div>
        <div className='list-container'>
          <AttackDetails {...props} />
        </div>
      </div>
    </div>
  )
}

export default AttackListView
