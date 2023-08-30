import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store'

interface TransactionState {
  filters: {
    period: string
    categoryIds: string[]
    currencyCodes: string[]
    descriptionContains: string | null
  }
}

const initialState: TransactionState = {
  filters: {
    period: 'LAST_30_DAYS',
    categoryIds: [],
    currencyCodes: ['ETB', 'USD'],
    descriptionContains: null,
  },
}

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    updateFilters: (state, action) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      }
    },
  },
  extraReducers: (builder) => {},
})

export const { updateFilters } = transactionSlice.actions

export const selectTransactions = (state: RootState) => state.transaction

export default transactionSlice.reducer
