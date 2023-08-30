import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { NextRequest } from 'next/server'
import { fieldAuthorizePlugin, makeSchema } from 'nexus'
import path from 'path'
import * as allTypes from '../../../server/types'
import * as allQueries from '../../../server/queries'
import * as allMutations from '../../../server/mutations'
import { createContext } from '../../../server/shared/context'

const schema = makeSchema({
  types: [allTypes, allQueries, allMutations],
  outputs: {
    schema: path.join(
      process.cwd(),
      'src/lib/graphql/generated/schema.graphql'
    ),
    typegen: path.join(process.cwd(), 'src/lib/graphql/generated/nexus.ts'),
    // typegen: __dirname + '/generated/nexus.ts',
  },
  plugins: [fieldAuthorizePlugin()],
})

const server = new ApolloServer({
  introspection: true,
  schema,
})

export default startServerAndCreateNextHandler<NextRequest>(server, {
  context: createContext,
})
