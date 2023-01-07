import { Card, CardActions, CardContent } from "@mui/material"
import { CustomPaymentCardInformation } from "./custom_payment_card_information/custom_payment_card_information"
import { ContentButton } from "components/button/content_button/content_button"
import { CustomTypography } from "components/custom/custom_typography/custom_typography"


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
    transition: "0.8s ease",
    "& h3": {
        fontWeight: "700",
        fontSize: "20px",
        lineHeight: "28px",
        textAlign: "center",
        color: "#FFFFFF",
        transition: "0.8s ease",
    },
    "&:hover": {
        background: "linear-gradient(309.34deg, #FF5C01 -13.68%, rgba(255, 92, 1, 0.7) 171.92%)",
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
                NumericText={162500 + " تومان "}
                TitleStyle={TitleStyle}
                NumericTextStyle={NumericTextStyle}
                TotalNumber={1} />

            <CustomPaymentCardInformation
                PaymentMode={true}
                TotalMode={false}
                TitleStyle={TitleStyle}
                NumericTextStyle={NumericTextStyle}
                text="جمع سفارش پس از تخفیف"
                NumericText={162500 + " تومان "} />

            <CustomPaymentCardInformation
                PaymentMode={true}
                TotalMode={false}
                TitleStyle={TitleStyle}
                NumericTextStyle={NumericTextStyle}
                text="هزینه ارسال"
                NumericText="رایگان" />

            <CardActions>
                <ContentButton
                    Text="پرداخت نهایی"
                    Price={174000 + " تومان "}
                    variant="contained"
                    sxStyle={ContentButtonStyle}
                    Mode={true}
                    isfinished={false}
                    loading={false}
                />
            </CardActions>

            <CardContent
                sx={{
                    display: 'flex',
                    justifyContent: "start",
                    alignItems: 'center',
                    paddingTop:"5px",
                    paddingBottom:"0px!important",
                }}
            >
                <CustomTypography text=" جمع کل پرداختی : " variant="h2" textStyle={TitleStyle} />
                <CustomTypography text={174000?.toLocaleString("fa-IR") + " تومان "} variant="body1" textStyle={NumericTextStyle} />
            </CardContent >
        </Card>
    )
}
