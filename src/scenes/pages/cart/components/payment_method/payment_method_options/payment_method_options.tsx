import { Grid, styled } from "@mui/material"
import { useAppSelector } from "setup/redux/react-hooks"
import { ContentButton } from "components/button/content_button/content_button"

const GridOptions = styled(Grid)(({ theme }) => ({
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 0"
}))
const ContentButtonStyle = {
    flexDirection: "column",
    height: "84px",
    width: "100%",
    background: "linear-gradient(293.8deg, #EDEEF2 0%, #F2F3F6 118.73%)",
    boxShadow: "-3px -3px 20px #FFFFFF",
    border: "1px solid transparent",
    webkitTransition: "all 0.4s cubic-bezier(.5, .24, 0, 1)",
    transition: "all 0.4s cubic-bezier(.5, .24, 0, 1)",
    borderRadius: " 10px",
    "& .css-1d6wzja-MuiButton-startIcon": {
        margin: "10px 0"
    },
    "& h3": {
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "14px",
        textAlign: "center",
        color: "#000",
        marginBottom: "15px"
    },
    "&::before": {
        content: `""`,
        position: "absolute",
        left: "0px",
        bottom: "0px",
        zIndex: "2",
        width: "0%",
        height: "2px",
        background: "rgba(255, 92, 1, 1)",
        boxShadow: "inset 0px 0px 0px rgba(255, 92, 1, 1)",
        display: "block",
        webkitTransition: "all 0.8s cubic-bezier(.5, .24, 0, 1)",
        transition: "all 0.8s cubic-bezier(.5, .24, 0, 1)",
        borderRadius: "10%",
    },
    "&:hover::before": {
        width: "98% ",
    },

    "&::after": {
        content: `''`,
        position: "absolute",
        right: "0px",
        top: "0px",
        zIndex: "2",
        width: "0%",
        height: "2px",
        background: "rgba(255, 92, 1, 1)",
        webkitTransition: "all 0.8s cubic-bezier(.5, .24, 0, 1)",
        transition: "all 0.8s cubic-bezier(.5, .24, 0, 1)",
        borderRadius: "10%",
    },
    "&:hover::after": {
        width: "98%",
    },
    "&:hover": {
        border: "1px solid transparent",
        borderRight: "2px solid rgba(255, 92, 1, 1)",
        borderLeft: "2px solid rgba(255, 92, 1, 1)",
        webkitTransition: "all 0.8s cubic-bezier(.5, .24, 0, 1)",
        transition: "all 0.8s cubic-bezier(.5, .24, 0, 1)",
        "& svg path": {
            stroke: "rgba(255, 92, 1, 1)",
        },
        "& h3": {
            color: "rgba(255, 92, 1, 1)",
        },
    },
}
export const PaymentMethodOptions = () => {

    const PaymentMethodList = useAppSelector(state => state.home.PaymentMethod)

    return (
        <GridOptions container spacing={1}>
            {PaymentMethodList.map((Pitem) => {
                return <Grid item xs={4}>
                    <ContentButton
                        Text={Pitem.name}
                        icon={<Pitem.icon />}
                        variant="outlined"
                        sxStyle={ContentButtonStyle}
                        Mode={false} />
                </Grid>
            })}
        </GridOptions>
    )
}
