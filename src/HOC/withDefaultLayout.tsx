import * as React from 'react'
import NavBar from '../components/nav/NavBar'

export function withDefaultLayout(Component: any) {
  const EnhancedComponent = (props: any) => {
    return (
      <>
        <NavBar />
        <Component {...props} />
      </>
    )
  }
  EnhancedComponent.displayName = Component.name ?? 'Component'

  return EnhancedComponent
}
