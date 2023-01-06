import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import { useAppSelector } from 'setup/redux/react-hooks';
import { CustomOptionCard } from '../../custom_card/custom_option_card/custom_option_card';

export const AddresssBoxOption = () => {

    const AddressList = useAppSelector(state => state.home.optionList)
    console.log(AddressList);

    return (
        <FormControl>
            <RadioGroup>
            </RadioGroup>
        </FormControl>
    )
}
