import { CSSProperties } from "@mui/material/styles/createMixins";
import { colors } from "../../theme";


export const styles : {[key: string]: CSSProperties} = {
  container:{
    padding: '30px 20px 0px 20px',
    textAlign: 'center'
  },
  title:{
    color: colors.darkGray,
    fontWeight: 800,
    fontSize: "1.2rem",
    marginBottom: "20px"
  },
  form:{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem'
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