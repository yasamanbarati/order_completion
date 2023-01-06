import { Box } from "@mui/material"
import { BoxTitle } from "components/box/box_title/box_title"
import { DiscountCodeInput } from "./discount_code_input/discount_code_input"

export const DiscountCode = () => {
    return (
        <Box>
            <BoxTitle title="کد تخفیف" Mode={false} />
            <DiscountCodeInput />
        </Box>
    )
}
