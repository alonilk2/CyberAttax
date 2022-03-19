import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid'
import { DISPLAY_ATTACK } from '../Constants'
import LinearProgress from '@mui/material/LinearProgress'
import { history } from '../history'
/**
 * findDataInstanceIdx returns the index of the clicked attack in DataInstance's array.
 */
const findDataInstanceIdx = (DataInstance, params) => {
  let id
  DataInstance.forEach((ins, index) => {
    if (ins.id === params.row.data.id) id = index
  })
  return id
}
function AttackList () {
  const DataInstance = useSelector(state => state.mainReducer.data)
  const Filter = useSelector(state => state.mainReducer.rows)
  const [loading, setLoading] = useState(true)

  var columns: GridColDef[] = [
    { field: 'col1', headerName: 'Attack Name', width: 350 },
    { field: 'col2', headerName: 'Attack Description', width: 600 }
  ]

  const pushAttackToRowsArray = attack => {
    rows.push({
      id: attack.Id,
      col1: attack.Name,
      col2: attack.Description,
      data: attack
    })
  }
  if (DataInstance) {
    var rows: GridRowsProp = []
    DataInstance.forEach((attack, index) => {
      if (Filter) {
        if (attack.Description) {
          if (attack.Description.includes(Filter)) pushAttackToRowsArray(attack)
        }
      } else {
        pushAttackToRowsArray(attack)
      }
    })
  }

  useEffect(() => {
    if (DataInstance) setLoading(false)
  }, [DataInstance])

  const handleRowClick = params => {
    let idx = findDataInstanceIdx(DataInstance, params)
    history.push({
      pathname: '/attackDetails',
      state: { data: DataInstance[idx] }
    })
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
