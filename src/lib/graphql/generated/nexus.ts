/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { FieldAuthorizeResolver } from "nexus/dist/plugins/fieldAuthorizePlugin"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * Date custom scalar type
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "date";
    /**
     * Upload custom scalar type
     */
    upload<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Upload";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * Date custom scalar type
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "date";
    /**
     * Upload custom scalar type
     */
    upload<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Upload";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  Upload: any
  date: any
}

export interface NexusGenObjects {
  Category: { // root type
    active?: boolean | null; // Boolean
    description?: string | null; // String
    emoji?: string | null; // String
    id: string; // String!
    name?: string | null; // String
    slug?: string | null; // String
    type?: string | null; // String
  }
  CreateAccountResponsePayload: { // root type
    token?: string | null; // String
    user?: NexusGenRootTypes['User'] | null; // User
  }
  Currency: { // root type
    code: string; // String!
    id: string; // String!
    name?: string | null; // String
    symbol?: string | null; // String
  }
  LoginResponsePayload: { // root type
    token?: string | null; // String
    user?: NexusGenRootTypes['User'] | null; // User
  }
  Mutation: {};
  Query: {};
  Transaction: { // root type
    amount: number; // Float!
    category?: NexusGenRootTypes['Category'] | null; // Category
    createdAt?: NexusGenScalars['date'] | null; // date
    currency?: NexusGenRootTypes['Currency'] | null; // Currency
    date?: NexusGenScalars['date'] | null; // date
    description?: string | null; // String
    id: string; // String!
  }
  TransactionListCurrencyInsight: { // root type
    avgAmount?: number | null; // Float
    currencyCode: string; // String!
    maxAmount?: number | null; // Float
    minAmount?: number | null; // Float
    totalAmount?: number | null; // Float
    totalTransactions: number; // Int!
  }
  TransactionListInsight: { // root type
    currencies: Array<NexusGenRootTypes['TransactionListCurrencyInsight'] | null>; // [TransactionListCurrencyInsight]!
    totalTransactions: number; // Int!
  }
  User: { // root type
    email?: string | null; // String
    id: string; // String!
    name?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Category: { // field return type
    active: boolean | null; // Boolean
    createdAt: NexusGenScalars['date'] | null; // date
    description: string | null; // String
    emoji: string | null; // String
    id: string; // String!
    name: string | null; // String
    slug: string | null; // String
    transactions: Array<NexusGenRootTypes['Transaction'] | null> | null; // [Transaction]
    type: string | null; // String
  }
  CreateAccountResponsePayload: { // field return type
    token: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
  }
  Currency: { // field return type
    code: string; // String!
    id: string; // String!
    name: string | null; // String
    symbol: string | null; // String
  }
  LoginResponsePayload: { // field return type
    token: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
  }
  Mutation: { // field return type
    addCategory: NexusGenRootTypes['Category']; // Category!
    addTransaction: NexusGenRootTypes['Transaction']; // Transaction!
    createAccount: NexusGenRootTypes['CreateAccountResponsePayload']; // CreateAccountResponsePayload!
    deleteTransaction: NexusGenRootTypes['Transaction']; // Transaction!
    importData: string; // String!
    login: NexusGenRootTypes['LoginResponsePayload']; // LoginResponsePayload!
    loginWithGoogle: NexusGenRootTypes['LoginResponsePayload']; // LoginResponsePayload!
    updateCategory: NexusGenRootTypes['Category']; // Category!
    updateTransaction: NexusGenRootTypes['Transaction']; // Transaction!
  }
  Query: { // field return type
    categories: Array<NexusGenRootTypes['Category'] | null> | null; // [Category]
    category: NexusGenRootTypes['Category'] | null; // Category
    transaction: NexusGenRootTypes['Transaction'] | null; // Transaction
    transactionListInsight: NexusGenRootTypes['TransactionListInsight'] | null; // TransactionListInsight
    transactions: Array<NexusGenRootTypes['Transaction'] | null> | null; // [Transaction]
  }
  Transaction: { // field return type
    amount: number; // Float!
    category: NexusGenRootTypes['Category'] | null; // Category
    createdAt: NexusGenScalars['date'] | null; // date
    currency: NexusGenRootTypes['Currency'] | null; // Currency
    date: NexusGenScalars['date'] | null; // date
    description: string | null; // String
    id: string; // String!
    type: string | null; // String
  }
  TransactionListCurrencyInsight: { // field return type
    avgAmount: number | null; // Float
    currencyCode: string; // String!
    maxAmount: number | null; // Float
    minAmount: number | null; // Float
    totalAmount: number | null; // Float
    totalTransactions: number; // Int!
  }
  TransactionListInsight: { // field return type
    currencies: Array<NexusGenRootTypes['TransactionListCurrencyInsight'] | null>; // [TransactionListCurrencyInsight]!
    totalTransactions: number; // Int!
  }
  User: { // field return type
    email: string | null; // String
    id: string; // String!
    name: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Category: { // field return type name
    active: 'Boolean'
    createdAt: 'date'
    description: 'String'
    emoji: 'String'
    id: 'String'
    name: 'String'
    slug: 'String'
    transactions: 'Transaction'
    type: 'String'
  }
  CreateAccountResponsePayload: { // field return type name
    token: 'String'
    user: 'User'
  }
  Currency: { // field return type name
    code: 'String'
    id: 'String'
    name: 'String'
    symbol: 'String'
  }
  LoginResponsePayload: { // field return type name
    token: 'String'
    user: 'User'
  }
  Mutation: { // field return type name
    addCategory: 'Category'
    addTransaction: 'Transaction'
    createAccount: 'CreateAccountResponsePayload'
    deleteTransaction: 'Transaction'
    importData: 'String'
    login: 'LoginResponsePayload'
    loginWithGoogle: 'LoginResponsePayload'
    updateCategory: 'Category'
    updateTransaction: 'Transaction'
  }
  Query: { // field return type name
    categories: 'Category'
    category: 'Category'
    transaction: 'Transaction'
    transactionListInsight: 'TransactionListInsight'
    transactions: 'Transaction'
  }
  Transaction: { // field return type name
    amount: 'Float'
    category: 'Category'
    createdAt: 'date'
    currency: 'Currency'
    date: 'date'
    description: 'String'
    id: 'String'
    type: 'String'
  }
  TransactionListCurrencyInsight: { // field return type name
    avgAmount: 'Float'
    currencyCode: 'String'
    maxAmount: 'Float'
    minAmount: 'Float'
    totalAmount: 'Float'
    totalTransactions: 'Int'
  }
  TransactionListInsight: { // field return type name
    currencies: 'TransactionListCurrencyInsight'
    totalTransactions: 'Int'
  }
  User: { // field return type name
    email: 'String'
    id: 'String'
    name: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addCategory: { // args
      active?: boolean | null; // Boolean
      description?: string | null; // String
      emoji?: string | null; // String
      name?: string | null; // String
      type?: string | null; // String
    }
    addTransaction: { // args
      amount?: number | null; // Float
      categoryId?: string | null; // String
      currencyCode?: string | null; // String
      date?: string | null; // String
      description?: string | null; // String
    }
    createAccount: { // args
      email: string; // String!
      name: string; // String!
      password: string; // String!
    }
    deleteTransaction: { // args
      id: string; // String!
    }
    importData: { // args
      fileCategory: string; // String!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    loginWithGoogle: { // args
      idToken: string; // String!
    }
    updateCategory: { // args
      active?: boolean | null; // Boolean
      description?: string | null; // String
      emoji?: string | null; // String
      id?: string | null; // String
      name?: string | null; // String
      type?: string | null; // String
    }
    updateTransaction: { // args
      amount?: number | null; // Float
      categoryId?: string | null; // String
      currencyCode?: string | null; // String
      date?: string | null; // String
      description?: string | null; // String
      id?: string | null; // String
    }
  }
  Query: {
    category: { // args
      id: number; // Int!
    }
    transaction: { // args
      id: string; // String!
    }
    transactionListInsight: { // args
      categoryIds?: Array<string | null> | null; // [String]
      currencyCodes?: Array<string | null> | null; // [String]
      descriptionContains?: string | null; // String
      period?: string | null; // String
    }
    transactions: { // args
      categoryIds?: Array<string | null> | null; // [String]
      currencyCodes?: Array<string | null> | null; // [String]
      descriptionContains?: string | null; // String
      period?: string | null; // String
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Authorization for an individual field. Returning "true"
     * or "Promise<true>" means the field can be accessed.
     * Returning "false" or "Promise<false>" will respond
     * with a "Not Authorized" error for the field.
     * Returning or throwing an error will also prevent the
     * resolver from executing.
     */
    authorize?: FieldAuthorizeResolver<TypeName, FieldName>
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}