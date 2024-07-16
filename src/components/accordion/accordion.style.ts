import {CSSProperties} from "@mui/material/styles/createMixins";
import {colors} from "../../theme";


export const styles: { [key: string]: CSSProperties } = {
  main: {
    width: '100%',
    boxShadow: 'none',
    margin: 0,
  },
  label: {
    fontWeight: 800,
    color: colors.darkGray
  }
}