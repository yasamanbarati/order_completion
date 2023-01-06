import {
  setOptionListAction,
  setPaymentMethodAction,
} from 'scenes/_slice/home.slice'
import { dispatch } from 'setup/redux/store'
import { addresss, payment_method } from './mock'

export const getHomePageData = () => {
  dispatch(setOptionListAction(addresss))
  dispatch(setPaymentMethodAction(payment_method))
}
export const initializeAppData = () => {
  getHomePageData()
}
