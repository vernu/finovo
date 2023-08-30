import { gql } from '@apollo/client'

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        name
        email
      }
      token
    }
  }
`

export const REGISTER_USER_MUTATION = gql`
  mutation Register($name: String!, $email: String!, $password: String!) {
    createAccount(name: $name, email: $email, password: $password) {
      user {
        id
        name
        email
      }
      token
    }
  }
`

export const Categories = gql`
  query Categories {
    categories {
      id
      name
      type
      emoji
      description
      active
    }
  }
`

export const ADD_CATEGORY_MUTATION = gql`
  mutation ADD_CATEGORY_MUTATION(
    $name: String!
    $emoji: String
    $description: String
    $type: String
    $active: Boolean
  ) {
    addCategory(
      name: $name
      emoji: $emoji
      description: $description
      type: $type
      active: $active
    ) {
      id
      name
      emoji
      description
      type
      active
      createdAt
    }
  }
`

export const UPDATE_CATEGORY_MUTATION = gql`
  mutation UPDATE_CATEGORY_MUTATION(
    $id: String!
    $name: String!
    $emoji: String
    $description: String
    $type: String
    $active: Boolean
  ) {
    updateCategory(
      id: $id
      name: $name
      emoji: $emoji
      description: $description
      type: $type
      active: $active
    ) {
      id
      name
      emoji
      description
      type
      active
      createdAt
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

export const TRANSACTION_INSIGHT_QUERY = gql`
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
    totalTransactions
    currencies{
      currencyCode
      totalAmount
      totalTransactions
      maxAmount
      minAmount
      avgAmount
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

export const BUDGET_LIST_QUERY = gql`
  query budgets(
    $year: Int
  ) {
    budgets(
      year: $year
    ) {
      id
      year
      budgetBasis
      monthlyBudget
      yearlyBudget
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

export const ADD_BUDGET_MUTATION = gql`
mutation AddBudget(
  $year: Int
  $categoryId: String
  $currencyCode: String
  $budgetBasis: String
  $monthlyBudget: Float
  $yearlyBudget: Float
) {
  addBudget(
    year: $year
    categoryId: $categoryId
    currencyCode: $currencyCode
    budgetBasis: $budgetBasis
    monthlyBudget: $monthlyBudget
    yearlyBudget: $yearlyBudget
  ) {
    year
    budgetBasis
    yearlyBudget
    monthlyBudget
    category {
      name
    }
    currency {
      code
    }
  }
}
`

export const UPDATE_BUDGET_MUTATION = gql`
mutation UpdateBudget(
  $id: String
  $year: Int
  $categoryId: String
  $currencyCode: String
  $budgetBasis: String
  $monthlyBudget: Float
  $yearlyBudget: Float
) {
  updateBudget(
    id: $id
    year: $year
    categoryId: $categoryId
    currencyCode: $currencyCode
    budgetBasis: $budgetBasis
    monthlyBudget: $monthlyBudget
    yearlyBudget: $yearlyBudget
  ) {
    year
    budgetBasis
    yearlyBudget
    monthlyBudget
    category {
      id
      name
    }
    currency {
      code
    }
  }
}
`

export const DELETE_BUDGET_MUTATION = gql`
  mutation deleteBudget($id: String!) {
    deleteBudget(id: $id) {
      id
    }
  }
`
