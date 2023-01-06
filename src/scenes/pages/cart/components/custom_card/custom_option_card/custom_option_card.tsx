import { Box, FormControlLabel, Radio, styled } from "@mui/material"
import { CustomTypography } from "components/custom/custom_typography/custom_typography"
import { useState } from "react"
import { OptionCardProps } from "services/type/type"
import { useAppSelector } from "setup/redux/react-hooks"

const StyleFormControlLabel = styled(FormControlLabel)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: "0 15px",
    minHeight: "60px",
    background: "linear-gradient(275.18deg, #F2F3F6 0%, #E5E6EC 146.05%)",
    boxShadow: "-3px -3px 20px #FFFFFF",
    borderRadius: "10px",
})
const RadioElement = styled(Radio)({

})
const TitleStyle = {
    fonWeight: "700",
    fontSize: "16px",
    lineHeight: "150%",
    color: "#000",
    marginRight: "14px"
}

const TextStyle = {
    fonWeight: "400",
    fontSize: "14px",
    lineHeight: "150%",
    color: "#575F6B",
    textOverflow: 'ellipsis',
    overflow: "hidden",
    whiteSpace: "nowrap"
}
export const CustomOptionCard = ({ text, address, mapId, id }: OptionCardProps) => {
    const [value, setValue] = useState();
    const selectedOption = useAppSelector(state => state.home.selectedOption)

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   setValue((event.target as HTMLInputElement).value);
    // };
    return (
        <StyleFormControlLabel
            control={
                <Box>
                    <RadioElement
                        checked={id === selectedOption}
                        value={id}
                    />
                </Box>
            } label={
                <Box>
                    <Box>
                        <CustomTypography text={text} variant="h2" textStyle={TitleStyle} />
                    </Box>
                    <Box>
                        <CustomTypography text={address} variant="body1" textStyle={TextStyle} />
                    </Box>
                </Box>
            } />
    )
}
