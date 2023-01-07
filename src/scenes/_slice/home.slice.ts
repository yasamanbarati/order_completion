import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddressType, PaymentMethodType } from './type'

interface ReduxBodyType {
  optionList: AddressType[]
  selectedOption: string
  PaymentMethod: PaymentMethodType[]
  discountCode: string
}

const initialState: ReduxBodyType = {
  optionList: [],
  selectedOption: '',
  PaymentMethod: [],
  discountCode: '',
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
const setDiscountCode = (
  state: ReduxBodyType,
  action: PayloadAction<string>,
) => {
  state.discountCode = action.payload
}
const homeSlice = createSlice({
  name: 'homeState',
  initialState,
  reducers: {
    setOptionList,
    setSelectedOption,
    setPaymentMethod,
    setDiscountCode,
  },
})

export const {
  setOptionList: setOptionListAction,
  setSelectedOption: setSelectedOptionAction,
  setPaymentMethod: setPaymentMethodAction,
  setDiscountCode: setDiscountCodeAction,
} = homeSlice.actions

export default homeSlice.reducer
