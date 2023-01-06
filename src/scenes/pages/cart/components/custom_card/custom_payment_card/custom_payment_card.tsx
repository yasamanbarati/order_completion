import { Card, CardActions } from "@mui/material"
import { CustomPaymentCardInformation } from "./custom_payment_card_information/custom_payment_card_information"
import { ContentButton } from "components/button/content_button/content_button"


const ContentButtonStyle = {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    background: "linear-gradient(309.34deg, #FF5C01 -13.68%, rgba(255, 92, 1, 0.7) 171.92%)",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "28px",
    textAlign: "center",
    color: "#FFFFFF",
    width: "100%"
}

export const CustomPaymentCard = () => {
    return (
        <Card variant="outlined" sx={{ background: "#F2F3F6", padding: "15px 10px" }}>
            <CustomPaymentCardInformation
                PaymentMode={false}
                TotalMode={false}
                text="جزئیات سفارش"
                NumericText="01/03/17"
                NumericTextStyle={{ color: "#575F6B!important" }}
                TitleStyle={{ color: "#FF5C01!important" }} />

            <CustomPaymentCardInformation
                PaymentMode={true}
                TotalMode={true}
                text="مجموع"
                NumericText={162500}
                TotalNumber={1} />

            <CustomPaymentCardInformation
                PaymentMode={true}
                TotalMode={false}
                text="جمع سفارش پس از تخفیف"
                NumericText={162500} />
            <CardActions>
                <ContentButton
                    Text="پرداخت نهایی"
                    Price={174000}
                    variant="contained"
                    sxStyle={{ ContentButtonStyle }}
                    Mode={true} />
            </CardActions>
        </Card>
    )
}
