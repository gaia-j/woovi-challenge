import {FormControl, TextField} from "@mui/material";
import React from "react";
import {styles} from "./input.style";
import {usePaymentContext} from "../../contexts/PaymentContext";
import {PaymentContextInterface} from "../../interfaces/interfaces";
import {fieldsValidation} from "../../validation/fieldsValidation";



export default function Input({ label, field, mask}: { label: string, field: string, mask?: string }) {

  const {data,setData,errors,setErrors} = usePaymentContext() as PaymentContextInterface

  const handleChange = (e:any) => {
    fieldsValidation({
      value: e.target.value,
      mask,
      setData,
      field,
      errors,
      setErrors
    })
  };

  return (
    <FormControl style={{width: '100%'}}>
      <TextField
        label={label}
        variant="outlined"
        sx={styles.input}
        value={data[field]}
        onChange={handleChange}
        error={!!errors[field]}
        helperText={errors[field]}
      />
    </FormControl>
  )
}