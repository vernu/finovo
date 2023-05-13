import * as React from 'react'
import Navbar from '../../components/nav/Navbar'

export function withDefaultLayout(Component: any) {
  const EnhancedComponent = (props: any) => {
    return (
      <>
        <Navbar />
        <Component {...props} />
      </>
    )
  }
  EnhancedComponent.displayName = Component.name ?? 'Component'

  return EnhancedComponent
}
