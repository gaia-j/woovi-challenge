import {CSSProperties} from "@mui/material/styles/createMixins";
import {colors} from "../../theme";


export const styles: {[key: string]: CSSProperties} = {
  container:{
    padding: '30px 20px',
    textAlign: 'center',
    maxWidth: '600px',
    width: '90%',
  },
  title:{
    color: colors.darkGray,
    fontWeight: 800,
    fontSize: "1.4rem",
    marginBottom: "20px"
  },
  button:{
    width: '100%',
    borderRadius: '8px',
    marginTop: '1.4rem'
  },
  termOptions:{
    position: 'relative',
    marginTop: '40px'
  },
  pix:{
    position: "relative"
  }
}