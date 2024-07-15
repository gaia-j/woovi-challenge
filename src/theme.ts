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
  },
});