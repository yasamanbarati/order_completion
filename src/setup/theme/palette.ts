export const palette = {
  neutral: {
    main: '#EDEEF2',
    contrastText: '#000',
  },
  warning: {
    main: '#FF5C01',
    contrastText: 'linear-gradient(112.6deg, #E5E6EC 0%, #EDEEF2 100%)',
  },
  default: {
    main: '#2C3036',
    contrastText: '#000',
  },
}

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary']
    default: Palette['primary']
    warning: Palette['primary']
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary']
    default?: PaletteOptions['primary']
    warning?: PaletteOptions['primary']
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true
    default: true
    warning: true
  }
}
