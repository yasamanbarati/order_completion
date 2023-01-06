import { Box, styled } from "@mui/material"
import { useEffect } from "react"
import { Header } from "scenes/header/header"
import { initializeAppData } from "services/server/service"
import { AddresssBox } from "./components/addresss_box/addresss_box"
import { CustomPaymentCard } from "./components/custom_card/custom_payment_card/custom_payment_card"
import { DiscountCode } from "./components/discount_code/discount_code"
import { PaymentMethod } from "./components/payment_method/payment_method"

const ContentBox = styled(Box)(({ theme }) => ({
  padding: "39px 19px 10px 19px",
}))

export const Cart = () => {

  useEffect(() => { initializeAppData() }, [])

  return (
    <Box>
      <Header title="سبد خرید" />
      <ContentBox>
        <AddresssBox />
        <PaymentMethod />
        <DiscountCode />
        <CustomPaymentCard />
      </ContentBox>
    </Box>
  )
}
