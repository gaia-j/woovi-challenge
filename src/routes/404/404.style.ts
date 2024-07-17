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
  question:{
    position: 'absolute',
    color: colors.white,
    opacity: 0.2,
    rotate: '121deg',
    fontWeight: 800,
    fontSize: "27rem",
    margin: "20px 0"
  },
  question2:{
    position: 'absolute',
    top: '-200',
    color: colors.white,
    opacity: 0.2,
    rotate: '221deg',
    fontWeight: 800,
    fontSize: "44rem",
    margin: "20px 0"
  },
  question3:{
    position: 'absolute',
    color: colors.white,
    opacity: 0.2,
    rotate: '21deg',
    fontWeight: 800,
    fontSize: "80rem",
    margin: "20px 0"
  }



}