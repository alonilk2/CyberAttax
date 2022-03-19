import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'

/**
 * RenderPlatformIcons is a function which gets the affected platform list for each attack as an input,
 * and returns a JSX object which represents the Platform Icon container, filled with the relevant icons.
 * @author Alon Barenboim
 */
function RenderPlatformIcons (platforms) {
  if (platforms) {
    var PlatformsCard = platforms.split(',').map(platform => {
      let platformSrc = platform + '.png'
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            textAlign: 'center',
            width: '33%'
          }}
        >
          {platform !== 'PRE' ? (
            <img
              src={platformSrc}
              alt={platform}
              className='platform-icon'
            ></img>
          ) : (
            <h3>PRE</h3>
          )}
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            {platform}
          </Typography>
        </Box>
      )
    })
    return PlatformsCard
  }
  return null
}
/**
 * PlatformsBox is a function which returns a platform box with the relevant platforms.
 * @author Alon Barenboim
 */
export const PlatformsBox = platforms => (
  <>
    <CardContent>
      <Typography variant='h4' component='div'>
        Affected Platforms
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }} color='text.secondary'>
        {RenderPlatformIcons(platforms)}
      </Box>
    </CardContent>
  </>
)
/**
 * attackPhases is a function which returns a box with the specific attack's phases.
 * @author Alon Barenboim
 */
export const attackPhases = phase_names => (
  <>
    <CardContent>
      <Typography variant='h4' component='div'>
        Phases
      </Typography>
      <Typography sx={{ mb: 1.5 }} color='text.secondary'>
        {phase_names}
      </Typography>
    </CardContent>
  </>
)
/**
 * DescriptionCard is a function which returns a box with the specific attack's description.
 * @author Alon Barenboim
 */
export const DescriptionCard = (description, detection) => (
  <>
    <Box sx={{ maxWidth: '70%', minWidth: '60%' }}>
      <Card variant='outlined'>
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
      </Card>
    </Box>
  </>
)
