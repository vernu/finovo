import { styled, alpha } from '@mui/material/styles'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'

import AccountPopover from '@HOC/withDashboardLayout/components/popovers/AccountPopover'
import MenuBookRounded from '@mui/icons-material/MenuBookRounded'
import { useRouter } from 'next/router'
import DashboardBreadcrumbs from './DashboardBreadcrumbs'

const NAV_WIDTH = 280

const HEADER_MOBILE = 64

const HEADER_DESKTOP = 92

function bgBlur(props: any) {
  const color = props?.color || '#000000'
  const blur = props?.blur || 6
  const opacity = props?.opacity || 0.8
  const imgUrl = props?.imgUrl

  if (imgUrl) {
    return {
      position: 'relative',
      backgroundImage: `url(${imgUrl})`,
      '&:before': {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 9,
        content: '""',
        width: '100%',
        height: '100%',
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        backgroundColor: alpha(color, opacity),
      },
    }
  }

  return {
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    backgroundColor: alpha(color, opacity),
  }
}

// @ts-ignore
const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}))

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}))

export default function DashboardHeader({ onOpenNav }: any) {
  const router = useRouter()
  const { pathname } = router
  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: 'text.primary',
            display: { lg: 'none' },
          }}
        >
          <MenuBookRounded />
        </IconButton>

        <DashboardBreadcrumbs path={pathname} />

        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction='row'
          alignItems='center'
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <AccountPopover />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  )
}
