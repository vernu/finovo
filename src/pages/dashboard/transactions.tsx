import type { NextPage } from 'next'
import ManageTransactions from '@features/ManageTransactions/ManageTransactions'
import withDashboardLayout from '@HOC/withDashboardLayout'

const TransactionsPage: NextPage = () => (
  <>
    <ManageTransactions />
  </>
)

export default withDashboardLayout(TransactionsPage)
