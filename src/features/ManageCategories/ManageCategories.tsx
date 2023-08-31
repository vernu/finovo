import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { CategoryRow } from './CategoryRow'
import { useState } from 'react'
import {
  Category,
  useCategoriesQuery,
} from '@lib/graphql/generated/graphql'

export default function ManageCategories() {
  const categoriesQuery = useCategoriesQuery()

  const [newCategories, setNewCategories] = useState<any[]>([])

  return (
    <TableContainer
      component={Paper}
      sx={{ minHeight: '540px' }}
      title='Manage Categories'
    >
      <Table sx={{ minWidth: 650 }} size='small'>
        <TableHead>
          <TableRow>
            <TableCell width='30px'>Emoji</TableCell>
            <TableCell width='240px'>Name</TableCell>
            <TableCell width='60px'>Type</TableCell>
            <TableCell>Description</TableCell>
            <TableCell width='40px'>Active</TableCell>
            <TableCell align='right'>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...(categoriesQuery.data?.categories ?? []), ...newCategories].map(
            (category: Category) => (
              <CategoryRow key={category.name} category={category} />
            )
          )}
        </TableBody>
      </Table>
      <Button
        variant='contained'
        color='primary'
        sx={{
          margin: '10px',
          textTransform: 'none',
        }}
        size='small'
        onClick={() => {
          setNewCategories((v) => [
            ...v,
            { name: '', emoji: '', type: '', description: '', active: true },
          ])
        }}
      >
        Add Category
      </Button>
    </TableContainer>
  )
}
