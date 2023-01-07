import { SVGAttributes } from 'react'

export interface PaymentMethodType {
  name: string
  icon: (props: SVGAttributes<SVGElement>) => JSX.Element
}
export interface AddressType {
  id: string
  text: string
  address: string
  mapId?: number[] | any
}
