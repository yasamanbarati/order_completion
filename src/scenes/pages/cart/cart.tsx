import { Box } from "@mui/material"
import { useEffect } from "react"
import { Header } from "scenes/header/header"
import { initializeAppData } from "services/server/service"
import { AddresssBox } from "./components/addresss_box/addresss_box"
import { CustomPaymentCard } from "./components/custom_card/custom_payment_card/custom_payment_card"
import { DiscountCode } from "./components/discount_code/discount_code"
import { PaymentMethod } from "./components/payment_method/payment_method"

export const Cart = () => {

  useEffect(() => { initializeAppData() }, [])

  return (
    <Box>
      <Header title="سبد خرید" />
      <Box sx={{
        padding: "39px 19px 10px 19px"
      }}>
        <AddresssBox />
        <PaymentMethod />
        <DiscountCode />
        <CustomPaymentCard />
      </Box>
    </Box>
  )
}
