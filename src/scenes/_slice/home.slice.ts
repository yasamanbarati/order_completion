import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddresssType } from './type'

interface ReduxBodyType {
  optionList: AddresssType[]
  selectedOption: string
}

const initialState: ReduxBodyType = {
  optionList: [],
  selectedOption: '',
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

const homeSlice = createSlice({
  name: 'homeState',
  initialState,
  reducers: { setOptionList, setSelectedOption },
})

export const {
  setOptionList: setOptionListAction,
  setSelectedOption: setSelectedOptionAction,
} = homeSlice.actions

export default homeSlice.reducer
