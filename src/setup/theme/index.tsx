import { createTheme } from '@mui/material/styles'
import { palette } from './palette'

export const theme = createTheme({
  palette: palette,
  breakpoints: {
    values: {
      //به بالا
      xs: 0,
      mobileS: 320,
      mobileM: 375,
      mobileL: 485,
      sm: 576,
      tabletM: 667,
      tabletL: 768,
    },
  },
})
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    mobileS: true;
    mobileM: true;
    mobileL: true;
    sm: true;
    tabletM: true;
    tabletL: true;
  }
}