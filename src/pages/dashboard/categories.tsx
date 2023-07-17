import React from 'react'
import ManageCategories from '../../features/ManageCategories/ManageCategories'
import withDashboardLayout from '../../HOC/withDashboardLayout'

const Categories = () => {
  return (
    <>
      <ManageCategories />
    </>
  )
}

export default withDashboardLayout(Categories)
