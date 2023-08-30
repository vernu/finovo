import { gql } from '@apollo/client'

export const Login = gql`
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

export const Register = gql`
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

export const AddCategory = gql`
  mutation AddCategory(
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

export const UpdateCategory = gql`
  mutation UpdateCategory(
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

export const Transactions = gql`
  query Transactions(
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

export const TransactionListInsight = gql`
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

export const AddTransaction = gql`
  mutation AddTransaction(
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
export const DeleteTransaction = gql`
  mutation DeleteTransaction($id: String!) {
    deleteTransaction(id: $id) {
      id
    }
  }
`

export const UpdateTransaction = gql`
  mutation UpdateTransaction(
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

export const Budgets = gql`
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

export const AddBudget = gql`
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

export const UpdateBudget = gql`
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

export const DeleteBudget = gql`
  mutation deleteBudget($id: String!) {
    deleteBudget(id: $id) {
      id
    }
  }
`
