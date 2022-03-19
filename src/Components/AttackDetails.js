import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import { PlatformsBox, DescriptionCard, attackPhases } from '../Utils'


/**
 * AttackDetails is a functional component which handles
 * and renders the chosen attack details page.
 * @author Alon Barenboim 
 */
function AttackDetails (props) {
  let dataObject = props.location.state.data;
  function PlatformContainer (PlatformsBox) {
    return (
      <Box sx={{ justifySelf: 'flex-end', margin: 1, maxWidth: 400 }}>
        <Card variant='outlined'>
          {PlatformsBox(dataObject.x_mitre_platforms)}
        </Card>
      </Box>
    )
  }
  function PhaseContainer (attackPhases) {
    return (
      <Box sx={{ justifySelf: 'flex-end', margin: 1 }}>
        <Card variant='outlined'>
          {attackPhases(dataObject.phase_names)}
        </Card>
      </Box>
    )
  }
  function BreadcrumbsContainer () {
    return (
      <Breadcrumbs aria-label='breadcrumb' sx={{ marginBottom: 5 }}>
        <Link underline='hover' color='inherit' href='/'>
          Homepage
        </Link>
        <Typography color='text.primary'>
          {dataObject.Name}
        </Typography>
      </Breadcrumbs>
    )
  }
  return (
    <div className='attack-container'>
      <Box>
        <h3 className='title'>{dataObject.Name}</h3>
      </Box>
      {BreadcrumbsContainer()}
      <Box
        sx={{
          alignSelf: 'flex-start',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        {dataObject.Description ? DescriptionCard(
          dataObject.Description,
          dataObject.x_mitre_detection
        ) : DescriptionCard(
          'Not Found', 'Not Found'
        )}
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {PlatformContainer(PlatformsBox)}
          {PhaseContainer(attackPhases)}
        </Box>
      </Box>
    </div>
  )
}
export default AttackDetails
