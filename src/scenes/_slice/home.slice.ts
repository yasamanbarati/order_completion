import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddresssType, PaymentMethodType } from './type'

interface ReduxBodyType {
  optionList: AddresssType[]
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
  action: PayloadAction<AddresssType[]>,
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
