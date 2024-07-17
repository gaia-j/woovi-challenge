import {Button, Typography} from "@mui/material";
import React, {useState} from "react";
import PaymentDetails from "../../components/paymentDetails/paymentDetails";
import {useAppContext} from "../../contexts/AppContext";
import {AppContextType} from "../../interfaces/interfaces";
import {styles} from "./paymentPix.style";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import formatToBRL from "../../utils/formatToBrl";
import {ReactComponent as QrPix} from '../../assets/qrpix.svg';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Modal from "../../components/modals/modal";

export default function PaymentPix() {
  const {name,selectedOption, setStep} = useAppContext() as AppContextType
  const [open, setOpen] = useState(false)

  const value = selectedOption?.value as number
  const term = selectedOption?.instalment as number
  const firstInstallment = formatToBRL(value / term / 100)

  const handleNext = () => {
    setTimeout(() => {
      setStep(1)
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
        <Typography style={styles.title}>{name}, pague a entrada de {firstInstallment} no pix</Typography>
        <div style={styles.pixHolder}>
          <QrPix/>
        </div>
        <Button
          style={styles.button}
          variant='contained'
          onClick={handleNext}
          endIcon={<FileCopyIcon/>}
        >
          Clique para copiar o QR code
        </Button>
        <PaymentDetails/>
      </div>
      <Modal open={open} pix handleClose={handleClose}/>
      <Footer/>
    </>
  )
}