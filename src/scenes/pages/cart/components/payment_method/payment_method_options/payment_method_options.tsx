import { Grid, styled } from "@mui/material"

const GridOptions = styled(Grid)(({ theme }) => ({
    justifyContent: "space-between",
    alignItems: "center",
}))

export const PaymentMethodOptions = () => {

    
    return (
        <GridOptions container spacing={1}>

            <Grid item xs={4}>
                
            </Grid>
        </GridOptions>
    )
}
