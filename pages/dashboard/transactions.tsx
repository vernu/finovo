import type { NextPage } from 'next'
import Box from '@mui/material/Box'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { TransactionFilter } from '../../components/transaction/TransactionFilter'
import { withDashboardLayout } from '../../HOC/withDashboardLayout'
import { gql, useQuery } from '@apollo/client'
import { useAppSelector } from '../../store/hooks'
import { selectTransactions } from '../../store/slices/transaction.slice'
import { debounce } from 'lodash'
import TransactionInsight from '../../components/transaction/TransactionInsight'
import { useEffect } from 'react'
// import NewTransactionModal from '../../components/transaction/NewTransactionModal'

const Transactions: NextPage = () => {
  const { filters } = useAppSelector(selectTransactions)

  const TRANSACTION_LIST_QUERY = gql`
    query transactions(
      $period: String
      $currencyCodes: [String]
      $categoryIds: [String]
      $descriptionContains: String
    ) {
      transactions(
        period: $period
        currencyCodes: $currencyCodes
        categoryIds: $categoryIds
        descriptionContains: $descriptionContains
      ) {
        id
        description
        amount
        date
        currency {
          symbol
          code
        }
        category {
          name
        }
      }
    }
  `

  const transactionListQuery = useQuery(TRANSACTION_LIST_QUERY, {
    variables: filters,
  })

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 60,
      editable: false,
      valueGetter: (params: GridValueGetterParams) => {
        return params.row.id
      },
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 100,
      editable: false,
      valueGetter: (params: GridValueGetterParams) => {
        return params.row.date?.split('T')[0]
      },
    },
    {
      field: 'categoryName',
      headerName: 'Category',
      width: 120,
      editable: false,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.category?.name}`,
    },

    {
      field: 'description',
      headerName: 'Description',
      width: 150,
      editable: false,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 100,
      editable: false,
      align: 'right',
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.amount.toLocaleString()} ${params.row.currency?.code}`,
    },
  ]

  return (
    <>
      <TransactionFilter />
      <TransactionInsight />
      {/* <NewTransactionModal /> */}
      <Box sx={{ height: 700, width: '100%' }}>
        <DataGrid
          rows={transactionListQuery.data?.transactions || []}
          columns={columns}
          pageSize={100}
          rowsPerPageOptions={[10, 15, 20, 25, 30, 50, 100]}
          // checkboxSelection
          disableSelectionOnClick
          density='compact'
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </>
  )
}

export default withDashboardLayout(Transactions)
