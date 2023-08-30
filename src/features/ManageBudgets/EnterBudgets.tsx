import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button } from '@mui/material'
import { useState } from 'react'
import { BudgetEntryRow } from './BudgetEntryRow'
import { FiPlus } from 'react-icons/fi'
import { Budget, useBudgetsQuery } from '../../lib/graphql/generated/graphql'

const EnterBudgets = () => {
  const budgetsQuery = useBudgetsQuery()

  const [newEntries, setNewEntries] = useState<any[]>([])

  return (
    <TableContainer
      component={Paper}
      sx={{ minHeight: '540px' }}
      title='Manage Categories'
    >
      <Table sx={{ minWidth: 650 }} size='small'>
        <TableHead>
          <TableRow>
            <TableCell width='240px'>Category</TableCell>
            <TableCell width='160px'>Budget Basis</TableCell>
            <TableCell width='80px'>Currency</TableCell>
            <TableCell width='160px'>Monthly Budget</TableCell>
            <TableCell width='160px'>Annual Budget</TableCell>
            <TableCell align='right'>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...(budgetsQuery.data?.budgets ?? []), ...newEntries].map(
            (entry: Budget) => (
              <BudgetEntryRow key={Math.random()} budget={entry} />
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
          setNewEntries((v) => [...v, {}])
        }}
        startIcon={<FiPlus />}
      >
        Add new line
      </Button>
    </TableContainer>
  )
}

export default EnterBudgets
