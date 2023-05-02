import { gql } from '@apollo/client'

export const ALL_CATEGORIES_QUERY = gql`
  query ALL_CATEGORIES_QUERY {
    categories {
      id
      name
    }
  }
`

export const ADD_TRANSACTION_MUTATION = gql`
  mutation ADD_TRANSACTION_MUTATION(
    $amount: Float!
    $categoryId: String!
    $currencyCode: String!
    $date: String!
    $description: String
  ) {
    addTransaction(
      amount: $amount
      categoryId: $categoryId
      currencyCode: $currencyCode
      date: $date
      description: $description
    ) {
      id
      amount
      description
      category {
        id
        name
      }
      currency {
        id
        code
      }
      date
      createdAt
    }
  }
`
export const DELETE_TRANSACTION_MUTATION = gql`
  mutation DELETE_TRANSACTION_MUTATION($id: String!) {
    deleteTransaction(id: $id) {
      id
    }
  }
`
