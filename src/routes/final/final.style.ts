import {CSSProperties} from "@mui/material/styles/createMixins";
import {colors} from "../../theme";


export const styles:{[key: string]: CSSProperties} = {
  container:{
    height: '100vh',
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.mainGreen
  },
  content:{
    padding: '0 5%'
  },
  logo:{
    transform: 'scale(2)',
    filter: "brightness(0) saturate(100%) invert(100%)",

  },
  challenge:{
    width: '210px',
    marginTop: '20px',
    filter: "invert(100%)"
  },
  title:{
    color: colors.white,
    fontWeight: 800,
    fontSize: "1.4rem",
    margin: "20px 0"
  },
  button:{
    width: '100%',
    borderRadius: '8px',
    marginTop: '1.4rem',
    borderColor: colors.white,
    color: colors.white,
    fontWeight: 800,
    borderWidth: '2px',
    '&:hover': {
      backgroundColor: colors.white,
      color: colors.mainGreen
    }
  },

}