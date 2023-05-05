import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import AttachMoney from '@mui/icons-material/AttachMoney'
import Router from 'next/router'
import LogoToolbar from '../components/nav/LogoToolbar'
import { useSelector } from 'react-redux'
import { selectAuth } from '../store/slices/auth.slice'
import { toast } from 'react-hot-toast'

export function withDashboardLayout(Component: any) {
  const EnhancedComponent = (props: any) => {
    const { currentUser } = useSelector(selectAuth)

    React.useEffect(() => {
      if (!currentUser) {
        toast.error('You must be logged in to view this page')
        Router.push('/login')
      }
    }, [currentUser])

    
    const { window } = props
    const [mobileOpen, setMobileOpen] = React.useState(false)

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen)
    }

    const drawerWidth = 240

    const drawer = (
      <div>
        <LogoToolbar />
        <Divider />
        <List>
          {[
            { name: 'Dashboard', link: '/dashboard' },
            {
              name: 'Transactions',
              link: '/dashboard/transactions',
            },
            {
              name: 'Budgeting',
              link: '/dashboard/budgeting',
            },
            {
              name: 'Accounts',
              link: '/dashboard/accounts',
            },
            {
              name: 'Edit Profile',
              link: '/dashboard/edit-profile',
            },
            {
              name: 'Import Data',
              link: '/dashboard/import-data',
            },
            {
              name: 'Settings',
              link: '/dashboard/settings',
            },
            {
              name: 'System Admin',
              link: '/dashboard/system-admin',
              roles: ['admin'],
            },
          ].map((item) => (
            <ListItem
              key={item.name}
              disablePadding
              onClick={() => {
                Router.push(`${item.link}`)
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <AttachMoney />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Sign out'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    )

    const container =
      window !== undefined ? () => window().document.body : undefined
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position='fixed'
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            display: { sm: 'none' },
          }}
        >
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' noWrap component='div'>
              Personal Finance
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component='nav'
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label='mailbox folders'
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant='permanent'
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar sx={{ display: { xs: 'block', sm: 'none' } }} />
          <Component {...props} />
        </Box>
      </Box>
    )
  }
  EnhancedComponent.displayName = Component.name ?? 'Component'

  return EnhancedComponent
}
