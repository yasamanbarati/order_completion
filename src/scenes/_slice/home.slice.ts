import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddressType, PaymentMethodType } from './type'

interface ReduxBodyType {
  optionList: AddressType[]
  selectedOption: string
  PaymentMethod: PaymentMethodType[]
}

const initialState: ReduxBodyType = {
  optionList: [],
  selectedOption: '',
  PaymentMethod: [],
}

const setOptionList = (
  state: ReduxBodyType,
  action: PayloadAction<AddressType[]>,
) => {
  state.optionList = action.payload
}
const setSelectedOption = (
  state: ReduxBodyType,
  action: PayloadAction<string>,
) => {
  state.selectedOption = action.payload
}
const setPaymentMethod = (
  state: ReduxBodyType,
  action: PayloadAction<PaymentMethodType[]>,
) => {
  state.PaymentMethod = action.payload
}
const homeSlice = createSlice({
  name: 'homeState',
  initialState,
  reducers: { setOptionList, setSelectedOption, setPaymentMethod },
})

export const {
  setOptionList: setOptionListAction,
  setSelectedOption: setSelectedOptionAction,
  setPaymentMethod: setPaymentMethodAction,
} = homeSlice.actions

export default homeSlice.reducer
