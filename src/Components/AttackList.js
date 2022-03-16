import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid'



function AttackList () {
  var rows: GridRowsProp = []
  var columns: GridColDef[] = [
    { field: 'col1', headerName: 'Attack Name', width: 250 },
    { field: 'col2', headerName: 'Attack Description', width: 300 }
  ]
  const DataInstance = useSelector(state => state.mainReducer.data)

  if(DataInstance){
      DataInstance.forEach((attack, index) => {
          console.log(attack)
        rows.push({id: attack.id, col1: attack.Name, col2: attack.Description})
      })
  }

  return (
    <div style={{ height: 800, width: '30%', backgroundColor: '#111A34', borderRadius: '20px'}}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  )
}
export default AttackList
