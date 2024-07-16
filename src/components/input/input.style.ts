import { CSSProperties } from "@mui/material/styles/createMixins";
import {colors} from "../../theme";


export const styles: {[key: string]: CSSProperties} = {
  input: {
    '& .MuiOutlinedInput-root': {
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: colors.lightGray,
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: colors.mainGreen,
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: colors.lightGray,
        borderWidth: '2px',
        borderRadius: '8px',
      },
    },
    '& .MuiInputBase-input': {
      textAlign: 'left',
      fontWeight: '600',
    }

  },
}