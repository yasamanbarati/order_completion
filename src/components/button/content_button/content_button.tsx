import { Button, CircularProgress } from "@mui/material"
import { CustomTypography } from "components/custom/custom_typography/custom_typography"
import { ButtonProps } from "services/type/type"

export const ContentButton = ({ onClickEvent, sxStyle, icon, Text, variant, Price, Mode, disabled, isfinished, loading }: ButtonProps) => {


  return (
    <Button
      variant={variant}
      disabled={loading}
      onClick={onClickEvent}
      sx={{ ...sxStyle }}
      startIcon={icon}>
      <CustomTypography text={Text} variant="h3" />
      {loading && (
        <CircularProgress
          size={24}
          sx={{
            color: "green[500]",
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-12px',
            marginLeft: '-12px',
          }}
        />
      )}
      {/* {isfinished === false ?
        <>
          {loading === false ? <CustomTypography text={Text} variant="h3" /> : <CircularProgress disableShrink />}
        </>
        :
        <>
          <CustomTypography text={Text+"شد"} variant="h3" />
        </>
      }
      {Mode === true &&
        "(تومان " + Price?.toLocaleString("fa-IR") + " )"
      } */}
    </Button>
  )
}
