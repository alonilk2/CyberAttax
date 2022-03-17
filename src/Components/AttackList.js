import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid'
import AttackComponent from './AttackComponent'
import { DISPLAY_ATTACK } from '../Constants'

function AttackList () {
  const dispatch = useDispatch()

  var rows: GridRowsProp = []
  var columns: GridColDef[] = [
    { field: 'col1', headerName: 'Attack Name', width: 350 },
    { field: 'col2', headerName: 'Attack Description', width: 600 }
  ]
  const DataInstance = useSelector(state => state.mainReducer.data)

  if (DataInstance) {
    DataInstance.forEach((attack, index) => {
      rows.push({ id: attack.id, col1: attack.Name, col2: attack.Description })
    })
  }

  const handleRowClick = params => {
    dispatch({ type: DISPLAY_ATTACK, payload: params })
  }
  return (
    <div
      style={{
        height: 800,
        width: '100%',
        backgroundColor: '#434655',
        borderRadius: '20px'
      }}
    >
      <DataGrid rows={rows} columns={columns} onCellClick={handleRowClick} />
    </div>
  )
}
export default AttackList
