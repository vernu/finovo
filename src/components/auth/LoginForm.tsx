import { useState } from 'react'

import { useTheme } from '@mui/material/styles'
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import {
  removeAccessToken,
  removeCurrentUser,
} from '../../utils/localStorageUtils'
import { toast } from 'react-hot-toast'
import Router from 'next/router'
import { updateAuthState } from '../../store/slices/auth.slice'
import { useMutation } from '@apollo/client'
import { LOGIN_MUTATION } from '../../lib/graphql/queries'
import { useAppDispatch } from '../../store/hooks'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const LoginForm = ({ ...others }) => {
  const theme = useTheme()
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'))

  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  const dispatch = useAppDispatch()

  const [mutate, { error, data, loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted: (data) => {
      console.log(data)
      dispatch(
        updateAuthState({
          accessToken: data.login.token,
          currentUser: data.login.user,
        })
      )
      toast.success('Login successful')
      Router.push('/dashboard')
    },
    onError: (err) => {
      toast.error(err.message)
      removeCurrentUser()
      removeAccessToken()
    },
  })

  const handleChange = (e: any) => {
    e.preventDefault()
    const { name, value } = e.target
    setCredentials({
      ...credentials,
      [name]: value,
    })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    mutate({
      variables: credentials,
    })
  }

  const handleLoginWithGoogle = (event: any) => {
    event.preventDefault()
    console.log('Login with Google')
  }
  return (
    <>
      <Grid container direction='column' justifyContent='center' spacing={2}>
        <Grid item xs={12}>
          <Button
            disableElevation
            fullWidth
            onClick={handleLoginWithGoogle}
            size='large'
            variant='outlined'
            sx={{
              color: 'grey.700',
              backgroundColor: theme.palette.grey[50],
              borderColor: theme.palette.grey[50],
            }}
          >
            <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
              <img
                src={'/icons/google.svg'}
                alt='google'
                width={16}
                height={16}
                style={{ marginRight: matchDownSM ? 8 : 16 }}
              />
            </Box>
            Continue with Google
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <Divider sx={{ flexGrow: 1 }} orientation='horizontal' />

            {' or '}

            <Divider sx={{ flexGrow: 1 }} orientation='horizontal' />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          container
          alignItems='center'
          justifyContent='center'
        >
          <Box sx={{ mb: 2 }}>
            <Typography variant='subtitle1'>
              Sign in with Email and password
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <form>
        <FormControl fullWidth>
          <InputLabel>Email</InputLabel>
          <OutlinedInput
            type='email'
            value={credentials.email}
            name='email'
            onChange={handleChange}
            label='Email'
            inputProps={{}}
          />
        </FormControl>

        <FormControl
          fullWidth
          style={{
            marginTop: 16,
          }}
        >
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            type={showPassword ? 'text' : 'password'}
            value={credentials.password}
            name='password'
            onChange={handleChange}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  onClick={() => togglePasswordVisibility()}
                  edge='end'
                  size='large'
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label='Password'
            inputProps={{}}
          />
        </FormControl>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          spacing={1}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={true}
                onChange={(e) => {}}
                name='checked'
                color='primary'
              />
            }
            label='Remember me'
          />
          <Typography
            variant='subtitle1'
            color='secondary'
            sx={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            Forgot Password?
          </Typography>
        </Stack>
        <Box sx={{ mt: 3 }}>
          <FormHelperText error>{error?.message}</FormHelperText>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Button
            disableElevation
            onClick={handleSubmit}
            disabled={loading}
            fullWidth
            size='large'
            variant='contained'
            color='primary'
          >
            {loading ? <CircularProgress size={25} /> : 'Sign in'}
          </Button>
        </Box>
      </form>
    </>
  )
}

export default LoginForm
