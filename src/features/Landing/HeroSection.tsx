import { Login, Mediation, SettingsOverscan, Token } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Icon from '@mui/material/Icon'
import Stack from '@mui/material/Stack'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowSmRight } from 'react-icons/hi'

function HeroSection() {
  return (
    <Box component='section' py={{ xs: 4, md: 16 }}>
      <Container>
        <Grid container alignItems='center' columnSpacing={12}>
          <Grid item xs={12} lg={6}>
            <Grid container spacing={1}>
              <Grid item xs={5} md={4}>
                <Image
                  src='/illustration1.png'
                  alt='Description of the image'
                  width={150}
                  height={150}
                />
              </Grid>
              <Grid
                item
                xs={7}
                md={8}
                display='flex'
                flexDirection='column'
                justifyContent='center'
              >
                {' '}
                <Typography variant='h5' my={1}>
                  Manage your personal finance with ease
                </Typography>{' '}
                <Typography
                  variant='body2'
                  color='gray'
                  mb={2}
                  textAlign='justify'
                >
                  Budget, track and manage your finances with ease in one place.
                </Typography>
                <Box>
                  <Button
                    component={Link}
                    href='/login'
                    variant='contained'
                    color='primary'
                    sx={{
                      borderRadius: 999,
                      textTransform: 'none',
                    }}
                    startIcon={<Login />}
                  >
                    Sign up now!
                  </Button>
                  {/* <Button
                    variant='text'
                    color='primary'
                    sx={{
                      borderRadius: 999,
                      textTransform: 'none',
                    }}
                  >
                    How it works!
                  </Button> */}
                </Box>
              </Grid>
            </Grid>
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
                  Create budgets and track your expenses
                  <br />
                  Budget on monthly or annual basis
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
                  Add recurring expenses and incomes only once
                  <br />
                  Let the app do the work for you
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
                  Import and export your data
                  <br />
                  CSV and Google Spreadsheet support
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
