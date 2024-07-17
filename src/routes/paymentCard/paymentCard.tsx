import {Button, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import Input from "../../components/input/input";
import PaymentDetails from "../../components/paymentDetails/paymentDetails";
import {useAppContext} from "../../contexts/AppContext";
import {AppContextType} from "../../interfaces/interfaces";
import {styles} from "./paymentCard.style";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import formatToBRL from "../../utils/formatToBrl";
import ModalPayment from "../../components/modals/modal";

export default function PaymentCard() {
  const {name,selectedOption,setStep} = useAppContext() as AppContextType
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.title = "Efetuar pagamento cartão"
  }, [])

  const value = selectedOption?.value as number
  const term = selectedOption?.instalment as number
  const firstInstallment = value / term / 100
  const otherInstallments= (value / 100) - firstInstallment
  const formatedOther = formatToBRL(otherInstallments/(term-1));


  const handleNext = () => {
    setTimeout(() => {
      setStep(2)
      setOpen(true)
    }, 500);
  }

  const handleClose = () => {
    setOpen(false)
  }


  return (
    <>
      <Header/>
      <div style={styles.container} >
        <Typography style={styles.title}>{name}, pague o restante em {term - 1}x no cartão</Typography>
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
              defaultValue={10}
              disabled
            >
              <MenuItem value={10}>{term - 1}x de {formatedOther}</MenuItem>
            </Select>
          </FormControl>
          <Button style={styles.button} variant="contained" onClick={handleNext}>Pagar</Button>
        </form>
        <PaymentDetails/>
      </div>
      <ModalPayment open={open} handleClose={handleClose}/>
      <Footer/>
    </>
  )
}