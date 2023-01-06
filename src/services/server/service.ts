import { setOptionListAction } from 'scenes/_slice/home.slice'
import { dispatch } from 'setup/redux/store'
import { addresss } from './mock'

export const getHomePageData = () => {
  dispatch(setOptionListAction(addresss))
}
export const initializeAppData = () => {
  getHomePageData()
}
