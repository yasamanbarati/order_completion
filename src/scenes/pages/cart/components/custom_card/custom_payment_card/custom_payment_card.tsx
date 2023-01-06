import { Card, CardActions } from "@mui/material"
import { CustomPaymentCardInformation } from "./custom_payment_card_information/custom_payment_card_information"
import { ContentButton } from "components/button/content_button/content_button"


const ContentButtonStyle = {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    background: "linear-gradient(309.34deg, #FF5C01 -13.68%, rgba(255, 92, 1, 0.7) 171.92%)",
    boxShadow: "0 0 0 #fff",
    borderRadius: "20px",
    width: "100%",
    height: "60px",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "28px",
    "& h3": {
        fontWeight: "700",
        fontSize: "20px",
        lineHeight: "28px",
        textAlign: "center",
        color: "#FFFFFF",
    }
}
const TitleStyle = {
    fonWeight: "400",
    fontSize: "14px",
    lineHeight: "150%",
    textAlign: "right",
    color: "#2C3036"
}
const NumericTextStyle = {
    fonWeight: "400",
    fontSize: "14px",
    lineHeight: "150%",
    color: "#2C3036"

}
export const CustomPaymentCard = () => {
    return (
        <Card variant="outlined" sx={{ background: "##F2F3F6", padding: "15px 10px" }}>
            <CustomPaymentCardInformation
                PaymentMode={false}
                TotalMode={false}
                text="جزئیات سفارش"
                NumericText="01/03/17"
                NumericTextStyle={NumericTextStyle}
                TitleStyle={TitleStyle} />

            <CustomPaymentCardInformation
                PaymentMode={true}
                TotalMode={true}
                text="مجموع"
                NumericText={162500}
                TitleStyle={TitleStyle}
                NumericTextStyle={NumericTextStyle}
                TotalNumber={1} />

            <CustomPaymentCardInformation
                PaymentMode={true}
                TotalMode={false}
                TitleStyle={TitleStyle}
                NumericTextStyle={NumericTextStyle}
                text="جمع سفارش پس از تخفیف"
                NumericText={162500} />
            <CardActions>
                <ContentButton
                    Text="پرداخت نهایی"
                    Price={174000}
                    variant="contained"
                    sxStyle={ContentButtonStyle}
                    Mode={true} />
            </CardActions>
        </Card>
    )
}
