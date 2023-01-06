import { Box, styled } from "@mui/material"
import { useEffect } from "react"
import { Header } from "scenes/header/header"
import { initializeAppData } from "services/server/service"
import { AddresssBox } from "./components/addresss_box/addresss_box"
import { PaymentMethod } from "./components/payment_method/payment_method"

const ContentBox = styled(Box)(({ theme }) => ({
  padding: "39px 19px",
}))

export const Cart = () => {

  useEffect(() => { initializeAppData() }, [])

  return (
    <Box>
      <Header title="سبد خرید" />
      <ContentBox>
        {/* <AddresssBox /> */}
        <PaymentMethod />
      </ContentBox>
    </Box>
  )
}
