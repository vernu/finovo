import Box from '@mui/material/Box'
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from '@mui/x-data-grid'
import { TransactionFilter } from './components/TransactionFilter'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { selectTransactions } from '../../store/slices/transaction.slice'
import TransactionInsight from './components/TransactionInsight'
import NewTransactionModal from './components/NewTransactionModal'
import { Delete, Edit } from '@mui/icons-material'
import { Grid, IconButton } from '@mui/material'
import { toast } from 'react-hot-toast'
import { openConfirmModal } from '../../store/slices/confirmModal.slice'
import EditTransactionModal from './components/EditTransactionModal'

import { formatAmount } from '../../utils/stringFormattingUtils'
import {
  useDeleteTransactionMutation,
  useTransactionsQuery,
} from '../../lib/graphql/generated/graphql'

const ManageTransactions = () => {
  const { filters } = useAppSelector(selectTransactions)

  const transactionListQuery = useTransactionsQuery({
    variables: filters,
  })

  const [deleteTransaction, { loading: deleting, error: deleteError }] =
    useDeleteTransactionMutation({
      refetchQueries: ['transactions', 'transactionListInsight'],
    })

  const dispatch = useAppDispatch()

  const handleDeleteTransaction = (id: string) => {
    const onDelete = () => {
      toast.promise(
        deleteTransaction({
          variables: {
            id,
          },
        }),
        {
          loading: 'Deleting transaction...',
          success: 'Transaction deleted successfully',
          error: 'Failed to delete transaction',
        }
      )
    }

    dispatch(
      openConfirmModal({
        title: 'Delete Transaction',
        description: 'Are you sure you want to delete this transaction?',
        onConfirm: onDelete,
      })
    )
  }

  const handleEditTransaction = (id: string) => {
    console.log(id)
  }

  const columns: GridColDef[] = [
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
      width: 120,
      editable: false,
      align: 'right',
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.currency?.symbol} ${formatAmount(params.row.amount)}`,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      minWidth: 100,
      editable: false,
      filterable: false,
      sortable: false,
      headerAlign: 'right',
      align: 'right',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <>
            <EditTransactionModal transaction={params.row} />
            <IconButton onClick={() => handleDeleteTransaction(params.row.id)}>
              <Delete />
            </IconButton>
          </>
        )
      },
    },
  ]

  return (
    <>
      <TransactionFilter />
      <Grid container>
        <Grid item xs={12} md={10}>
          <TransactionInsight />
        </Grid>
        <Grid item xs={12} md={2}>
          <NewTransactionModal />
        </Grid>
      </Grid>
      <Box sx={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={transactionListQuery.data?.transactions || []}
          columns={columns}
          pageSize={100}
          rowsPerPageOptions={[10, 15, 20, 25, 30, 50, 100]}
          // checkboxSelection
          disableSelectionOnClick
          density='compact'
          // experimentalFeatures={{ newEditingApi: true }}
          loading={transactionListQuery.loading || deleting}
        />
      </Box>
    </>
  )
}

export default ManageTransactions
