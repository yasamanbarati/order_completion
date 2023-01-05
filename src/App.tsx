import { Fragment } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from 'setup/redux/store'
import { theme } from 'setup/theme'
import { Cart } from 'scenes/pages/cart/cart'

export const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Cart />
        </ThemeProvider>
      </Provider>
    </Fragment>
  )
}
