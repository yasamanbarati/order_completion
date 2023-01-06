import {
  setOptionListAction,
  setPaymentMethodAction,
} from 'scenes/_slice/home.slice'
import { dispatch } from 'setup/redux/store'
import { address, payment_method } from './mock'

export const getHomePageData = () => {
  dispatch(setOptionListAction(address))
  dispatch(setPaymentMethodAction(payment_method))
}
export const initializeAppData = () => {
  getHomePageData()
}
