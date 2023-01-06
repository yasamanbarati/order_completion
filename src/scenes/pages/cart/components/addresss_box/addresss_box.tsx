import { Box } from "@mui/material"
import { BoxTitle } from "components/box/box_title/box_title"
import { ArrowBackIosNew } from "@mui/icons-material"
import { AddresssBoxOption } from "./addresss_box_option/addresss_box_option"

export const AddresssBox = () => {
    return (
        <Box>
            <BoxTitle title="انتخاب آدرس" text="تغییر" Mode={true}>
                <ArrowBackIosNew sx={{
                    width: "18px",
                    height: "18px",
                }} color="warning" />
            </BoxTitle>
            {/* <AddresssBoxOption /> */}
        </Box>
    )
}
