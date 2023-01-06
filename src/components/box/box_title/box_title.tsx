import { Circle } from "@mui/icons-material"
import { Box, styled } from "@mui/material"
import { CustomTypography } from "components/custom/custom_typography/custom_typography"
import { BoxTitleProps } from "services/type/type"

const TitleBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& h2": {
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "14px",
        textAlign: "right",
        color: theme.palette.default.main,
    },
    "& P": {
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "150%",
        color: theme.palette.warning.main,
    },
}))
export const BoxTitle = ({ textStyle, title, text, children, Mode }: BoxTitleProps) => {
    return (
        <TitleBox>
            <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row-reverse" }}>
                <CustomTypography text={title} variant="h2" />
                <Circle sx={{
                    width: "8px",
                    height: "8px",
                    marginLeft: "5px"
                }} color="warning" />
            </Box>
            {Mode === true && <Box sx={{ display: "flex", alignItems: "center" }}>
                <CustomTypography text={text} variant="body1" />
                {children}
            </Box>
            }
        </TitleBox>
    )
}
