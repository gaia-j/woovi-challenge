import {FormControl, TextField} from "@mui/material";
import React, {useRef} from "react";
import {styled} from "@mui/material/styles";
import {styles} from "./input.style";


export default function Input({ label, variant, mask }: any) {

  const inputRef = useRef(null);

  const handleChange = (e:any) => {
    if (!mask) return
    const input = e.target;
    const rawValue = input.value.replace(/\D/g, '');
    let maskedValue = '';
    let maskIndex = 0;
    let rawValueIndex = 0;

    while (maskIndex < mask.length && rawValueIndex < rawValue.length) {
      if (mask[maskIndex] === '9') {
        maskedValue += rawValue[rawValueIndex];
        rawValueIndex++;
      } else {
        maskedValue += mask[maskIndex];
      }
      maskIndex++;
    }

    input.value = maskedValue;
  };

  const StyledTextField = styled(TextField)(({ theme }) => (styles.input));

  return (
    <FormControl style={{width: '100%'}}>
      <StyledTextField
        label={label}
        variant="outlined"
        value={inputRef.current}
        onChange={handleChange}
      />
    </FormControl>
  )
}