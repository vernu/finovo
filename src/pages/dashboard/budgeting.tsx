import React from 'react'
import ManageBudgets from '../../features/ManageBudgets/ManageBudgets'
import withDashboardLayout from '../../HOC/withDashboardLayout'

const Budgeting = () => {
  return (
    <>
      <ManageBudgets />
    </>
  )
}

export default withDashboardLayout(Budgeting)
