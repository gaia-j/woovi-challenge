import { colors } from "../../theme";
import {CSSProperties} from "@mui/material/styles/createMixins";


export const styles: {[key: string]: CSSProperties} = {
  container: {
    marginTop: '0px',
    marginBottom: '30px',
    color: colors.midGray,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  text: {
    fontSize: '1rem',
    paddingTop: '2px'
  },
  logo: {
    width: '3.5rem',
    marginLeft: '5px',
    filter: 'grayscale(100%)'
  }
}