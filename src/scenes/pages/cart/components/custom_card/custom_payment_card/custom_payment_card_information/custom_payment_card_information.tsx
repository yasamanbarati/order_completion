import { Box, CardContent } from "@mui/material"
import { CustomTypography } from "components/custom/custom_typography/custom_typography"
import { CardInformationProps } from "services/type/type"

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
export const CustomPaymentCardInformation = ({ text, NumericText, TitleStyle, NumericTextStyle, PaymentMode, TotalMode, TotalNumber }: CardInformationProps) => {
    return (
        <CardContent
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            {
                PaymentMode === false ?
                    (<Box sx={{borderBottom: "0.3px solid #575F6B", marginBottom:"15px"}}>
                        <CustomTypography text={text} variant="h2" textStyle={{ ...TitleStyle }} />
                        <CustomTypography text={NumericText?.toLocaleString("fa-IR")} variant="body1" textStyle={{ ...NumericTextStyle }} />
                    </Box>)
                    :
                    (<Box sx={{marginBottom:"10px"}}>
                        <div style={{
                            display: "flex",
                            justifyContent: 'start',
                            alignItems: 'center',
                        }}>
                            <CustomTypography text={text} variant="h2" textStyle={{ ...TitleStyle }} />
                            {TotalMode === true && <CustomTypography text={"( " + TotalNumber?.toLocaleString("fa-IR") + " )"} variant="h2" textStyle={{ ...TitleStyle }} />}
                        </div>
                        <CustomTypography text={NumericText?.toLocaleString("fa-IR") + "تومان"} variant="body1" textStyle={{ ...NumericTextStyle }} />
                    </Box>)
            }
        </CardContent>
    )
}
