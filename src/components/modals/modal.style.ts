import {CSSProperties} from "@mui/material/styles/createMixins";
import {colors} from "../../theme";

export const styles: {[key: string]: CSSProperties} = {
  container: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "75vw",
    maxWidth: '400px',
    backgroundColor: colors.mainGreen,
    border: `2px solid ${colors.mainGreen}`,
    borderRadius: '10px',
    boxShadow: '24',
    p: 4,
  },
  icon: {
    color: colors.white,
    fontSize: '10rem',
    marginBottom: '10px',
  },
  text:{
    color: colors.white,
    fontSize: '1.2rem',
    fontWeight: 800
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
  }
};