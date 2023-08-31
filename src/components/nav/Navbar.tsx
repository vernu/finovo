import * as React from 'react'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { FiMenu } from 'react-icons/fi'
import { HiArrowSmRight } from 'react-icons/hi'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { logout } from '@store/slices/auth.slice'
import { Logo } from './Logo'


export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const dispatch = useAppDispatch()

  const { currentUser } = useAppSelector((state) => state.auth)

  const [isAuthenticated, setIsAuthenticated] = React.useState(false)

  const handleLogout = () => {
    dispatch(logout())
    handleCloseNavMenu()
  }

  React.useEffect(() => {
    setIsAuthenticated(!!currentUser)
  }, [currentUser])

  return (
    <AppBar
      position='static'
      sx={{
        bgcolor: 'background.paper',
        py: 1,
        mb: 0.5,
      }}
    >
      <Container>
        <Toolbar
          variant='dense'
          disableGutters
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: 'gray',
          }}
        >
          <Logo />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {!isAuthenticated ? (
              <Button
                component={Link}
                href={'/login'}
                onClick={handleCloseNavMenu}
                sx={{ fontWeight: 500, textTransform: 'none' }}
              >
                Login
              </Button>
            ) : (
              <Button
                onClick={handleLogout}
                sx={{ fontWeight: 500, textTransform: 'none' }}
              >
                Logout
              </Button>
            )}

            <Button
              component={Link}
              href={isAuthenticated ? '/dashboard' : '/register'}
              variant='contained'
              color='primary'
              sx={{
                borderRadius: 999,
                textTransform: 'none',
              }}
              endIcon={<HiArrowSmRight size={16} />}
            >
              {isAuthenticated ? 'Go to Dashboard' : 'Get Started'}
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='medium'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
            >
              <FiMenu />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              disablePortal={true}
            >
              {isAuthenticated ? (
                <MenuItem onClick={handleLogout}>
                  <Typography textAlign='center'>Logout</Typography>
                </MenuItem>
              ) : (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>Login</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
