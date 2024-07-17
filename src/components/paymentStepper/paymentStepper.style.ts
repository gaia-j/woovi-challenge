import {CSSProperties} from "@mui/material/styles/createMixins";
import {colors} from "../../theme";


export const styles:{[key: string]: CSSProperties} = {
  stepper:{
    position: "relative",
    width: "100%",
    // maxWidth: '500px',
    '& .MuiStepIcon-root': {
      color: colors.white,
      border: `2px solid ${colors.lightGray}`,
      borderRadius: "50%",
      width: 14,
      height: 14,
      '&.Mui-completed': {
        color: colors.mainGreen,
        borderColor: colors.mainGreen,
      },
      '&.Mui-active': {
        color: colors.white,
        borderColor: colors.mainGreen,
      },
    },
    '& .MuiStepIcon-text': {
      display: 'none',
    },
    '& .MuiStepConnector-root': {
      position: "absolute",
      top: "29px",
      left: "-4px",
      '&.Mui-active .MuiStepConnector-line': {
        borderColor: colors.mainGreen,
      },
      '&.Mui-completed .MuiStepConnector-line': {
        borderColor: colors.mainGreen,
      },
    },
    '& .MuiStepConnector-line': {
      borderWidth: "2px",
      borderColor: colors.lightGray,
      height: "100%",
    },
    '& .MuiStepLabel-label':{
      display: "flex",
    }
  }
}