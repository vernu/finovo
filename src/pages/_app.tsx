import '../styles/globals.css'
import type { AppProps } from 'next/app'
import apolloClient from '../lib/graphql/apolloClient'
import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { Toaster } from 'react-hot-toast'
import ConfirmModal from '../components/common/ConfirmModal'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

function MyApp({ Component, pageProps }: AppProps) {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#00FF00',
      },
      secondary: {
        main: '#FF0000',
      },
    },
  })

  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <ApolloProvider client={apolloClient}>
          <Toaster />
          <ConfirmModal />
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>{' '}
    </Provider>
  )
}

export default MyApp
