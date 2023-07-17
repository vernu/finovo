import {
  TableRow,
  TableCell,
  FormControl,
  TextField,
  Select,
  MenuItem,
  Switch,
} from '@mui/material'
import { useState } from 'react'

export const CategoryRow = ({ category }: any) => {
  const [isEditing, setIsEditing] = useState(!category.id || false)
  const [formValue, setFormValue] = useState(category)

  const handleChange = (e: any) => {
    if (e.target.name === 'active') {
      setFormValue({ ...formValue, [e.target.name]: e.target.checked })
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
      // create category
    } else {
      // update category
    }
  }

  return (
    <TableRow key={category.name}>
      <TableCell>
        {isEditing ? (
          <FormControl variant='standard' size='small' margin='none'>
            <TextField
              variant='outlined'
              name='emoji'
              value={formValue.emoji ?? '🤗'}
              size='small'
              margin='none'
              onChange={handleChange}
              inputProps={inputProps}
            />
          </FormControl>
        ) : (
          category.emoji ?? '🤗'
        )}
      </TableCell>
      <TableCell>
        {isEditing ? (
          <FormControl variant='standard' size='small' margin='none'>
            <TextField
              variant='outlined'
              name='name'
              value={formValue.name}
              size='small'
              onChange={handleChange}
              margin='none'
              inputProps={inputProps}
            />
          </FormControl>
        ) : (
          category.name
        )}
      </TableCell>
      <TableCell>
        {isEditing ? (
          <FormControl
            fullWidth
            disabled={!isEditing}
            variant='outlined'
            size='small'
            margin='none'
          >
            <Select
              name='type'
              value={formValue.type}
              onChange={handleChange}
              inputProps={inputProps}
              margin='none'
              size='small'
            >
              <MenuItem value='INCOME'>INCOME</MenuItem>
              <MenuItem value='EXPENSE'>EXPENSE</MenuItem>
              <MenuItem value='EXCHANGE'>EXCHANGE</MenuItem>
              <MenuItem value={''}>None</MenuItem>
            </Select>
          </FormControl>
        ) : (
          category.type
        )}
      </TableCell>
      <TableCell>
        {isEditing ? (
          <FormControl variant='standard' size='small' margin='none'>
            <TextField
              variant='outlined'
              name='name'
              value={formValue.description}
              size='small'
              onChange={handleChange}
              margin='none'
              inputProps={inputProps}
              fullWidth
            />
          </FormControl>
        ) : (
          category.description
        )}
      </TableCell>
      <TableCell>
        <Switch
          disabled={!isEditing}
          checked={formValue.active}
          name='active'
          onChange={handleChange}
          inputProps={inputProps}
          size={'small'}
        />
      </TableCell>
      <TableCell align='right'>
        <span
          onClick={() => {
            if (isEditing) {
              handleSave()
            }
            setIsEditing((val) => !val)
          }}
          style={{ cursor: 'pointer' }}
        >
          {isEditing ? 'Save' : 'Edit'}
        </span>
        {' | '}
        Delete
      </TableCell>
    </TableRow>
  )
}
