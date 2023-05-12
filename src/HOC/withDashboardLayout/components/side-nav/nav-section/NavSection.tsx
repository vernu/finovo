import { Box, List, ListItemText } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

import { StyledNavItem, StyledNavItemIcon } from './styles'

export default function NavSection({ data = [], ...other }: any) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item: any) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  )
}

function NavItem({ item }: any) {
  const { title, path, icon, info } = item

  const router = useRouter()
  const { pathname } = router

  const isActive = useMemo(() => pathname === path, [pathname, path])

  return (
    <Link href={path}>
      <StyledNavItem
        sx={
          isActive
            ? {
                color: 'text.primary',
                bgcolor: 'action.selected',
                fontWeight: 'fontWeightBold',
              }
            : {}
        }
      >
        <>
          <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

          <ListItemText disableTypography primary={title} />

          {info && info}
        </>
      </StyledNavItem>
    </Link>
  )
}
