import {styles} from "./paymentDetails.style";
import {Divider, Step, StepLabel, Typography} from "@mui/material";
import {useAppContext} from "../../contexts/AppContext";
import {AppContextType} from "../../interfaces/interfaces";
import formatToBRL from "../../utils/formatToBrl";
import PaymentStepper from "../paymentStepper/paymentStepper";
import CustomAccordion from "../accordion/accordion";


export default function PaymentDetails() {
  const {step, expDate, selectedOption} = useAppContext() as AppContextType

  const value = selectedOption?.value as number
  const term = selectedOption?.instalment as number
  const firstInstallment = value / term / 100
  const otherInstallments= (value / 100) - firstInstallment
  const formatedFirst = formatToBRL(firstInstallment);
  const formatedOther = formatToBRL(otherInstallments);

  const total = formatToBRL(otherInstallments + (otherInstallments*0.005) + firstInstallment)

  return (
    <div style={styles.container}>
      <div>
        <Typography style={styles.term}>Prazo de pagamento</Typography>
        <Typography style={styles.expTime}>{expDate}</Typography>
      </div>
      <div style={styles.installments}>
        <PaymentStepper step={step}>
          <Step>
            <StepLabel>
              <span style={styles.labelStep}>
                <Typography style={styles.term}>Entrada no pix</Typography>
              </span>
              <span style={styles.valueStep}>
                <Typography style={styles.expTime}>{formatedFirst}</Typography>
              </span>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel>
              <span style={styles.labelStep}>
                <Typography style={styles.term}>Restante em {term-1}x</Typography>
              </span>
              <span style={styles.valueStep}>
                <Typography style={styles.expTime}>{formatedOther}</Typography>
              </span>
            </StepLabel>
          </Step>
        </PaymentStepper>
      </div>
      <Divider variant="middle" style={styles.divider}/>
      <div style={styles.totalContainer}>
        <span>
          <Typography style={styles.term}>CET: 0.5%</Typography>
        </span>
        <span>
          <Typography style={styles.totalPrice}>Total: {total}</Typography>
        </span>

      </div>
      <Divider variant="middle" style={styles.divider}/>
      <CustomAccordion label="Como funciona?" description="Também não sei 😜" />
      <Divider variant="middle" style={styles.divider}/>
      <div>
        <Typography style={styles.identifier}>Identificador:</Typography>
        <Typography style={styles.identifierCode}>2c1b951f356c4680b13ba1c9fc889c47</Typography>
      </div>

    </div>
  )
}