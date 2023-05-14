import { Box } from '@mui/material'
import Link from 'next/link'

export const Logo = () => (
  <Link href='/' >
    <Box
      sx={{
        fontSize: '2xl',
        fontWeight: 800,
        textDecoration: 'none',
        color: 'gray',
      }}
    >
      ❍ Personal Finance App
    </Box>
  </Link>
)
