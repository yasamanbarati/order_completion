import FormControl from '@mui/material/FormControl'
import RadioGroup from '@mui/material/RadioGroup'
import { useAppSelector } from 'setup/redux/react-hooks'
import { CustomOptionCard } from '../../custom_card/custom_option_card/custom_option_card'

export const AddressBoxOption = () => {
    const options = useAppSelector(state => state.home.optionList)

    return (
        <FormControl sx={{
            width: '100%',
            margin: "20px 0 30px 0",
        }}>
            <RadioGroup>
                {options.map((option, index) => {
                    return <CustomOptionCard key={index} option={option} />
                })}
            </RadioGroup>
        </FormControl>
    )
}
