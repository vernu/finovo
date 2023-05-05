import { gql, useMutation } from '@apollo/client'
import { Button, Grid, TextField } from '@mui/material'
import Router from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {
  removeAccessToken,
  removeCurrentUser,
  setAccessToken,
} from '../../lib/utils/localStorageUtils'
import { useAppDispatch } from '../../store/hooks'
import { updateAuthState } from '../../store/slices/auth.slice'

export default function LoginForm() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  const LOGIN_MUTATION = gql`
    mutation Login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        user {
          id
          name
          email
        }
        token
      }
    }
  `

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

  return (
    <>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        style={{ minHeight: '100vh', background: '#f5f5f5' }}
      >
        <form
          onSubmit={handleSubmit}
          style={{ minWidth: '350px', padding: '20px' }}
        >
          <TextField
            label='email'
            name='email'
            variant='filled'
            value={credentials.email}
            onChange={handleChange}
            fullWidth
          />
          <br />
          <TextField
            label='Password'
            name='password'
            variant='filled'
            type='password'
            value={credentials.password}
            onChange={handleChange}
            fullWidth
          />
          <br />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            disabled={loading}
          >
            Login
          </Button>
        </form>
      </Grid>
    </>
  )
}
