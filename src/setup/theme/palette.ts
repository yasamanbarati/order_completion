export const palette = {
  neutral: {
    main: '#EDEEF2',
    contrastText: '#000',
  },
  dark: {
    main: '#000',
  },
  orange: {
    main: '#FF5C01',
    contrastText: 'linear-gradient(112.6deg, #E5E6EC 0%, #EDEEF2 100%)',
  },
}

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary']
    dark: Palette['primary']
    orange: Palette['primary']
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary']
    dark?: PaletteOptions['primary']
    orange?: PaletteOptions['primary']
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true
    dark: true
    orange: true
  }
}
