import React, { useState } from 'react'
import { Grid, TextField, Button } from '@mui/material'
import LoginForm from '../components/auth/LoginForm'
import { withDefaultLayout } from '../HOC/withDefaultLayout'

const Login = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            style={{ minHeight: '100vh', background: '#f5f5f5' }}
          >
            Login and Manage your finances now!
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <LoginForm />
        </Grid>
      </Grid>
    </>
  )
}

export default withDefaultLayout(Login)
