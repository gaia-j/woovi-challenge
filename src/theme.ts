import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#133A6F',
    },
    secondary: {
      main: '#03D69D',
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
            borderColor: '#E5E5E5',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#03D69D',
          },
        },
        notchedOutline: {
          borderColor: "#E5E5E5",
          borderWidth: "2px",
        }
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          textAlign: "left",
        },
      },
    },
  },
});