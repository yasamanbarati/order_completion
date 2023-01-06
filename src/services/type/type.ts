import { SxProps } from '@mui/material'
import { ReactNode } from 'react'

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
  title?: string | undefined
  text?: string | undefined
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
export interface IconButtonProps {
  children: ReactNode
  color: any
  ariaLabel?: string | undefined
}
export interface BoxTitleProps {
  titleStyle?: SxProps
  textStyle?: SxProps
  title: string | undefined
  text: string | undefined
  children: ReactNode
  Mode: boolean
}
export interface OptionCardProps {
  text: string
  address: string
  mapId?: string
  id: string
}
