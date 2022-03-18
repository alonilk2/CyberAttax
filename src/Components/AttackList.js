import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid'
import AttackComponent from './AttackComponent'
import { DISPLAY_ATTACK } from '../Constants'
import LinearProgress from '@mui/material/LinearProgress'

function AttackList () {
  const DataInstance = useSelector(state => state.mainReducer.data)
  const Filter = useSelector(state => state.mainReducer.rows)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  var columns: GridColDef[] = [
    { field: 'col1', headerName: 'Attack Name', width: 350 },
    { field: 'col2', headerName: 'Attack Description', width: 600 }
  ]
  if (DataInstance) {
    var rows: GridRowsProp = []
    DataInstance.forEach((attack, index) => {
      if (Filter) {
        if (attack.Description) {
          if (attack.Description.includes(Filter))
            rows.push({
              id: attack.id,
              col1: attack.Name,
              col2: attack.Description,
              data: attack
            })
        }
      } else {
        rows.push({
          id: attack.id,
          col1: attack.Name,
          col2: attack.Description,
          data: attack
        })
      }
    })
  }

  useEffect(() => {
    if (DataInstance) setLoading(false)
  }, [DataInstance])
  const handleRowClick = params => {
    dispatch({ type: DISPLAY_ATTACK, payload: params, data: DataInstance })
  }

  return (
    <div
      style={{
        height: 800,
        width: '100%',
        backgroundColor: '#FAFFFD'
      }}
    >
      <DataGrid
        rows={rows}
        components={{
          LoadingOverlay: LinearProgress
        }}
        loading={loading}
        columns={columns}
        onCellClick={handleRowClick}
      />
    </div>
  )
}
export default AttackList
