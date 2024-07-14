import {Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import { ReactComponent as Logo} from "../../assets/logo.svg";
import React from "react";
import Input from "../../components/input/input";


export default function Final() {
  return (
    <div style={{padding: '20px', textAlign: 'center'}} >
      <Logo/>
      <Typography fontWeight={800} >João, pague o restante em Xx no cartão</Typography>
      <form style={{display: 'flex', flexDirection: 'column', gap: '1.2rem'}}>
        <Input label="Nome completo"/>
        <Input label="CPF" mask="999.999.999-99" />
        <Input label="Número do cartão" mask="9999 9999 9999 9999" />
        <div style={{display: 'flex', gap: '1.2rem'}}>
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

        <Button variant="contained">Pagar</Button>

      </form>
    </div>
  )
}