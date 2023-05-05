import '../styles/globals.css'
import type { AppProps } from 'next/app'
import apolloClient from '../lib/graphql/apolloClient'
import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { Toaster } from 'react-hot-toast'
import ConfirmModal from '../components/common/ConfirmModal'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Toaster />
        <ConfirmModal />
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  )
}

export default MyApp
