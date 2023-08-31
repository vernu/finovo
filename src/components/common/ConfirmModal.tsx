import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { closeConfirmModal } from '@store/slices/confirmModal.slice'

export default function ConfirmModal() {
  const dispatch = useAppDispatch()

  const handleClose = () => {
    dispatch(closeConfirmModal())
  }
  const { isOpen, title, description, onConfirm } = useAppSelector(
    (state) => state.confirmModal
  )
  const handleConfirm = () => {
    dispatch(closeConfirmModal())
    onConfirm()
  }

  return (
    <>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirm} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
