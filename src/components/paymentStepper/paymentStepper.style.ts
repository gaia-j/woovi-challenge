import {CSSProperties} from "@mui/material/styles/createMixins";
import {colors} from "../../theme";


export const styles:{[key: string]: CSSProperties} = {
  MuiStepIcon: {
    styleOverrides: {
      root: {
        color: colors.white,
        border: `2px solid ${colors.lightGray}`,
        borderRadius: "50%",
        width: 14,
        height: 14,
        '&.Mui-completed': {
          color: colors.mainGreen,
          borderColor: colors.mainGreen
        },
        '&.Mui-active': {
          color: colors.white,
          borderColor: colors.mainGreen
        }
      },
      text: {
        display: "none"
      }
    }
  },
  MuiStepper:{
    styleOverrides:{
      root: {
        position: "relative",
        width: "100%"
      }
    }
  },
  MuiStepConnector:{
    styleOverrides: {
      root: {
        position: "absolute",
        top: "41px",
        left: "-4px",
        height: "46px",
        '&.Mui-active .MuiStepConnector-line': {
          borderColor: colors.mainGreen
        },
        '&.Mui-completed .MuiStepConnector-line': {
          borderColor: colors.mainGreen
        },
      },
      line: {
        borderWidth: "2px",
        borderColor: colors.lightGray,
        height:"100%"
      },
    }
  }
}