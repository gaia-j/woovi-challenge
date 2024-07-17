import { CSSProperties } from "@mui/material/styles/createMixins";
import { colors } from "../../theme";


export const styles : {[key: string]: CSSProperties} = {
  container:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '600px',
    width: '90%',
    padding: '30px 20px 0px 20px',
    textAlign: 'center'
  },
  title:{
    color: colors.darkGray,
    fontWeight: 800,
    fontSize: "1.2rem",
    marginBottom: "20px"
  },
  button:{
    width: '100%',
    maxWidth: '300px',
    borderRadius: '8px',
    marginTop: '30px',
  },
  pixHolder:{
    border: 'solid',
    padding: '10px',
    maxWidth: '300px',
    width: '80%',
    borderColor: colors.mainGreen,
    borderWidth: '2px',
    borderRadius: '10px',
  }
}