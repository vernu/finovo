import { Divider, Grid, Stack, Typography } from '@mui/material'
import LoginForm from '../components/auth/LoginForm'
import { withDefaultLayout } from '../HOC/withDefaultLayout'
const Login = () => {
  return (
    <>
      <Grid
        container
        direction='column'
        justifyContent='flex-end'
        sx={{ minHeight: '100vh' }}
        style={{
          background: '#EEF2F6',
        }}
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
                background: '#FFFFFF',
                padding: '16px',
                borderRadius: '10px',
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
                    // direction={matchDownSM ? 'column-reverse' : 'row'}
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
                  <LoginForm />
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
                    Don&apos;t have an account?
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          {/* <AuthFooter /> */}
        </Grid>
      </Grid>
    </>
  )
}

export default withDefaultLayout(Login)
