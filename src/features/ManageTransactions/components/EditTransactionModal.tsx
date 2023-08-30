import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import {
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'
import { toast } from 'react-hot-toast'
import { Edit } from '@mui/icons-material'
import {
  Category,
  Transaction,
  useCategoriesQuery,
  useUpdateTransactionMutation,
} from '../../../lib/graphql/generated/graphql'

export interface EditTransactionModalProps {
  transaction: Transaction
}
export default function EditTransactionModal({
  transaction,
}: EditTransactionModalProps) {
  const [open, setOpen] = useState(false)

  const categoriesQuery = useCategoriesQuery()
  const [updateTransaction, { loading, error }] = useUpdateTransactionMutation({
    refetchQueries: ['transactions', 'transactionListInsight'],
  })

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleUpdateTransaction = () => {
    toast.promise(
      updateTransaction({
        variables: {
          ...formData,
          id: transaction.id,
          categoryId: formData.categoryId ?? '',
          currencyCode: formData.currencyCode ?? '',
        },
      }),
      {
        loading: 'Updating transaction...',
        success: 'Transaction updated successfully',
        error: 'Failed to update transaction',
      }
    )
    handleClose()
  }

  const [formData, setFormData] = useState({
    id: transaction.id,
    date: new Date(transaction.date).toISOString().split('T')[0],
    amount: transaction.amount,
    description: transaction.description,
    categoryId: transaction.category?.id,
    currencyCode: transaction.currency?.code,
  })

  return (
    <div>
      <IconButton>
        <Edit onClick={() => handleClickOpen()} />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Transaction</DialogTitle>
        <DialogContent>
          <Grid container spacing={1} rowSpacing={2} marginTop={2}>
            <Grid item xs={6} md={4}>
              <FormControl fullWidth>
                <InputLabel id='categorySelectLabel'>Category</InputLabel>
                <Select
                  fullWidth
                  labelId='categorySelectLabel'
                  id='category'
                  variant='outlined'
                  size='small'
                  value={formData.categoryId}
                  onChange={(e) => {
                    setFormData({ ...formData, categoryId: e.target.value })
                  }}
                  label='Currency'
                >
                  {categoriesQuery.data?.categories?.map(
                    (c: Category | null) => (
                      <MenuItem value={c?.id} key={c?.id}>
                        {c?.name}
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={2}>
              <FormControl fullWidth>
                <InputLabel id='currencySelectLabel'>Currency</InputLabel>
                <Select
                  fullWidth
                  labelId='currencySelectLabel'
                  id='currency'
                  variant='outlined'
                  size='small'
                  value={formData.currencyCode}
                  onChange={(e) => {
                    setFormData({ ...formData, currencyCode: e.target.value })
                  }}
                  label='Currency'
                >
                  <MenuItem value='USD'>USD</MenuItem>
                  <MenuItem value='ETB'>ETB</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6} md={2}>
              <TextField
                id='amount'
                variant='outlined'
                size='small'
                name='amount'
                label='Amount'
                type='number'
                defaultValue={formData.amount}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  setFormData({ ...formData, amount: Number(e.target.value) })
                }}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                variant='outlined'
                size='small'
                name='date'
                label='Date'
                type='date'
                value={formData.date}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  setFormData({ ...formData, date: e.target.value })
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                size='small'
                name='description'
                label='Description'
                type='text'
                fullWidth
                multiline
                rows={2}
                defaultValue={formData.description}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  setFormData({ ...formData, description: e.target.value })
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdateTransaction}>
            {loading ? <CircularProgress size={25} /> : 'Update'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
