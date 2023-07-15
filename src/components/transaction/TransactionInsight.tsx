import { useQuery } from '@apollo/client'
import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { TRANSACTION_INSIGHT_QUERY } from '../../lib/graphql/queries'
import { selectTransactions } from '../../store/slices/transaction.slice'

export default function TransactionInsight() {
  const { filters } = useSelector(selectTransactions)
  const transactionInsightQuery = useQuery(TRANSACTION_INSIGHT_QUERY, {
    variables: filters,
  })

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper variant='outlined'>
            <Typography variant='body1' component='h2' padding={0.5}>
              {transactionInsightQuery.data?.transactionListInsight
                .totalTransactions ?? '-:-'}{' '}
              txs
              {transactionInsightQuery.data?.transactionListInsight?.currencies?.map(
                (i: any) => (
                  <span key={i.currencyCode}>
                    {' | '}
                    {i.currencyCode} {i.totalAmount?.toLocaleString()}
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
