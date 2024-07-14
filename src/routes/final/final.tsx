import {Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import { ReactComponent as Logo} from "../../assets/logo.svg";
import React from "react";


export default function Final() {
  return (
    <div style={{padding: '20px', textAlign: 'center'}} >
      <Logo/>
      <Typography fontWeight={800} >João, pague o restante em Xx no cartão</Typography>
      <form style={{display: 'flex', flexDirection: 'column', gap: '1.2rem'}}>
        <FormControl>
          <TextField label="Nome completo" variant="outlined" />
        </FormControl>
        <FormControl>
          <TextField label="CPF" variant="outlined" />
        </FormControl>
        <FormControl>
          <TextField label="Número do cartão" variant="outlined" />
        </FormControl>
        <div style={{display: 'flex', gap: '1.2rem'}}>
          <FormControl style={{width: '50%'}}>
            <TextField label="Vencimento" variant="outlined" />
          </FormControl>
          <FormControl style={{width: '50%'}}>
            <TextField label="CVV" variant="outlined" />
          </FormControl>
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