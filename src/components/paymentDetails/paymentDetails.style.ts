import {CSSProperties} from "@mui/material/styles/createMixins";
import {colors} from "../../theme";


export const styles:{[key: string]: CSSProperties} = {
  container:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '2rem 0',
  },
  expTime:{
    color: '#4D4D4D',
    fontWeight: 800
  },
  installments: {
    display: 'flex',
    width: '100%',
    height: '100%',
    padding: '0.8rem 0',
  },
  labelStep:{
    width: '60%',
  },
  valueStep:{
    width: '40%',
    textAlign: 'right',
  },
  divider:{
    width: '100%',
    border: 'none',
    height: '2px',
    backgroundColor: colors.lightGray
  },
  totalContainer:{
    minHeight: '3.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  totalPrice:{
    color: colors.darkGray,
    fontWeight: 700
  },
  term:{
    color: colors.darkGray,
    fontWeight: 500
  },
  identifier:{
    marginTop: '20px',
    color: colors.midGray,
    fontWeight: 500
  },
  identifierCode:{
    color: colors.darkGray,
    fontWeight: 800
  }
}