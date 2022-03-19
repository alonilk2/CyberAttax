import React from 'react'
import '../App.css'
import '../CSS/index.css'

import AttackList from '../Components/AttackList'
import SideMenu from '../Components/SideMenu'

function AttackListView () {
  return (
    <div className='App'>
      <div className='App-body'>
        <div className='side-menu'>
          <SideMenu showSearch={true} />
        </div>
        <div className='list-container'>
          <AttackList />
        </div>
      </div>
    </div>
  )
}

export default AttackListView
