import { gql, useQuery } from '@apollo/client'
import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectTransactions } from '../../store/slices/transaction.slice'

export default function TransactionInsight() {
  const TRANSACTION_INSIGHT_QUERY = gql`
    query TransactionListInsight(
      $period: String
      $currencyCodes: [String]
      $categoryIds: [String]
      $descriptionContains: String
    ) {
      transactionListInsight(
        period: $period
        currencyCodes: $currencyCodes
        categoryIds: $categoryIds
        descriptionContains: $descriptionContains
      ) {
        totalAmount
        totalTransactions
        maxAmount
        minAmount
        avgAmount
      }
    }
  `

  const { filters } = useSelector(selectTransactions)
  const transactionInsightQuery = useQuery(TRANSACTION_INSIGHT_QUERY, {
    variables: filters,
  })

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper variant='outlined'>
            <Typography variant='body1' component='h2' padding={0.5}>
              Total Transactions :{' '}
              {transactionInsightQuery.data?.transactionListInsight
                .totalTransactions ?? '-:-'}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper variant='outlined'>
            <Typography variant='body1' component='h2' padding={0.5}>
              Total Amount :{' '}
              {transactionInsightQuery.data?.transactionListInsight.totalAmount?.toLocaleString() ??
                '-:-'}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}