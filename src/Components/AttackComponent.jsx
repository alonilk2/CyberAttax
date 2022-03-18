import React from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import {PlatformsBox, cardDescription, attackPhases} from '../Utils'


function AttackComponent (props) {
  const AttackInfo = useSelector(state => state.mainReducer.attack)

  
  return (
    <div className='attack-container'>
      <Box>
        <h3 className='title'>{AttackInfo.col1}</h3>
      </Box>
      <Breadcrumbs aria-label='breadcrumb' sx={{ marginBottom: 5 }}>
        <Link underline='hover' color='inherit' href='/'>
          Homepage
        </Link>
        <Typography color='text.primary'>{AttackInfo.col1}</Typography>
      </Breadcrumbs>
      <Box
        sx={{
          alignSelf: 'flex-start',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ maxWidth: '70%' }}>
          <Card variant='outlined'>{cardDescription(AttackInfo.data.Description,AttackInfo.data.x_mitre_detection)}</Card>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ justifySelf: 'flex-end', margin: 1, maxWidth: 400 }}>
            <Card variant='outlined'>{PlatformsBox(AttackInfo.data.x_mitre_platforms)}</Card>
          </Box>
          <Box sx={{ justifySelf: 'flex-end', margin: 1 }}>
            <Card variant='outlined'>{attackPhases(AttackInfo.data.phase_names)}</Card>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
export default AttackComponent
