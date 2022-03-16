import React, {useEffect} from 'react'
import logo from './logo.svg'
import './App.css'
import './CSS/index.css'
import { useDispatch, useSelector } from 'react-redux';
import { FetchDataFromDB } from './Actions';

import AttackList from './Components/AttackList'


function App () {
  const DataInstance = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchDataFromDB())
    if(DataInstance){
      if(DataInstance.error){
        console.log(DataInstance.error);
      }
    }
  }, [])
  
  return (
    <div className='App'>
      <header className='App-header'>
        <AttackList />
      </header>
    </div>
  )
}

export default App
