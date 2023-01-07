import { Box, FormControlLabel, Radio, styled } from '@mui/material'
import { CustomTypography } from 'components/custom/custom_typography/custom_typography'
import { GoogleMapBox } from 'components/google_map_box/google_map_box'
import { setSelectedOptionAction } from 'scenes/_slice/home.slice'
import { OptionCardProps } from 'services/type/type'
import { useAppDispatch, useAppSelector } from 'setup/redux/react-hooks'

const StyleFormControlLabel = styled(FormControlLabel)({
    position: "relative",
    width: '100%',
    display: 'flex',
    alignItems: 'baseline',
    padding: '0',
    minHeight: '60px',
    background: "linear-gradient(293.8deg, #EDEEF2 0%, #F2F3F6 118.73%)",
    boxShadow: "2px 2px 14px rgba(36, 65, 93, 0.33)",
    borderRadius: '10px',
    marginRight: '0',
    margin: '8px 0',
    '& .MuiTypography-root': {
        width: '100%',
    },
})

const TitleStyle = {
    fonWeight: '700',
    fontSize: '16px',
    lineHeight: '150%',
    color: '#000',
    marginRight: '14px',
    marginLeft: '10px',
    width: '100%',
}

const TextStyle = {
    width: '100%',
    textAlign: 'left',
    fonWeight: '400',
    fontSize: '14px',
    lineHeight: '150%',
    color: '#575F6B',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'normal',
    WebkitLineClamp: 1,
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
}

interface Props {
    option: OptionCardProps
}

export const CustomOptionCard = ({ option }: Props) => {
    const selectedOption = useAppSelector(state => state.home.selectedOption)
    const dispatch = useAppDispatch()

    const handleChange = (value: string) => {
        dispatch(setSelectedOptionAction(value))
    }

    return (
        <StyleFormControlLabel
            control={
                <Box>
                    <Radio
                        sx={{
                            padding: "4px 15px 4px 0",
                            color: "rgba(88, 108, 138, 0.5)!important",
                            position: "absolute",
                            bottom: "13px",
                            '&.Mui-checked': {
                                color: "rgba(88, 108, 138, 0.5)!important",
                            }
                        }}
                        checked={option.id === selectedOption}
                        value={option.id}
                        onClick={handleChange.bind(null, option.id)}
                    />
                </Box>
            }
            label={
                <>
                    {option.id === selectedOption &&
                        <Box height="170px" width="100%">
                            <GoogleMapBox position={option.mapId} />
                        </Box>
                    }
                    <Box width="90%"
                        marginRight="auto"
                        paddingLeft="15px"
                        height="60px"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between">
                        <CustomTypography text={option.text} textStyle={TitleStyle} />
                        <CustomTypography text={option.address} textStyle={TextStyle} />
                    </Box>
                </>
            }
        />
    )
}
