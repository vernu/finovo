import { Toolbar, Typography } from '@mui/material'
import Router from 'next/router'
import React from 'react'
import AdbIcon from '@mui/icons-material/Adb'

export default function LogoToolbar() {
  return (
    <>
      <Toolbar>
        <AdbIcon
          sx={{
            display: { xs: 'none', md: 'flex' },
            mr: 1,
            cursor: 'pointer',
          }}
        />
        <Typography
          variant='h6'
          noWrap
          component='a'
          onClick={(e) => {
            e.preventDefault()
            Router.push('/')
          }}
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          LOGO
        </Typography>
      </Toolbar>
    </>
  )
}
