import { setOptionListAction } from 'scenes/_slice/home.slice'
import { dispatch } from 'setup/redux/store'
import { addresss } from './mock'

export const getHomePageData = () => {
<<<<<<< HEAD
  dispatch(setOptionListAction(addresss))1
=======
  dispatch(setOptionListAction(addresss))
>>>>>>> 63583bf880c51f50e439e8a674649b177ba85f04
}
export const initializeAppData = () => {
  getHomePageData()
}
