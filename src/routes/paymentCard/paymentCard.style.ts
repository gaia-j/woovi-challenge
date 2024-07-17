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
    fontSize: "1.4rem",
    marginBottom: "20px"
  },
  form:{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
    width: '100%'
  },
  twoInput:{
    display: 'flex',
    gap: '1.2rem'
  },
  button:{
    width: '100%',
    borderRadius: '8px',
  }
}