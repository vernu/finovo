import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '@store/slices/auth.slice'
import { confirmModalSlice } from '@store/slices/confirmModal.slice'
import { transactionSlice } from '@store/slices/transaction.slice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    transaction: transactionSlice.reducer,
    confirmModal: confirmModalSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
