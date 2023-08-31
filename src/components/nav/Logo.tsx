import Box from '@mui/material/Box'
import Link from 'next/link'

export const Logo = () => (
  <Link href='/'>
    <Box
      sx={{
        fontSize: '2xl',
        fontWeight: 800,
        textDecoration: 'none',
        color: 'gray',
      }}
    >
      ❍ Finovo
    </Box>
  </Link>
)
