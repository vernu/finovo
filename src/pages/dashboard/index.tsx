import DashboardOverview from '@features/DashboardOverview/DashboardOverview'
import withDashboardLayout from '@HOC/withDashboardLayout'

const DashboardPage = () => {
  return (
    <>
      <DashboardOverview />
    </>
  )
}

export default withDashboardLayout(DashboardPage)
