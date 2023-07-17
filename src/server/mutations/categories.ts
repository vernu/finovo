import { isLoggedIn } from './../shared/authorize'
import { CreateCategoryArgs, UpdateCategoryArgs } from './../types/category'
import {
  createCategoryResolver,
  updateCategoryResolver,
} from './../resolvers/category'
import { extendType } from 'nexus'

export const AddCategory = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('addCategory', {
      type: 'Category',
      args: CreateCategoryArgs,
      authorize: isLoggedIn,
      resolve: createCategoryResolver,
    })
  },
})

export const UpdateCategory = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('updateCategory', {
      type: 'Category',
      args: UpdateCategoryArgs,
      resolve: updateCategoryResolver,
    })
  },
})
