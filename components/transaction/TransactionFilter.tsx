import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useEffect } from 'react'
import {
  Checkbox,
  FormLabel,
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

export const TransactionFilter = () => {
  const { filters } = useAppSelector(selectTransactions)
  const dispatch = useAppDispatch()

  const ALL_CATEGORIES_QUERY = gql`
    query {
      categories {
        id
        name
      }
    }
  `
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
    <div>
      TransactionFilter <br />
      <FormControl>
        <InputLabel>period</InputLabel>
        <Select
          value={filters.period}
          name='period'
          label='Period'
          onChange={handleChange}
          variant='filled'
          style={{ minWidth: '200px' }}
        >
          {TRANSACTION_PERIOD_FILTER_OPTIONS.map((period) => (
            <MenuItem key={period.key} value={period.key}>
              {period.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Currencies</InputLabel>
        <Select
          value={filters.currencyCodes}
          name='currencyCodes'
          label='Currencies'
          multiple
          variant='filled'
          onChange={handleMultiSelectChange}
          renderValue={(selectedValue) => selectedValue.join(', ')}
        >
          {['ETB', 'USD', 'GBP', 'CRYPTO'].map((currency) => (
            <MenuItem key={currency} value={currency}>
              <ListItemIcon>
                <Checkbox checked={filters.currencyCodes.includes(currency)} />
              </ListItemIcon>
              <ListItemText primary={currency} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {categoriesQuery.data?.categories?.length > 0 && (
        <FormControl>
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
                selectedValue.length >= categoriesQuery.data?.categories?.length
              ) {
                return 'All categories'
              } else {
                return selectedValue.length + ' categories'
              }
            }}
            style={{ minWidth: '200px' }}
            displayEmpty={false}
            autoWidth={false}
            variant='filled'
          >
            <MenuItem value={0}>
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
                />
              </ListItemIcon>
              <ListItemText primary={'All Categories'} />
            </MenuItem>

            {categoriesQuery.data?.categories?.map((category: any) => (
              <MenuItem key={category.id} value={category.id}>
                <ListItemIcon>
                  <Checkbox
                    checked={filters.categoryIds.includes(category.id)}
                  />
                </ListItemIcon>
                <ListItemText primary={category.name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      <FormControl>
        <TextField
          value={filters.descriptionContains}
          label='Description contains'
          name='descriptionContains'
          variant='filled'
          onChange={handleChange}
        />
      </FormControl>
    </div>
  )
}
