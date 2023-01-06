import { Box, styled } from "@mui/material"
import { CustomIconButton } from "components/button/custom_icon_button/custom_icon_button"
import { ArrowForwardIos } from "@mui/icons-material"
import { CustomTypography } from "components/custom/custom_typography/custom_typography"
import { TrashIcon } from "components/icons"

interface HeaderProps {
    title: string | undefined
}

const HeaderBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "35px 25px",
    "& h1": {
        fontWeight: "700",
        fontSize: "20px",
        lineHeight: "20px",
        textAlign: "center",
        color: theme.palette.default.contrastText,
    },
    "& svg:first-child": {
        width: "37px",
        height: "27px",
        color: theme.palette.default.main,
    },
    "& svg:last-child": {
        width: "33.35px",
        height: "40px",
        color: theme.palette.default.main,
    },
}))

export const Header = ({ title }: HeaderProps) => {
    return (
        <HeaderBox>
            <CustomIconButton
                color="default"
                ariaLabel="Arrow-back">
                <ArrowForwardIos fontSize="large" />
            </CustomIconButton>

            <CustomTypography text={title} variant="h1" />

            <CustomIconButton
                color="default"
                ariaLabel="Arrow-back">
                <TrashIcon />
            </CustomIconButton>
        </HeaderBox>
    )
}
