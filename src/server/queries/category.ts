import {
  extendType,
  intArg,
  nonNull,
  ObjectDefinitionBlock,
} from 'nexus/dist/core'
import {
  categoryListResolver,
  singleCategoryResolver,
} from '../resolvers/category'

export const CategoryQuery = extendType({
  type: 'Query',
  definition(t: ObjectDefinitionBlock<'Query'>) {
    t.list.field('categories', {
      type: 'Category',
      resolve: categoryListResolver,
    })

    t.field('category', {
      type: 'Category',
      args: {
        id: nonNull(intArg()),
      },
      resolve: singleCategoryResolver,
    })
  },
  
})
