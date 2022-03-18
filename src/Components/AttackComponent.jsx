import React from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'

function AttackComponent (props) {
  const AttackInfo = useSelector(state => state.mainReducer.attack)
  var PlatformsCard
  if (AttackInfo.data.x_mitre_platforms) {
    PlatformsCard = AttackInfo.data.x_mitre_platforms
      .split(',')
      .map(platform => {
        let platformSrc = platform + '.png'
        return (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}
          >
            <img
              src={platformSrc}
              alt={platform}
              className='platform-icon'
            ></img>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              {platform}
            </Typography>
          </Box>
        )
      })
  }

  const Platforms = (
    <React.Fragment>
      <CardContent>
        <Typography variant='h4' component='div'>
          Affected Platforms
        </Typography>
        <Box sx={{ display: 'flex' }} color='text.secondary'>
          {PlatformsCard ? PlatformsCard : null}
        </Box>
      </CardContent>
    </React.Fragment>
  )
  const attackPhases = (
    <React.Fragment>
      <CardContent>
        <Typography variant='h4' component='div'>
          Phases
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {AttackInfo.data.phase_names}
        </Typography>
      </CardContent>
    </React.Fragment>
  )
  const cardDescription = (
    <React.Fragment>
      <CardContent>
        <Typography variant='h4' component='div'>
          Attack Description
        </Typography>
        <p dangerouslySetInnerHTML={{ __html: AttackInfo.data.Description }} />
        <Typography variant='h4' component='div'>
          Detection Process
        </Typography>
        <p
          dangerouslySetInnerHTML={{
            __html: AttackInfo.data.x_mitre_detection
          }}
        />
      </CardContent>
    </React.Fragment>
  )
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
          <Card variant='outlined'>{cardDescription}</Card>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ justifySelf: 'flex-end', margin: 1, maxWidth: 400 }}>
            <Card variant='outlined'>{Platforms}</Card>
          </Box>
          <Box sx={{ justifySelf: 'flex-end', margin: 1 }}>
            <Card variant='outlined'>{attackPhases}</Card>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
export default AttackComponent
