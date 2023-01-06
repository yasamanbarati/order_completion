import { Box, InputBase, Paper, styled } from "@mui/material"
import { ContentButton } from "components/button/content_button/content_button"
import { useState } from "react"

const PaperForm = styled(Paper)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-between",
    height: "50px",
    background: "linear-gradient(90.93deg, #E5E6EC 0%, #F2F3F6 100%)",
    boxShadow: "2px 2px 14px rgba(36, 65, 93, 0.33)",
    borderRadius: "33px",
    margin: "20px 0 30px 0",
    "& .MuiInputBase-root": {
        padding: "18px 20px",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "14px",
        textAlign: "right",
        width: "75%",
    },
}))

const ContentButtonStyle = {
    width: "140px",
    height: "100%",
    borderRadius: "33px",
    boxShadow: "0 0 0 #fff",
    backgroundColor: "#FF5C01",
    "&:hover": {
        color: "#fff",
        backgroundColor: "#FF5C01",
    },
    "& h3": {
        fontWeight: "400",
        fontSize: "20px",
        lineHeight: "20px",
        textAlign: "center"
    }
}

export const DiscountCodeInput = () => {

    const [loading, setLoading] = useState(false)
    const [isfinished, setIsfinished] = useState(false)

    const handleOnClick = async () => {
        if (loading) return
        setLoading(true)
        setIsfinished(false)
        setTimeout(() => {
            setLoading(false)
            setIsfinished(true)
        }, 3000);
    }

    return (
        <PaperForm>
            <InputBase
                placeholder="کد تخفیف خود را وارد نمایید."
                inputProps={{ 'aria-label': 'کد تخفیف خود را وارد نمایید.' }}
            />
            <ContentButton
                disabled={loading ? true : false}
                onClickEvent={handleOnClick}
                Mode={false}
                Text="ثبت"
                variant="contained"
                sxStyle={ContentButtonStyle} />
        </PaperForm>
    )
}
