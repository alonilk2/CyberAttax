import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import './CSS/index.css'
import { useDispatch, useSelector } from 'react-redux'
import { FetchDataFromDB } from './Actions'

import AttackList from './Components/AttackList'
import SideMenu from './Components/SideMenu'

import AttackComponent from './Components/AttackComponent'

function App () {
  const DataInstance = useSelector(state => state.data)
  const DisplayAttack = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FetchDataFromDB())
    if (DataInstance) {
      if (DataInstance.error) {
        console.log(DataInstance.error)
      }
    }
  }, [])
  const renderMainContainer = () => {
    if (DisplayAttack) {
      if (DisplayAttack.mainReducer.display) return <AttackComponent />
      else return <AttackList />
    } else return <AttackList />
  }
  return (
    <div className='App'>
      <div className='App-body'>
        <div className='side-menu'>
          <SideMenu />
        </div>
        <div className='list-container'>{renderMainContainer()}</div>
      </div>
    </div>
  )
}

export default App
