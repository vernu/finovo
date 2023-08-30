import { useMutation, useQuery } from '@apollo/client'
import {
  TableRow,
  TableCell,
  FormControl,
  TextField,
  MenuItem,
  Select,
} from '@mui/material'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import {
  ADD_BUDGET_MUTATION,
  DELETE_BUDGET_MUTATION,
  UPDATE_BUDGET_MUTATION,
} from '../../lib/graphql/queries'
import { useCategoriesQuery } from '../../lib/graphql/generated/graphql'

export const BudgetEntryRow = ({ budget }: any) => {
  const [addBudget] = useMutation(ADD_BUDGET_MUTATION, {
    refetchQueries: ['budgets'],
  })
  const [updateBudget] = useMutation(UPDATE_BUDGET_MUTATION, {
    refetchQueries: ['budgets'],
  })
  const [deleteBudget] = useMutation(DELETE_BUDGET_MUTATION, {
    refetchQueries: ['budgets'],
  })

  const categoriesQuery = useCategoriesQuery()
  const [formValue, setFormValue] = useState({
    id: budget?.id,
    year: budget?.year || 2023,
    categoryId: budget?.category?.id,
    budgetBasis: budget?.budgetBasis ?? 'MONTHLY',
    currencyCode: budget?.currency?.code,
    monthlyBudget: budget?.monthlyBudget,
    yearlyBudget: budget?.yearlyBudget,
  })

  const handleChange = (e: any) => {
    if (e.target.name === 'monthlyBudget') {
      setFormValue({
        ...formValue,
        yearlyBudget: Number(e.target.value) * 12,
        monthlyBudget: Number(e.target.value),
      })
    } else if (e.target.name === 'yearlyBudget') {
      setFormValue({
        ...formValue,
        monthlyBudget: Number(e.target.value) / 12,
        yearlyBudget: Number(e.target.value),
      })
    } else {
      setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }
  }

  const inputProps = {
    style: {
      padding: '10px 5px',
    },
  }

  const handleSave = async () => {
    if (!formValue.id) {
      handleAddBudget()
    } else {
      handleUpdateCategory()
    }
  }

  const handleAddBudget = () => {
    toast.promise(
      addBudget({
        variables: formValue,
      }),
      {
        loading: 'Adding Budget...',
        success: 'Budget added successfully',
        error: 'Failed to add budget',
      }
    )
    setFormValue({} as any)
  }

  const handleUpdateCategory = () => {
    updateBudget({
      variables: formValue,
      refetchQueries: ['budgets'],
    })
      .then((res) => {
        toast.success('Budget updated successfully')
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }

  const handleDeleteBudget = () => {
    deleteBudget({
      variables: formValue,
      refetchQueries: ['budgets'],
    })
      .then((res) => {
        toast.success('Budget deleted')
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }

  return (
    <TableRow>
      <TableCell>
        <FormControl fullWidth variant='outlined' size='small' margin='none'>
          <Select
            name='categoryId'
            value={formValue.categoryId}
            onChange={handleChange}
            inputProps={inputProps}
            margin='none'
            size='small'
            disabled={!!budget.id}
          >
            {categoriesQuery.data?.categories?.map((category: any) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </TableCell>
      <TableCell>
        <FormControl fullWidth variant='outlined' size='small' margin='none'>
          <Select
            name='budgetBasis'
            value={formValue.budgetBasis}
            onChange={handleChange}
            inputProps={inputProps}
            margin='none'
            size='small'
          >
            <MenuItem value='MONTHLY'>Monthly</MenuItem>
            <MenuItem value='YEARLY'>Yearly</MenuItem>
          </Select>
        </FormControl>
      </TableCell>

      <TableCell>
        <FormControl fullWidth variant='outlined' size='small' margin='none'>
          <Select
            name='currencyCode'
            value={formValue.currencyCode}
            onChange={handleChange}
            inputProps={inputProps}
            margin='none'
            size='small'
          >
            <MenuItem value='ETB'>ETB</MenuItem>
            <MenuItem value='USD'>USD</MenuItem>
          </Select>
        </FormControl>
      </TableCell>

      <TableCell>
        <FormControl variant='standard' size='small' margin='none'>
          <TextField
            type='number'
            variant='outlined'
            name='monthlyBudget'
            disabled={formValue.budgetBasis !== 'MONTHLY'}
            value={formValue.monthlyBudget}
            placeholder='0.00'
            size='small'
            onChange={handleChange}
            margin='none'
            inputProps={inputProps}
            fullWidth
          />
        </FormControl>
      </TableCell>
      <TableCell>
        <FormControl variant='standard' size='small' margin='none'>
          <TextField
            type='number'
            variant='outlined'
            name='yearlyBudget'
            disabled={formValue.budgetBasis !== 'YEARLY'}
            value={formValue.yearlyBudget}
            placeholder='0.00'
            size='small'
            onChange={handleChange}
            margin='none'
            inputProps={inputProps}
            fullWidth
          />
        </FormControl>
      </TableCell>
      <TableCell align='right'>
        <span onClick={handleSave} style={{ cursor: 'pointer' }}>
          Save
        </span>
        {' | '}
        <span onClick={handleDeleteBudget} style={{ cursor: 'pointer' }}>
          Delete
        </span>
      </TableCell>
    </TableRow>
  )
}
