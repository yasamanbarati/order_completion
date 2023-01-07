import { Box, CardContent } from "@mui/material"
import { CustomTypography } from "components/custom/custom_typography/custom_typography"
import { CardInformationProps } from "services/type/type"


export const CustomPaymentCardInformation = ({ text, NumericText, TitleStyle, NumericTextStyle, PaymentMode, TotalMode, TotalNumber }: CardInformationProps) => {

    return (
        <CardContent
            sx={{
                display: 'flex',
                justifyContent: "space-between",
                alignItems: 'center',
            }}
        >
            {
                PaymentMode === false ?
                    (<Box sx={{
                        width: "100%", display: 'flex', justifyContent: 'space-between', alignItems: "center", borderBottom: "0.3px solid #575f6b59", paddingBottom: "15px", "& h2": {
                            color: "#FF5C01"
                        }
                    }}>
                        <CustomTypography text={text} variant="h2" textStyle={TitleStyle} />
                        <CustomTypography text={NumericText?.toLocaleString("fa-IR")} variant="body1" textStyle={NumericTextStyle} />
                    </Box>)
                    :
                    (<Box sx={{ width: "100%", display: 'flex', justifyContent: 'space-between', alignItems: "center", marginBottom: "10px" }}>
                        <div style={{
                            display: "flex",
                            justifyContent: 'start',
                            alignItems: 'center',
                        }}>
                            <CustomTypography text={text} variant="h2" textStyle={TitleStyle} />
                            {TotalMode === true && <CustomTypography text={"( " + TotalNumber?.toLocaleString("fa-IR") + " )"} variant="h2" textStyle={TitleStyle} />}
                        </div>
                        <CustomTypography text={NumericText?.toLocaleString("fa-IR")} variant="body1" textStyle={NumericTextStyle} />
                    </Box>)
            }
        </CardContent >
    )
}
