import { useEffect } from 'react'
import { styled, alpha } from '@mui/material/styles'
import {
  Box,
  Link,
  Button,
  Drawer,
  Typography,
  Avatar,
  Stack,
} from '@mui/material'

import NavSection from './nav-section/NavSection'
import useResponsive from '../../../../hooks/useResponsive'
import SvgColor from './SvgColor'
import { useRouter } from 'next/router'
import { useAppSelector } from '../../../../store/hooks'

const icon = (icon: string) => (
  <SvgColor src={icon} sx={{ width: 1, height: 1 }} />
)

const navItems = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: icon('/icons/ic_dashboard.svg'),
  },
  {
    title: 'Transactions',
    path: '/dashboard/transactions',
  },
  {
    title: 'Budgeting',
    path: '/dashboard/budgeting',
  },
  {
    title: 'Accounts',
    path: '/dashboard/accounts',
  },
  {
    title: 'Import Data',
    path: '/dashboard/import-data',
  },
  {
    title: 'Settings',
    path: '/dashboard/settings',
  },
  {
    title: 'System Admin',
    path: '/dashboard/system-admin',
    // roles: ['admin'],
  },
]

const NAV_WIDTH = 280

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}))


export default function DashboardSideNav({ openNav, onCloseNav }: any) {
  const router = useRouter()
  const { pathname } = router

  const { currentUser } = useAppSelector((state) => state.auth)

  const isDesktop = useResponsive('up', 'lg', null)

  useEffect(() => {
    if (openNav) {
      onCloseNav()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const renderContent = (
    <Box
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        {/* <Logo /> */}
        logo
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline='none'>
          <StyledAccount>
            <Avatar src={currentUser?.avatar || '_'} alt={currentUser?.name} />

            <Box sx={{ ml: 2 }}>
              <Typography variant='subtitle2' sx={{ color: 'text.primary' }}>
                {currentUser?.name}
              </Typography>

              <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                {currentUser?.role ?? 'user'}
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
      </Box>

      <NavSection data={navItems} />

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack
          alignItems='center'
          spacing={3}
          sx={{ pt: 5, borderRadius: 2, position: 'relative' }}
        >
          <Button variant='outlined'>Sign out</Button>
        </Stack>
      </Box>
    </Box>
  )

  return (
    <Box
      component='nav'
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant='permanent'
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  )
}
