import { Grid, styled } from "@mui/material"
import { useAppSelector } from "setup/redux/react-hooks"
import { ContentButton } from "components/button/content_button/content_button"

const GridOptions = styled(Grid)(({ theme }) => ({
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px 0 30px 0",
}))
const ContentButtonStyle = {
    flexDirection: "column",
    height: "84px",
    width: "100%",
    background: "linear-gradient(293.8deg, #EDEEF2 0%, #F2F3F6 118.73%)",
    boxShadow: "2px 2px 14px rgba(36, 65, 93, 0.33)",
    border: "1px solid transparent",
    transition: "0.8s cubic-bezier(0.2, 0.19, 0.74, 0.75)",
    borderRadius: "10px",
    "& .css-1d6wzja-MuiButton-startIcon": {
        margin: "10px 0",
        transition: "0.8s cubic-bezier(0.2, 0.19, 0.74, 0.75)",
    },
    "& h3": {
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "14px",
        textAlign: "center",
        color: "#000",
        marginBottom: "15px",
        transition: "0.8s cubic-bezier(0.2, 0.19, 0.74, 0.75)",
    },
    "&:hover": {
        border: "2px solid rgba(255, 92, 1, 1)",
        transition: "0.8s cubic-bezier(0.2, 0.19, 0.74, 0.75)",
        "& svg path": {
            stroke: "rgba(255, 92, 1, 1)",
            transition: "0.8s cubic-bezier(0.2, 0.19, 0.74, 0.75)",
        },
        "& svg circle": {
            fill: "rgba(255, 92, 1, 1)",
            transition: "0.8s cubic-bezier(0.2, 0.19, 0.74, 0.75)",
        },
        "& h3": {
            color: "rgba(255, 92, 1, 1)",
            transition: "0.8s cubic-bezier(0.2, 0.19, 0.74, 0.75)",
        },
    },
}
export const PaymentMethodOptions = () => {

    const PaymentMethodList = useAppSelector(state => state.home.PaymentMethod)

    return (
        <GridOptions container spacing={1}>
            {PaymentMethodList.map(Pitem => {
                return (
                    <Grid item xs={4}>
                        <ContentButton
                            Text={Pitem.name}
                            icon={<Pitem.icon />}
                            variant="outlined"
                            sxStyle={ContentButtonStyle}
                            Mode={false}
                            isLoading
                        />
                    </Grid>
                )
            })}
        </GridOptions>
    )
}
