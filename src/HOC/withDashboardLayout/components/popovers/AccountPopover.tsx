import { useState } from 'react'
import { alpha } from '@mui/material/styles'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Popover from '@mui/material/Popover'

import { useAppDispatch, useAppSelector } from '@store/hooks'
import Router from 'next/router'
import { logout } from '@store/slices/auth.slice'

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
    path: '/',
  },
  {
    label: 'Profile',
    icon: 'eva:person-fill',
    path: '/dashboard/profile',
  },
  {
    label: 'Settings',
    icon: 'eva:settings-2-fill',
    path: '/dashboard/settings',
  },
]

export default function AccountPopover() {
  const [open, setOpen] = useState(null)

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget)
  }

  const handleClose = () => {
    setOpen(null)
  }

  const dispatch = useAppDispatch()

  const { currentUser } = useAppSelector((state) => state.auth)

  const handleLogout = () => {
    dispatch(logout())
    handleClose()
    Router.push('/')
  }

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open
            ? {
                '&:before': {
                  zIndex: 1,
                  content: "''",
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  position: 'absolute',
                  bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
                },
              }
            : {}),
        }}
      >
        <Avatar src={currentUser?.avatar || '_'} alt={currentUser?.name} />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant='subtitle2' noWrap>
            {currentUser?.name}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }} noWrap>
            {currentUser?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem
              key={option.label}
              onClick={() => {
                Router.push(option.path)
                handleClose()
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </Popover>
    </>
  )
}
