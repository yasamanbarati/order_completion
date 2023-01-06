import { Button } from "@mui/material"
import { CustomTypography } from "components/custom/custom_typography/custom_typography"
import { ButtonProps } from "services/type/type"

export const ContentButton = ({ onClickEvent, sxStyle, icon, Text, variant, Price, Mode }: ButtonProps) => {
  return (
    <Button
      variant={variant}
      disableElevation={true}
      onClick={onClickEvent}
      sx={{ ...sxStyle }}
      startIcon={icon}>
      <CustomTypography text={Text} variant="h3" />
      {Mode === true &&
        "(تومان " + { Price } + " )"
      }
    </Button>
  )
}
