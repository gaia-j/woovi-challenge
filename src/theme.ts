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
    MuiAccordionSummary:{
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    }

  },
});