import {createTheme} from "@mui/material/styles";

export const colors = {
  mainGreen: '#03D69D',
  mainBlue: '#133A6F',
  darkGray: '#4D4D4D',
  lightGray: '#E5E5E5',
  midGray: '#AFAFAF',
  highlightGreen: '#F4FBF9',
  white: '#FFFFFF'
}

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.mainBlue,
    },
    secondary: {
      main: colors.mainGreen,
    },
  },
  typography: {
    fontFamily: 'Nunito, Arial, sans-serif',
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.lightGray,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.mainGreen,
          },
        },
        notchedOutline: {
          borderColor: colors.lightGray,
          borderWidth: "2px",
          borderRadius: "8px"
        }
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          textAlign: "left",
          fontWeight: "600"
        },
      },
    },
    MuiAccordionSummary:{
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    }

    // MuiStepIcon: {
    //   styleOverrides: {
    //     root: {
    //       color: colors.white,
    //       border: `2px solid ${colors.lightGray}`,
    //       borderRadius: "50%",
    //       width: 14,
    //       height: 14,
    //       '&.Mui-completed': {
    //         color: colors.mainGreen,
    //         borderColor: colors.mainGreen
    //       },
    //       '&.Mui-active': {
    //         color: colors.white,
    //         borderColor: colors.mainGreen
    //       }
    //     },
    //     text: {
    //       display: "none"
    //     }
    //   }
    // },
    // MuiStepper:{
    //   styleOverrides:{
    //     root: {
    //       position: "relative",
    //       width: "100%"
    //     }
    //   }
    // },
    // MuiStepConnector:{
    //   styleOverrides: {
    //     root: {
    //       position: "absolute",
    //       top: "41px",
    //       left: "-4px",
    //       height: "46px",
    //       '&.Mui-active .MuiStepConnector-line': {
    //         borderColor: colors.mainGreen
    //       },
    //       '&.Mui-completed .MuiStepConnector-line': {
    //         borderColor: colors.mainGreen
    //       },
    //     },
    //     line: {
    //       borderWidth: "2px",
    //       borderColor: colors.lightGray,
    //       height:"100%"
    //     },
    //   }
    // }
  },
});