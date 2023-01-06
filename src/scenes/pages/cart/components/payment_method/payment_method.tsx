import { Box } from "@mui/material"
import { BoxTitle } from "components/box/box_title/box_title"
import { PaymentMethodOptions } from "./payment_method_options/payment_method_options"

export const PaymentMethod = () => {
    return (
        <Box>
            <BoxTitle title="انتخاب نحوه پرداخت" Mode={false} />
            <PaymentMethodOptions />
        </Box>
    )
}
