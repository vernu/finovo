import { gql } from '@apollo/client'

export const ALL_CATEGORIES_QUERY = gql`
  query ALL_CATEGORIES_QUERY {
    categories {
      id
      name
    }
  }
`

export const TRANSACTION_LIST_QUERY = gql`
  query transactions(
    $period: String
    $currencyCodes: [String]
    $categoryIds: [String]
    $descriptionContains: String
  ) {
    transactions(
      period: $period
      currencyCodes: $currencyCodes
      categoryIds: $categoryIds
      descriptionContains: $descriptionContains
    ) {
      id
      description
      amount
      date
      currency {
        symbol
        code
      }
      category {
        id
        name
      }
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

export const UPDATE_TRANSACTION_MUTATION = gql`
  mutation UPDATE_TRANSACTION_MUTATION(
    $id: String!
    $amount: Float!
    $categoryId: String!
    $currencyCode: String!
    $date: String!
    $description: String
  ) {
    updateTransaction(
      id: $id
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
