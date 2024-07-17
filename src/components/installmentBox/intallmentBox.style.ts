import {colors} from "../../theme";
import {CSSProperties} from "@mui/material/styles/createMixins";



export const styles:{[key: string]: CSSProperties} = {
  installmentBox: {
    cursor: 'pointer',
    position: 'relative',
    border: '2px solid',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    '&:hover': {
      backgroundColor: colors.highlightGreen,
    },
    padding: '16px',
  },
  installmentText: {
    color: colors.darkGray,
    fontWeight: '700'
  },
  installmentNumber: {
    fontWeight: '800',
    fontSize: '1.1rem'
  },
  strip:{
    width: "95%",
    backgroundColor: colors.mainBlue,
    color: "white",
    position: "relative",
    textAlign: 'left',
    alignContent: 'center',
    borderRadius: '5px',
    minHeight: '32px',
  },
  stripCut:{
    position: 'absolute',
    right: -1,
    top: 0,
    width: 0,
    borderBottom: '16px solid transparent',
    borderTop: '16px solid transparent',
    borderRight: '16px solid white'
  },
  content: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  cashback: {
    color: colors.mainGreen,
    fontWeight: '600',
    fontSize: '0.9rem'
  },
  totalValue: {
    color: colors.midGray,
    fontWeight: '500',
    fontSize: '0.9rem'
  },
  radius:{
    top: '10px 10px 0 0',
    bottom: '0 0 10px 10px',
    single: '10px',
    none: '0 0 0 0'
  },
  textLeft:{
    textAlign: 'left'
  },
  stripText:{
    fontSize: '0.9rem',
    fontWeight: '600',
    marginLeft: '10px'
  },
  highlight:{
    fontWeight: '800',
  }

}