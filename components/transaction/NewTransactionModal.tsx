import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import {
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'
import { toast } from 'react-hot-toast'
import { useMutation, useQuery } from '@apollo/client'
import {
  ADD_TRANSACTION_MUTATION,
  ALL_CATEGORIES_QUERY,
} from '../../lib/graphql/queries'

export default function NewTransactionModal() {
  const [open, setOpen] = useState(false)

  const categoriesQuery = useQuery(ALL_CATEGORIES_QUERY)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleAddTransaction = () => {

    if (!formData.categoryId) {
      toast.error('Please select a category')
      return
    }

    if (transactionType == 'INCOME' && formData.amount <= 0) {
      toast.error('Income should be a positive amount')
      return
    } else if (transactionType == 'EXPENSE' && formData.amount >= 0) {
      toast.error('Expense ammount should be negative')
      return
    }

    addTransaction({
      variables: formData,
      refetchQueries: ['transactions', 'transactionListInsight'],
    })
      .then((res) => {
        toast.success('Transaction added successfully')
        setOpen(false)
        // reset form data
        setFormData({
          date: new Date().toISOString().split('T')[0],
          amount: 0,
          description: '',
          categoryId: '',
          currencyCode: 'ETB',
        })
      })
      .catch((err) => {
        toast.error('Something went wrong')
      })
  }

  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    amount: 0,
    description: '',
    categoryId: '',
    currencyCode: 'ETB',
  })

  const [transactionType, setTransactionType] = useState<'EXPENSE' | 'INCOME'>(
    'INCOME'
  )

  const [addTransaction, { loading, error }] = useMutation(
    ADD_TRANSACTION_MUTATION
  )

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        New Transaction
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Transaction</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill out the form below to create a new transaction
          </DialogContentText>

          <Button
            variant={transactionType === 'EXPENSE' ? 'outlined' : 'text'}
            onClick={() => setTransactionType('EXPENSE')}
          >
            Expense
          </Button>
          <Button
            variant={transactionType === 'INCOME' ? 'outlined' : 'text'}
            onClick={() => setTransactionType('INCOME')}
          >
            Income
          </Button>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={6} md={4}>
              <FormControl fullWidth>
                <InputLabel id='categorySelectLabel'>Category</InputLabel>
                <Select
                  fullWidth
                  labelId='categorySelectLabel'
                  id='category'
                  variant='standard'
                  value={formData.categoryId}
                  onChange={(e) => {
                    setFormData({ ...formData, categoryId: e.target.value })
                  }}
                  label='Currency'
                >
                  {categoriesQuery.data?.categories.map((c: any) => (
                    <MenuItem value={c.id} key={c.id}>
                      {c.name}
                    </MenuItem>
                  ))}
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
                  variant='standard'
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
                variant='standard'
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
                variant='standard'
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
                variant='standard'
                name='description'
                label='Description'
                type='text'
                fullWidth
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
          <Button onClick={handleAddTransaction}>
            {loading ? <CircularProgress size={25} /> : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
