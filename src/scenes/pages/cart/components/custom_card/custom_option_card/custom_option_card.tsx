import { Box, styled } from "@mui/material"
import { TypographyProps } from "services/type/type"
import { CustomTypography } from "components/custom/custom_typography/custom_typography"

const OptionCardBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: "0 15px",
    height: "60px",
    background: "linear-gradient(275.18deg, #F2F3F6 0%, #E5E6EC 146.05%)",
    boxShadow: "-3px -3px 20px #FFFFFF",
    borderRadius: "10px",
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
export const CustomOptionCard = ({ text }: TypographyProps) => {
    return (
        <OptionCardBox>
            <Box>
                <CustomTypography text={text} variant="h2" textStyle={TitleStyle} />
            </Box>
            <Box>
                <CustomTypography text={text} variant="body1" textStyle={TextStyle} />
            </Box>
        </OptionCardBox>
    )
}
