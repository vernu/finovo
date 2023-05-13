import { Mediation, SettingsOverscan, Token } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Icon from '@mui/material/Icon'
import Stack from '@mui/material/Stack'
import Link from 'next/link'
import { HiArrowSmRight } from 'react-icons/hi'

function HeroSection() {
  return (
    <Box component='section' py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container alignItems='center'>
          <Grid item xs={12} lg={5}>
            <Typography variant='h3' my={1}>
              Manage you finances with ease
            </Typography>
            <Typography variant='body2' color='text' mb={2}>
              Budget, track and manage your finances with ease in one place.
              With our app, you can manage your finances in one place. You can
              also import and export your data with ease.
            </Typography>
            <Button
              component={Link}
              href='/login'
              variant='contained'
              color='primary'
              sx={{
                borderRadius: 999,
                textTransform: 'none',
              }}
              endIcon={<HiArrowSmRight size={16} />}
            >
              Sign up now!
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{ ml: { xs: -2, lg: 'auto' }, mt: { xs: 6, lg: 0 } }}
          >
            <Stack>
              <Box display='flex' alignItems='center' p={2}>
                <Box
                  sx={{
                    width: '3rem',
                    height: '3rem',
                    background: '#eeeeee',
                    color: 'white',
                    coloredShadow: 'info',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 'xl',
                  }}
                >
                  <Icon fontSize='small'>
                    <Mediation />
                  </Icon>
                </Box>
                <Typography variant='body2' color='text' pl={2}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Quisquam, voluptatibus.
                </Typography>
              </Box>
              <Box display='flex' alignItems='center' p={2}>
                <Box
                  sx={{
                    width: '3rem',
                    height: '3rem',
                    background: '#eeeeee',
                    color: 'white',
                    coloredShadow: 'info',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 'xl',
                  }}
                >
                  <Icon fontSize='small'>
                    <SettingsOverscan />
                  </Icon>
                </Box>
                <Typography variant='body2' color='text' pl={2}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Quisquam, voluptatibus.
                </Typography>
              </Box>
              <Box display='flex' alignItems='center' p={2}>
                <Box
                  sx={{
                    width: '3rem',
                    height: '3rem',
                    variant: 'gradient',
                    background: '#eeeeee',
                    color: 'white',
                    coloredShadow: 'info',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 'xl',
                  }}
                >
                  <Icon fontSize='small'>
                    <Token />
                  </Icon>
                </Box>
                <Typography variant='body2' color='text' pl={2}>
                  adipisicing elit.
                  <br />
                  Lorem ipsum dolor sit amet consectetur
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HeroSection
