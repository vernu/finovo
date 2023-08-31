import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Link from 'next/link'
import RegisterForm from './components/RegisterForm'

const AuthRegister = () => {
  return (
    <>
      <Grid
        container
        direction='column'
        justifyContent='flex-end'
        sx={{ minHeight: '100vh' }}
      >
        <Grid item xs={12}>
          <Grid
            container
            justifyContent='center'
            alignItems='center'
            sx={{ minHeight: 'calc(100vh - 68px)' }}
          >
            <Grid
              item
              sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}
              xs={10}
              md={6}
              lg={4}
              style={{
                background: '#FFFFFF22',
                padding: '16px',
                borderRadius: '10px',
                border: '1px solid #5555555',
              }}
            >
              <Grid
                container
                spacing={2}
                alignItems='center'
                justifyContent='center'
              >
                <Grid item xs={12}>
                  <Grid
                    container
                    direction={'row'}
                    alignItems='center'
                    justifyContent='center'
                  >
                    <Grid item>
                      <Stack
                        alignItems='center'
                        justifyContent='center'
                        spacing={1}
                      ></Stack>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <RegisterForm />
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    item
                    container
                    direction='column'
                    alignItems='center'
                    xs={12}
                  >
                    <Link href='/login' passHref>Login Instead?</Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default AuthRegister
