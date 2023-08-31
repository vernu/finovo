
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import React from 'react'
import { useSelector } from 'react-redux'
import { selectTransactions } from '../../../store/slices/transaction.slice'
import {
  TransactionListCurrencyInsight,
  useTransactionListInsightQuery,
} from '../../../lib/graphql/generated/graphql'

export default function TransactionInsight() {
  const { filters } = useSelector(selectTransactions)
  const transactionInsightQuery = useTransactionListInsightQuery({
    variables: filters,
  })

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper variant='outlined'>
            <Typography variant='body1' component='h2' padding={0.5}>
              {transactionInsightQuery.data?.transactionListInsight
                ?.totalTransactions ?? '-:-'}{' '}
              txs
              {transactionInsightQuery.data?.transactionListInsight?.currencies?.map(
                (val: TransactionListCurrencyInsight | null) => (
                  <span key={val?.currencyCode}>
                    {' | '}
                    {val?.currencyCode} {val?.totalAmount?.toLocaleString()}
                  </span>
                )
              ) ?? '-:-'}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}
