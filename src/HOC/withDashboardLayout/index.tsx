import { useState } from 'react'

import { styled } from '@mui/material/styles'
import Header from './components/header/DashboardHeader'
import DashboardSideNav from './components/side-nav/DashboardSideNav'

const APP_BAR_MOBILE = 64
const APP_BAR_DESKTOP = 92

const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
})

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}))

export default function withDashboardLayout(Component: any) {
  const EnhancedComponent = (props: any) => {
    const [open, setOpen] = useState(false)

    return (
      <StyledRoot>
        <Header onOpenNav={() => setOpen(true)} />

        <DashboardSideNav openNav={open} onCloseNav={() => setOpen(false)} />

        <Main>
          <Component {...props} />
        </Main>
      </StyledRoot>
    )
  }
  EnhancedComponent.displayName = Component.name ?? 'Component'

  return EnhancedComponent
}
