import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { withDefaultLayout } from '@HOC/withDefaultLayout'

const Custom404 = () => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        style={{ minHeight: '90vh', background: '#f5f5f5' }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant='h4' component='h1' gutterBottom>
            404 - Page Not Found
          </Typography>
          <Typography variant='body1' component='p'>
            The page you are looking for does not exist.
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default withDefaultLayout(Custom404)
