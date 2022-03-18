import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FILTER_RESULTS } from '../Constants'
import t from 'prop-types'
/**
 * Side Menu is a functional component that renders 
 * and manages the left menu component and the search bar inside it.
 * @author Alon Barenboim
 */
function SideMenu () {
  const [input, setInput] = useState()

  const dispatch = useDispatch()
  const DataInstance = useSelector(state => state.mainReducer.data) //DataInstance contains the data fetched from the server

  return (
    <>
      <h1 className='title'>
        Cyber<span className='sec-color'>Attax</span>
      </h1>
      <input
        className='search-input'
        placeholder='Search in Description'
        onChange={e =>
          dispatch({ type: FILTER_RESULTS, rows: e.target.value, data: DataInstance })
        }
      />
    </>
  )
}

export default SideMenu
