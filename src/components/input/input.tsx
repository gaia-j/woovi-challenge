import {FormControl, TextField} from "@mui/material";
import React, {useRef, useState} from "react";


export default function Input({ label, variant, mask }: any) {

  const inputRef = useRef(null);

  const handleChange = (e:any) => {
    if (!mask) return
    const input = e.target;
    const rawValue = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
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
  console.log("fodase")
  return (
    <FormControl>
      {/*<TextField label="Nome completo" variant="outlined" />*/}
      <TextField
        label={label}
        variant="outlined"
        value={inputRef.current}
        onChange={handleChange}
      />
    </FormControl>
  )
}