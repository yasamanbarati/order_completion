import { Button } from "@mui/material"
import { ButtonProps } from "services/type/type"

const ContentButton = ({ onClickEvent, sxStyle, icon, Text, variant, Price }: ButtonProps) => {
  return (
    <Button
      variant={variant}
      disableElevation={true}
      onClick={onClickEvent}
      sx={{ ...sxStyle }}
      startIcon={icon}>
      {Text}{"(تومان " + Price + " )"}
    </Button>
  )
}

export default ContentButton
