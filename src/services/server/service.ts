import { setOptionListAction } from 'scenes/_slice/home.slice'
import { dispatch } from 'setup/redux/store'
import { addresss } from './mock'

export const getHomePageData = () => {
  dispatch(setOptionListAction(addresss))1
}
export const initializeAppData = () => {
  getHomePageData()
}
