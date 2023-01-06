import { IconButton } from "@mui/material"
import { IconButtonProps } from "services/type/type"

export const CustomIconButton = ({ color, ariaLabel, children }: IconButtonProps) => {
    return (
        <IconButton color={color} aria-label={ariaLabel}>
            {children}
        </IconButton>
    )
}
