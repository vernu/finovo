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
import useAppTheme from '../hooks/useAppTheme'
import { PaletteMode } from '@mui/material'
import Analytics from '../features/Analytics/Analytics'
import { Meta } from '../features/Meta/Meta'

function MyApp({ Component, pageProps }: AppProps) {
  const { appTheme, setAppTheme } = useAppTheme()
  const darkTheme = createTheme({
    palette: {
      mode: appTheme as PaletteMode,
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
          <Analytics />
          <Meta />
          <Toaster />
          <ConfirmModal />
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>{' '}
    </Provider>
  )
}

export default MyApp
