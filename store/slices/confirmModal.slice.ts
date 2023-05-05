import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store'

interface ConfirmModalState {
  isOpen: boolean
  title: string
  description: string
  onConfirm: () => void
  onCancel: () => void
}

const initialState: ConfirmModalState = {
  isOpen: false,
  title: '',
  description: '',
  onConfirm: () => {},
  onCancel: () => {},
}

export const confirmModalSlice = createSlice({
  name: 'confirmModal',
  initialState,
  reducers: {
    openConfirmModal: (state, action) => {
      state.isOpen = true
      state.title = action.payload.title
      state.description = action.payload.description
      state.onConfirm = action.payload.onConfirm
      state.onCancel = action.payload.onCancel
    },
    closeConfirmModal: (state) => {
      state.isOpen = false
      state.title = ''
      state.description = ''
      state.onConfirm = () => {}
      state.onCancel = () => {}
    },
  },
})

export const { openConfirmModal, closeConfirmModal } = confirmModalSlice.actions

export const selectConfirmModal = (state: RootState) => state.confirmModal

export default confirmModalSlice.reducer
