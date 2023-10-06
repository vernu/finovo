import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
  date: { input: any; output: any; }
};

export type Budget = {
  __typename?: 'Budget';
  budgetBasis?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Category>;
  createdAt?: Maybe<Scalars['date']['output']>;
  currency?: Maybe<Currency>;
  id: Scalars['String']['output'];
  monthlyBudget?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['date']['output']>;
  user?: Maybe<User>;
  year: Scalars['Int']['output'];
  yearlyBudget?: Maybe<Scalars['Float']['output']>;
};

export type Category = {
  __typename?: 'Category';
  active?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  emoji?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CategoryStat = {
  __typename?: 'CategoryStat';
  amount?: Maybe<Scalars['Float']['output']>;
  categoryName: Scalars['String']['output'];
  count: Scalars['Int']['output'];
};

export type CreateAccountResponsePayload = {
  __typename?: 'CreateAccountResponsePayload';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type Currency = {
  __typename?: 'Currency';
  code: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
};

export type CurrencyStat = {
  __typename?: 'CurrencyStat';
  currencyCode: Scalars['String']['output'];
  expenseByCategory: Array<Maybe<CategoryStat>>;
  incomeByCategory: Array<Maybe<CategoryStat>>;
};

export type CurrencyTotalStat = {
  __typename?: 'CurrencyTotalStat';
  currencyCode: Scalars['String']['output'];
  expenseAmount?: Maybe<Scalars['Float']['output']>;
  expenseCount: Scalars['Int']['output'];
  incomeAmount?: Maybe<Scalars['Float']['output']>;
  incomeCount: Scalars['Int']['output'];
  totalAmount?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type DashboardStat = {
  __typename?: 'DashboardStat';
  currencies: Array<Maybe<CurrencyStat>>;
  totals: Array<Maybe<CurrencyTotalStat>>;
};

export type LoginResponsePayload = {
  __typename?: 'LoginResponsePayload';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBudget: Budget;
  addCategory: Category;
  addTransaction: Transaction;
  createAccount: CreateAccountResponsePayload;
  deleteBudget: Budget;
  deleteTransaction: Transaction;
  importData: Scalars['String']['output'];
  login: LoginResponsePayload;
  loginWithGoogle: LoginResponsePayload;
  updateBudget: Budget;
  updateCategory: Category;
  updateTransaction: Transaction;
};


export type MutationAddBudgetArgs = {
  budgetBasis?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  monthlyBudget?: InputMaybe<Scalars['Float']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
  yearlyBudget?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationAddCategoryArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAddTransactionArgs = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateAccountArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationDeleteBudgetArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteTransactionArgs = {
  id: Scalars['String']['input'];
};


export type MutationImportDataArgs = {
  fileCategory: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationLoginWithGoogleArgs = {
  idToken: Scalars['String']['input'];
};


export type MutationUpdateBudgetArgs = {
  budgetBasis?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  monthlyBudget?: InputMaybe<Scalars['Float']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
  yearlyBudget?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationUpdateCategoryArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateTransactionArgs = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  budgets?: Maybe<Array<Maybe<Budget>>>;
  categories?: Maybe<Array<Maybe<Category>>>;
  category?: Maybe<Category>;
  currentUser?: Maybe<User>;
  dashboardStat?: Maybe<DashboardStat>;
  transaction?: Maybe<Transaction>;
  transactionListInsight?: Maybe<TransactionListInsight>;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
};


export type QueryBudgetsArgs = {
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTransactionArgs = {
  id: Scalars['String']['input'];
};


export type QueryTransactionListInsightArgs = {
  categoryIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  currencyCodes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descriptionContains?: InputMaybe<Scalars['String']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTransactionsArgs = {
  categoryIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  currencyCodes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descriptionContains?: InputMaybe<Scalars['String']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
};

export type Transaction = {
  __typename?: 'Transaction';
  amount: Scalars['Float']['output'];
  category?: Maybe<Category>;
  createdAt?: Maybe<Scalars['date']['output']>;
  currency?: Maybe<Currency>;
  date?: Maybe<Scalars['date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type TransactionListCurrencyInsight = {
  __typename?: 'TransactionListCurrencyInsight';
  avgAmount?: Maybe<Scalars['Float']['output']>;
  currencyCode: Scalars['String']['output'];
  maxAmount?: Maybe<Scalars['Float']['output']>;
  minAmount?: Maybe<Scalars['Float']['output']>;
  totalAmount?: Maybe<Scalars['Float']['output']>;
  totalTransactions: Scalars['Int']['output'];
};

export type TransactionListInsight = {
  __typename?: 'TransactionListInsight';
  currencies: Array<Maybe<TransactionListCurrencyInsight>>;
  totalTransactions: Scalars['Int']['output'];
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponsePayload', token?: string | null, user?: { __typename?: 'User', id: string, name?: string | null, email?: string | null } | null } };

export type RegisterMutationVariables = Exact<{
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', createAccount: { __typename?: 'CreateAccountResponsePayload', token?: string | null, user?: { __typename?: 'User', id: string, name?: string | null, email?: string | null } | null } };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', currentUser?: { __typename?: 'User', id: string, name?: string | null, email?: string | null } | null };

export type BudgetsQueryVariables = Exact<{
  year?: InputMaybe<Scalars['Int']['input']>;
}>;


export type BudgetsQuery = { __typename?: 'Query', budgets?: Array<{ __typename?: 'Budget', id: string, year: number, budgetBasis?: string | null, monthlyBudget?: number | null, yearlyBudget?: number | null, currency?: { __typename?: 'Currency', symbol?: string | null, code: string } | null, category?: { __typename?: 'Category', id: string, name?: string | null } | null } | null> | null };

export type AddBudgetMutationVariables = Exact<{
  year?: InputMaybe<Scalars['Int']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  budgetBasis?: InputMaybe<Scalars['String']['input']>;
  monthlyBudget?: InputMaybe<Scalars['Float']['input']>;
  yearlyBudget?: InputMaybe<Scalars['Float']['input']>;
}>;


export type AddBudgetMutation = { __typename?: 'Mutation', addBudget: { __typename?: 'Budget', year: number, budgetBasis?: string | null, yearlyBudget?: number | null, monthlyBudget?: number | null, category?: { __typename?: 'Category', name?: string | null } | null, currency?: { __typename?: 'Currency', code: string } | null } };

export type UpdateBudgetMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  budgetBasis?: InputMaybe<Scalars['String']['input']>;
  monthlyBudget?: InputMaybe<Scalars['Float']['input']>;
  yearlyBudget?: InputMaybe<Scalars['Float']['input']>;
}>;


export type UpdateBudgetMutation = { __typename?: 'Mutation', updateBudget: { __typename?: 'Budget', year: number, budgetBasis?: string | null, yearlyBudget?: number | null, monthlyBudget?: number | null, category?: { __typename?: 'Category', id: string, name?: string | null } | null, currency?: { __typename?: 'Currency', code: string } | null } };

export type DeleteBudgetMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteBudgetMutation = { __typename?: 'Mutation', deleteBudget: { __typename?: 'Budget', id: string } };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories?: Array<{ __typename?: 'Category', id: string, name?: string | null, type?: string | null, emoji?: string | null, description?: string | null, active?: boolean | null } | null> | null };

export type AddCategoryMutationVariables = Exact<{
  name: Scalars['String']['input'];
  emoji?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type AddCategoryMutation = { __typename?: 'Mutation', addCategory: { __typename?: 'Category', id: string, name?: string | null, emoji?: string | null, description?: string | null, type?: string | null, active?: boolean | null, createdAt?: any | null } };

export type UpdateCategoryMutationVariables = Exact<{
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  emoji?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type UpdateCategoryMutation = { __typename?: 'Mutation', updateCategory: { __typename?: 'Category', id: string, name?: string | null, emoji?: string | null, description?: string | null, type?: string | null, active?: boolean | null, createdAt?: any | null } };

export type DashboardStatQueryVariables = Exact<{ [key: string]: never; }>;


export type DashboardStatQuery = { __typename?: 'Query', dashboardStat?: { __typename?: 'DashboardStat', totals: Array<{ __typename?: 'CurrencyTotalStat', currencyCode: string, totalAmount?: number | null, incomeAmount?: number | null, incomeCount: number, expenseAmount?: number | null, expenseCount: number } | null>, currencies: Array<{ __typename?: 'CurrencyStat', currencyCode: string, expenseByCategory: Array<{ __typename?: 'CategoryStat', categoryName: string, amount?: number | null, count: number } | null>, incomeByCategory: Array<{ __typename?: 'CategoryStat', categoryName: string, amount?: number | null, count: number } | null> } | null> } | null };

export type TransactionsQueryVariables = Exact<{
  period?: InputMaybe<Scalars['String']['input']>;
  currencyCodes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  categoryIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  descriptionContains?: InputMaybe<Scalars['String']['input']>;
}>;


export type TransactionsQuery = { __typename?: 'Query', transactions?: Array<{ __typename?: 'Transaction', id: string, description?: string | null, amount: number, date?: any | null, currency?: { __typename?: 'Currency', symbol?: string | null, code: string } | null, category?: { __typename?: 'Category', id: string, name?: string | null } | null } | null> | null };

export type TransactionListInsightQueryVariables = Exact<{
  period?: InputMaybe<Scalars['String']['input']>;
  currencyCodes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  categoryIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  descriptionContains?: InputMaybe<Scalars['String']['input']>;
}>;


export type TransactionListInsightQuery = { __typename?: 'Query', transactionListInsight?: { __typename?: 'TransactionListInsight', totalTransactions: number, currencies: Array<{ __typename?: 'TransactionListCurrencyInsight', currencyCode: string, totalAmount?: number | null, totalTransactions: number, maxAmount?: number | null, minAmount?: number | null, avgAmount?: number | null } | null> } | null };

export type AddTransactionMutationVariables = Exact<{
  amount: Scalars['Float']['input'];
  categoryId: Scalars['String']['input'];
  currencyCode: Scalars['String']['input'];
  date: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type AddTransactionMutation = { __typename?: 'Mutation', addTransaction: { __typename?: 'Transaction', id: string, amount: number, description?: string | null, date?: any | null, createdAt?: any | null, category?: { __typename?: 'Category', id: string, name?: string | null } | null, currency?: { __typename?: 'Currency', id: string, code: string } | null } };

export type DeleteTransactionMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteTransactionMutation = { __typename?: 'Mutation', deleteTransaction: { __typename?: 'Transaction', id: string } };

export type UpdateTransactionMutationVariables = Exact<{
  id: Scalars['String']['input'];
  amount: Scalars['Float']['input'];
  categoryId: Scalars['String']['input'];
  currencyCode: Scalars['String']['input'];
  date: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateTransactionMutation = { __typename?: 'Mutation', updateTransaction: { __typename?: 'Transaction', id: string, amount: number, description?: string | null, date?: any | null, createdAt?: any | null, category?: { __typename?: 'Category', id: string, name?: string | null } | null, currency?: { __typename?: 'Currency', id: string, code: string } | null } };


export const LoginDocument = gql`
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
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
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
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const GetCurrentUserDocument = gql`
    query GetCurrentUser {
  currentUser {
    id
    name
    email
  }
}
    `;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
      }
export function useGetCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
        }
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLazyQuery>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const BudgetsDocument = gql`
    query budgets($year: Int) {
  budgets(year: $year) {
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
    `;

/**
 * __useBudgetsQuery__
 *
 * To run a query within a React component, call `useBudgetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBudgetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBudgetsQuery({
 *   variables: {
 *      year: // value for 'year'
 *   },
 * });
 */
export function useBudgetsQuery(baseOptions?: Apollo.QueryHookOptions<BudgetsQuery, BudgetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BudgetsQuery, BudgetsQueryVariables>(BudgetsDocument, options);
      }
export function useBudgetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BudgetsQuery, BudgetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BudgetsQuery, BudgetsQueryVariables>(BudgetsDocument, options);
        }
export type BudgetsQueryHookResult = ReturnType<typeof useBudgetsQuery>;
export type BudgetsLazyQueryHookResult = ReturnType<typeof useBudgetsLazyQuery>;
export type BudgetsQueryResult = Apollo.QueryResult<BudgetsQuery, BudgetsQueryVariables>;
export const AddBudgetDocument = gql`
    mutation AddBudget($year: Int, $categoryId: String, $currencyCode: String, $budgetBasis: String, $monthlyBudget: Float, $yearlyBudget: Float) {
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
    `;
export type AddBudgetMutationFn = Apollo.MutationFunction<AddBudgetMutation, AddBudgetMutationVariables>;

/**
 * __useAddBudgetMutation__
 *
 * To run a mutation, you first call `useAddBudgetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBudgetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBudgetMutation, { data, loading, error }] = useAddBudgetMutation({
 *   variables: {
 *      year: // value for 'year'
 *      categoryId: // value for 'categoryId'
 *      currencyCode: // value for 'currencyCode'
 *      budgetBasis: // value for 'budgetBasis'
 *      monthlyBudget: // value for 'monthlyBudget'
 *      yearlyBudget: // value for 'yearlyBudget'
 *   },
 * });
 */
export function useAddBudgetMutation(baseOptions?: Apollo.MutationHookOptions<AddBudgetMutation, AddBudgetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddBudgetMutation, AddBudgetMutationVariables>(AddBudgetDocument, options);
      }
export type AddBudgetMutationHookResult = ReturnType<typeof useAddBudgetMutation>;
export type AddBudgetMutationResult = Apollo.MutationResult<AddBudgetMutation>;
export type AddBudgetMutationOptions = Apollo.BaseMutationOptions<AddBudgetMutation, AddBudgetMutationVariables>;
export const UpdateBudgetDocument = gql`
    mutation UpdateBudget($id: String, $year: Int, $categoryId: String, $currencyCode: String, $budgetBasis: String, $monthlyBudget: Float, $yearlyBudget: Float) {
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
    `;
export type UpdateBudgetMutationFn = Apollo.MutationFunction<UpdateBudgetMutation, UpdateBudgetMutationVariables>;

/**
 * __useUpdateBudgetMutation__
 *
 * To run a mutation, you first call `useUpdateBudgetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBudgetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBudgetMutation, { data, loading, error }] = useUpdateBudgetMutation({
 *   variables: {
 *      id: // value for 'id'
 *      year: // value for 'year'
 *      categoryId: // value for 'categoryId'
 *      currencyCode: // value for 'currencyCode'
 *      budgetBasis: // value for 'budgetBasis'
 *      monthlyBudget: // value for 'monthlyBudget'
 *      yearlyBudget: // value for 'yearlyBudget'
 *   },
 * });
 */
export function useUpdateBudgetMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBudgetMutation, UpdateBudgetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBudgetMutation, UpdateBudgetMutationVariables>(UpdateBudgetDocument, options);
      }
export type UpdateBudgetMutationHookResult = ReturnType<typeof useUpdateBudgetMutation>;
export type UpdateBudgetMutationResult = Apollo.MutationResult<UpdateBudgetMutation>;
export type UpdateBudgetMutationOptions = Apollo.BaseMutationOptions<UpdateBudgetMutation, UpdateBudgetMutationVariables>;
export const DeleteBudgetDocument = gql`
    mutation deleteBudget($id: String!) {
  deleteBudget(id: $id) {
    id
  }
}
    `;
export type DeleteBudgetMutationFn = Apollo.MutationFunction<DeleteBudgetMutation, DeleteBudgetMutationVariables>;

/**
 * __useDeleteBudgetMutation__
 *
 * To run a mutation, you first call `useDeleteBudgetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBudgetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBudgetMutation, { data, loading, error }] = useDeleteBudgetMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBudgetMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBudgetMutation, DeleteBudgetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBudgetMutation, DeleteBudgetMutationVariables>(DeleteBudgetDocument, options);
      }
export type DeleteBudgetMutationHookResult = ReturnType<typeof useDeleteBudgetMutation>;
export type DeleteBudgetMutationResult = Apollo.MutationResult<DeleteBudgetMutation>;
export type DeleteBudgetMutationOptions = Apollo.BaseMutationOptions<DeleteBudgetMutation, DeleteBudgetMutationVariables>;
export const CategoriesDocument = gql`
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
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const AddCategoryDocument = gql`
    mutation AddCategory($name: String!, $emoji: String, $description: String, $type: String, $active: Boolean) {
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
    `;
export type AddCategoryMutationFn = Apollo.MutationFunction<AddCategoryMutation, AddCategoryMutationVariables>;

/**
 * __useAddCategoryMutation__
 *
 * To run a mutation, you first call `useAddCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCategoryMutation, { data, loading, error }] = useAddCategoryMutation({
 *   variables: {
 *      name: // value for 'name'
 *      emoji: // value for 'emoji'
 *      description: // value for 'description'
 *      type: // value for 'type'
 *      active: // value for 'active'
 *   },
 * });
 */
export function useAddCategoryMutation(baseOptions?: Apollo.MutationHookOptions<AddCategoryMutation, AddCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCategoryMutation, AddCategoryMutationVariables>(AddCategoryDocument, options);
      }
export type AddCategoryMutationHookResult = ReturnType<typeof useAddCategoryMutation>;
export type AddCategoryMutationResult = Apollo.MutationResult<AddCategoryMutation>;
export type AddCategoryMutationOptions = Apollo.BaseMutationOptions<AddCategoryMutation, AddCategoryMutationVariables>;
export const UpdateCategoryDocument = gql`
    mutation UpdateCategory($id: String!, $name: String!, $emoji: String, $description: String, $type: String, $active: Boolean) {
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
    `;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      emoji: // value for 'emoji'
 *      description: // value for 'description'
 *      type: // value for 'type'
 *      active: // value for 'active'
 *   },
 * });
 */
export function useUpdateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, options);
      }
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const DashboardStatDocument = gql`
    query DashboardStat {
  dashboardStat {
    totals {
      currencyCode
      totalAmount
      incomeAmount
      incomeCount
      expenseAmount
      expenseCount
    }
    currencies {
      currencyCode
      expenseByCategory {
        categoryName
        amount
        count
      }
      incomeByCategory {
        categoryName
        amount
        count
      }
    }
  }
}
    `;

/**
 * __useDashboardStatQuery__
 *
 * To run a query within a React component, call `useDashboardStatQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardStatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardStatQuery({
 *   variables: {
 *   },
 * });
 */
export function useDashboardStatQuery(baseOptions?: Apollo.QueryHookOptions<DashboardStatQuery, DashboardStatQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DashboardStatQuery, DashboardStatQueryVariables>(DashboardStatDocument, options);
      }
export function useDashboardStatLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DashboardStatQuery, DashboardStatQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DashboardStatQuery, DashboardStatQueryVariables>(DashboardStatDocument, options);
        }
export type DashboardStatQueryHookResult = ReturnType<typeof useDashboardStatQuery>;
export type DashboardStatLazyQueryHookResult = ReturnType<typeof useDashboardStatLazyQuery>;
export type DashboardStatQueryResult = Apollo.QueryResult<DashboardStatQuery, DashboardStatQueryVariables>;
export const TransactionsDocument = gql`
    query Transactions($period: String, $currencyCodes: [String], $categoryIds: [String], $descriptionContains: String) {
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
    `;

/**
 * __useTransactionsQuery__
 *
 * To run a query within a React component, call `useTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionsQuery({
 *   variables: {
 *      period: // value for 'period'
 *      currencyCodes: // value for 'currencyCodes'
 *      categoryIds: // value for 'categoryIds'
 *      descriptionContains: // value for 'descriptionContains'
 *   },
 * });
 */
export function useTransactionsQuery(baseOptions?: Apollo.QueryHookOptions<TransactionsQuery, TransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TransactionsQuery, TransactionsQueryVariables>(TransactionsDocument, options);
      }
export function useTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TransactionsQuery, TransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TransactionsQuery, TransactionsQueryVariables>(TransactionsDocument, options);
        }
export type TransactionsQueryHookResult = ReturnType<typeof useTransactionsQuery>;
export type TransactionsLazyQueryHookResult = ReturnType<typeof useTransactionsLazyQuery>;
export type TransactionsQueryResult = Apollo.QueryResult<TransactionsQuery, TransactionsQueryVariables>;
export const TransactionListInsightDocument = gql`
    query TransactionListInsight($period: String, $currencyCodes: [String], $categoryIds: [String], $descriptionContains: String) {
  transactionListInsight(
    period: $period
    currencyCodes: $currencyCodes
    categoryIds: $categoryIds
    descriptionContains: $descriptionContains
  ) {
    totalTransactions
    currencies {
      currencyCode
      totalAmount
      totalTransactions
      maxAmount
      minAmount
      avgAmount
    }
  }
}
    `;

/**
 * __useTransactionListInsightQuery__
 *
 * To run a query within a React component, call `useTransactionListInsightQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransactionListInsightQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionListInsightQuery({
 *   variables: {
 *      period: // value for 'period'
 *      currencyCodes: // value for 'currencyCodes'
 *      categoryIds: // value for 'categoryIds'
 *      descriptionContains: // value for 'descriptionContains'
 *   },
 * });
 */
export function useTransactionListInsightQuery(baseOptions?: Apollo.QueryHookOptions<TransactionListInsightQuery, TransactionListInsightQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TransactionListInsightQuery, TransactionListInsightQueryVariables>(TransactionListInsightDocument, options);
      }
export function useTransactionListInsightLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TransactionListInsightQuery, TransactionListInsightQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TransactionListInsightQuery, TransactionListInsightQueryVariables>(TransactionListInsightDocument, options);
        }
export type TransactionListInsightQueryHookResult = ReturnType<typeof useTransactionListInsightQuery>;
export type TransactionListInsightLazyQueryHookResult = ReturnType<typeof useTransactionListInsightLazyQuery>;
export type TransactionListInsightQueryResult = Apollo.QueryResult<TransactionListInsightQuery, TransactionListInsightQueryVariables>;
export const AddTransactionDocument = gql`
    mutation AddTransaction($amount: Float!, $categoryId: String!, $currencyCode: String!, $date: String!, $description: String) {
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
    `;
export type AddTransactionMutationFn = Apollo.MutationFunction<AddTransactionMutation, AddTransactionMutationVariables>;

/**
 * __useAddTransactionMutation__
 *
 * To run a mutation, you first call `useAddTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTransactionMutation, { data, loading, error }] = useAddTransactionMutation({
 *   variables: {
 *      amount: // value for 'amount'
 *      categoryId: // value for 'categoryId'
 *      currencyCode: // value for 'currencyCode'
 *      date: // value for 'date'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useAddTransactionMutation(baseOptions?: Apollo.MutationHookOptions<AddTransactionMutation, AddTransactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTransactionMutation, AddTransactionMutationVariables>(AddTransactionDocument, options);
      }
export type AddTransactionMutationHookResult = ReturnType<typeof useAddTransactionMutation>;
export type AddTransactionMutationResult = Apollo.MutationResult<AddTransactionMutation>;
export type AddTransactionMutationOptions = Apollo.BaseMutationOptions<AddTransactionMutation, AddTransactionMutationVariables>;
export const DeleteTransactionDocument = gql`
    mutation DeleteTransaction($id: String!) {
  deleteTransaction(id: $id) {
    id
  }
}
    `;
export type DeleteTransactionMutationFn = Apollo.MutationFunction<DeleteTransactionMutation, DeleteTransactionMutationVariables>;

/**
 * __useDeleteTransactionMutation__
 *
 * To run a mutation, you first call `useDeleteTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTransactionMutation, { data, loading, error }] = useDeleteTransactionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTransactionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTransactionMutation, DeleteTransactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTransactionMutation, DeleteTransactionMutationVariables>(DeleteTransactionDocument, options);
      }
export type DeleteTransactionMutationHookResult = ReturnType<typeof useDeleteTransactionMutation>;
export type DeleteTransactionMutationResult = Apollo.MutationResult<DeleteTransactionMutation>;
export type DeleteTransactionMutationOptions = Apollo.BaseMutationOptions<DeleteTransactionMutation, DeleteTransactionMutationVariables>;
export const UpdateTransactionDocument = gql`
    mutation UpdateTransaction($id: String!, $amount: Float!, $categoryId: String!, $currencyCode: String!, $date: String!, $description: String) {
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
    `;
export type UpdateTransactionMutationFn = Apollo.MutationFunction<UpdateTransactionMutation, UpdateTransactionMutationVariables>;

/**
 * __useUpdateTransactionMutation__
 *
 * To run a mutation, you first call `useUpdateTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTransactionMutation, { data, loading, error }] = useUpdateTransactionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      amount: // value for 'amount'
 *      categoryId: // value for 'categoryId'
 *      currencyCode: // value for 'currencyCode'
 *      date: // value for 'date'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useUpdateTransactionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTransactionMutation, UpdateTransactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTransactionMutation, UpdateTransactionMutationVariables>(UpdateTransactionDocument, options);
      }
export type UpdateTransactionMutationHookResult = ReturnType<typeof useUpdateTransactionMutation>;
export type UpdateTransactionMutationResult = Apollo.MutationResult<UpdateTransactionMutation>;
export type UpdateTransactionMutationOptions = Apollo.BaseMutationOptions<UpdateTransactionMutation, UpdateTransactionMutationVariables>;