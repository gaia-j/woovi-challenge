import {Button, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import React from "react";
import Input from "../../components/input/input";
import PaymentDetails from "../../components/paymentDetails/paymentDetails";
import {useAppContext} from "../../contexts/AppContext";
import {AppContextType} from "../../interfaces/interfaces";
import {styles} from "./paymentCard.style";


export default function PaymentCard() {
  const {name,selectedOption} = useAppContext() as AppContextType
  const terms = selectedOption?.instalment as number
  return (
    <div style={styles.container} >
      <Typography style={styles.title}>{name}, pague o restante em {terms - 1}x no cartão</Typography>
      <form style={styles.form}>
        <Input label="Nome completo"/>
        <Input label="CPF" mask="999.999.999-99" />
        <Input label="Número do cartão" mask="9999 9999 9999 9999" />
        <div style={styles.twoInput}>
          <Input label="Vencimento" mask="99/99" />
          <Input label="CVV" mask="9999" />
        </div>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Parcelas</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Parcelas"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Button style={styles.button} variant="contained">Pagar</Button>
      </form>
      <PaymentDetails/>
    </div>
  )
}