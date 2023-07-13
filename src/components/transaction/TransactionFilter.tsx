import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useEffect } from 'react'
import {
  Box,
  Button,
  Checkbox,
  FormLabel,
  Grid,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@mui/material'
import { gql, useQuery } from '@apollo/client'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  selectTransactions,
  updateFilters,
} from '../../store/slices/transaction.slice'
import { TRANSACTION_PERIOD_FILTER_OPTIONS } from '../../lib/constants/filters'
import { ALL_CATEGORIES_QUERY } from '../../lib/graphql/queries'

export const TransactionFilter = () => {
  const { filters } = useAppSelector(selectTransactions)
  const dispatch = useAppDispatch()

  const categoriesQuery = useQuery(ALL_CATEGORIES_QUERY)

  useEffect(() => {
    if (categoriesQuery.data) {
      dispatch(
        updateFilters({
          categoryIds: categoriesQuery.data.categories.map((c: any) => c.id),
        })
      )
    }
  }, [categoriesQuery.data, dispatch])

  const handleChange = (e: any) => {
    dispatch(
      updateFilters({
        [e.target.name]: e.target.value,
      })
    )
  }

  const handleMultiSelectChange = (e: any) => {
    e.preventDefault()
    // On autofill we get a stringified value.
    let targetVal = e.target.value
    let value = typeof targetVal === 'string' ? targetVal.split(',') : targetVal

    dispatch(
      updateFilters({
        [e.target.name]: value,
      })
    )
  }

  return (
    <Box
      sx={{
        borderRadius: '10px',
        marginBottom: '5px',
        padding: '3px',
        backgroundColor: '#f5f5f5',
        border: '0.1px dashed black',
      }}
    >
      <Grid container spacing={0.5}>
        <Grid item xs={6} sm={3} md={2}>
          {' '}
          <FormControl fullWidth>
            <InputLabel>period</InputLabel>
            <Select
              value={filters.period}
              name='period'
              label='Period'
              onChange={handleChange}
              variant='outlined'
            >
              {TRANSACTION_PERIOD_FILTER_OPTIONS.map((period) => (
                <MenuItem key={period.key} value={period.key}>
                  {period.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <FormControl fullWidth>
            <InputLabel>Currencies</InputLabel>
            <Select
              value={filters.currencyCodes}
              name='currencyCodes'
              label='Currencies'
              multiple
              variant='outlined'
              onChange={handleMultiSelectChange}
              renderValue={(selectedValue) => selectedValue.join(', ')}
            >
              {['ETB', 'USD', 'GBP', 'Crypto'].map((currency) => (
                <MenuItem key={currency} value={currency}>
                  <ListItemIcon>
                    <Checkbox
                      checked={filters.currencyCodes.includes(currency)}
                      size='small'
                    />
                  </ListItemIcon>
                  <ListItemText primary={currency} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          {categoriesQuery.data?.categories?.length > 0 && (
            <FormControl fullWidth>
              {/* <FormLabel>Categories</FormLabel> */}
              <Select
                label='Categories'
                name='categoryIds'
                defaultValue={categoriesQuery.data?.categories?.map(
                  (c: any) => c.id
                )}
                value={filters.categoryIds}
                multiple
                onChange={handleMultiSelectChange}
                renderValue={(selectedValue) => {
                  if (selectedValue.length == 0) {
                    return 'No categories selected'
                  } else if (
                    selectedValue.length >=
                    categoriesQuery.data?.categories?.length
                  ) {
                    return 'All categories'
                  } else {
                    return selectedValue.length + ' categories'
                  }
                }}
                displayEmpty={false}
                autoWidth={false}
                variant='outlined'
              >
                <MenuItem
                  value={0}
                  sx={{
                    maxHeight: '22px',
                  }}
                >
                  <ListItemIcon>
                    <Checkbox
                      checked={
                        filters.categoryIds.length >=
                        categoriesQuery.data?.categories?.length
                      }
                      onClick={(e) => {
                        e.stopPropagation()
                        let ids: number[] = []
                        if (
                          filters.categoryIds.length <
                          categoriesQuery.data?.categories?.length
                        ) {
                          ids = categoriesQuery.data?.categories?.map(
                            (c: any) => c.id
                          )
                        }
                        dispatch(
                          updateFilters({
                            categoryIds: ids,
                          })
                        )
                      }}
                      size='small'
                    />
                  </ListItemIcon>
                  <ListItemText primary={'All Categories'} />
                </MenuItem>

                {categoriesQuery.data?.categories?.map((category: any) => (
                  <MenuItem
                    key={category.id}
                    value={category.id}
                    sx={{
                      maxHeight: '22px',
                    }}
                  >
                    <ListItemIcon>
                      <Checkbox
                        checked={filters.categoryIds.includes(category.id)}
                        size='small'
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={category.name}
                      style={{
                        color:
                          category.type === 'INCOME'
                            ? '#2a2'
                            : category.type === 'EXPENSE'
                            ? 'red'
                            : 'black',
                      }}
                    />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <FormControl fullWidth>
            <TextField
              value={filters.descriptionContains}
              label='Description contains'
              name='descriptionContains'
              variant='outlined'
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Button
            fullWidth
            onClick={() => {}}
            variant='outlined'
            style={{ margin: '10px', textTransform: 'none' }}
          >
            Advanced Filters
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
