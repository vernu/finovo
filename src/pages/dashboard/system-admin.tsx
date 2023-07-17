import React from 'react'
import SystemAdmin from '../../features/SystemAdmin/SystemAdmin'
import withDashboardLayout from '../../HOC/withDashboardLayout'

const SystemAdminPage = () => {
  return (
    <>
      <SystemAdmin />
    </>
  )
}

export default withDashboardLayout(SystemAdminPage)
