import * as React from 'react'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'
import _ from 'lodash'

const pathToBreadcrumb = (path: string) => {
  const pathComponents = path.split('/').filter((i) => i)
  const breadcrumb = pathComponents.map((component, index) => {
    const to = `/${pathComponents.slice(0, index + 1).join('/')}`
    const isLast = index === pathComponents.length - 1
    return { component: _.startCase(component), to, isLast }
  })
  return breadcrumb
}

export default function DashboardBreadcrumbs({ path }: { path: string }) {
  const breadcrumb = pathToBreadcrumb(path)
  return (
    <Breadcrumbs>
      {breadcrumb.map(({ component, to, isLast }) => {
        return isLast ? (
          <Typography
            variant={'body1'}
            color='text.primary'
            sx={{
              fontWeight: 'bold',
            }}
          >
            {component}
          </Typography>
        ) : (
          <Typography
            component={Link}
            href={to}
            color='text.primary'
            sx={{
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            {component}
          </Typography>
        )
      })}
    </Breadcrumbs>
  )
}
