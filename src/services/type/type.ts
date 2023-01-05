import { SxProps } from '@mui/material'

export interface ButtonProps {
  variant?: 'contained' | 'outlined' | undefined
  Text: string | undefined
  Price?: string | number | undefined
  onClickEvent?: () => unknown
  sxStyle: SxProps
  icon?: JSX.Element
}
export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body1'
  textStyle?: SxProps
  text: string | undefined
}
export interface CardInformationProps {
  PaymentMode: boolean
  TotalMode: boolean
  text: string | undefined
  TotalNumber?: string | number | undefined
  NumericText: string | number | undefined
  TitleStyle?: SxProps
  NumericTextStyle?: SxProps
}
