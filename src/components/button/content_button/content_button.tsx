import { Button, CircularProgress } from '@mui/material'
import { CustomTypography } from 'components/custom/custom_typography/custom_typography'
import { useState } from 'react'
import { ButtonProps } from 'services/type/type'

export const ContentButton = ({
  onClickEvent,
  sxStyle,
  icon,
  Text,
  variant,
  Price,
  Mode,
  disabled,
  isLoading,
}: ButtonProps) => {
  const [loading, setLoading] = useState(false)
  const [finished, setFinished] = useState(false)

  const handleOnClick = async () => {
    if (isLoading || loading) return

    setLoading(true)

    if (onClickEvent) onClickEvent()

    setTimeout(() => {
      setLoading(false)
      setFinished(true)
    }, 2000)
  }

  return (
    <Button
      variant={variant}
      disabled={loading}
      onClick={handleOnClick}
      sx={{ ...sxStyle }}
      startIcon={icon}
    >
      {finished ? (
        <CustomTypography text={`${Text} شد`} variant="h3" />
      ) : loading ? (
        <CircularProgress
          size={24}
          sx={{
            color: '#fff',
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-12px',
            marginLeft: '-12px',
          }}
        />
      ) : (
        <>
          <CustomTypography text={Text} variant="h3" />
          {Mode === true && "(تومان " + Price?.toLocaleString("fa-IR") + " )"}
        </>
      )}
    </Button>
  )
}