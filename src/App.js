import React, { useEffect } from 'react'
import './App.css'
import './CSS/index.css'
import { useDispatch, useSelector } from 'react-redux'
import AttackListView from './Views/AttackListView'
import { FetchDataFromDB } from './Actions'

/**
 * CyberAttacks app v0.1.0
 * @author Alon Barenboim
 */
function App () {
  const DataInstance = useSelector(state => state.data)
  const dispatch = useDispatch()

  // Initial data fetching action firing
  useEffect(() => {
    dispatch(FetchDataFromDB())
  }, [])

  return <AttackListView />
}

export default App
