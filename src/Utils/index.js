import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import CardContent from '@mui/material/CardContent'

function RenderPlatformIcons (platforms) {
    console.log(platforms)
  if (platforms) {
      console.log(platforms)
    var PlatformsCard = platforms.split(',').map(platform => {
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
          <img src={platformSrc} alt={platform} className='platform-icon'></img>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            {platform}
          </Typography>
        </Box>
      )
    })
    return PlatformsCard
  }
}

export const PlatformsBox = (platforms) => (
    <React.Fragment>
      <CardContent>
        <Typography variant='h4' component='div'>
          Affected Platforms
        </Typography>
        <Box sx={{ display: 'flex' }} color='text.secondary'>
          {RenderPlatformIcons(platforms)}
        </Box>
      </CardContent>
    </React.Fragment>
  )
  export const attackPhases = (phase_names) =>(
    <React.Fragment>
      <CardContent>
        <Typography variant='h4' component='div'>
          Phases
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {phase_names}
        </Typography>
      </CardContent>
    </React.Fragment>
  )
  export const cardDescription = (description, detection) => (
    <React.Fragment>
      <CardContent>
        <Typography variant='h4' component='div'>
          Attack Description
        </Typography>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <Typography variant='h4' component='div'>
          Detection Process
        </Typography>
        <p
          dangerouslySetInnerHTML={{
            __html: detection
          }}
        />
      </CardContent>
    </React.Fragment>
  )