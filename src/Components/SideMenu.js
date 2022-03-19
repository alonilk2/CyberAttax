import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FILTER_RESULTS } from '../Constants'
import t from 'prop-types'
/**
 * SearchBox is a functional component that renders and manages
 * the description search box
 * @author Alon Barenboim
 */
function SearchBox () {
  const dispatch = useDispatch()
  const DataInstance = useSelector(state => state.mainReducer.data) //DataInstance contains the data fetched from the server
  return (
    <input
      className='search-input'
      placeholder='Search in Description'
      onChange={e =>
        dispatch({
          type: FILTER_RESULTS,
          rows: e.target.value,
          data: DataInstance
        })
      }
    />
  )
}
/**
 * Side Menu is a functional component that renders
 * and manages the left menu component
 * @author Alon Barenboim
 */
function SideMenu (props) {
  return (
    <>
      <h1 className='title'>
        Cyber<span className='sec-color'>Attax</span>
      </h1>
      {props.showSearch ? SearchBox() : null} {/* Search box appears only when showSearch=true (only on AttackListView) */}
    </>
  )
}

export default SideMenu
