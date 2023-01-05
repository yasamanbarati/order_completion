import { Fragment } from "react"
import { Typography } from "@mui/material"
import { TypographyProps } from "services/type/type"

export const CustomTypography = ({ variant,
    textStyle,
    text }: TypographyProps) => {
    return (
        <Fragment>
            <Typography
                variant={variant}
                sx={{
                    ...textStyle,
                }}
            >
                {text}
            </Typography>
        </Fragment>
    )
}
