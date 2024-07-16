import {styles} from "./paymentDetails.style";
import {Divider, Step, StepLabel, Typography} from "@mui/material";
import {useAppContext} from "../../contexts/AppContext";
import {AppContextType} from "../../interfaces/interfaces";
import formatToBRL from "../../utils/formatToBrl";
import PaymentStepper from "../paymentStepper/paymentStepper";
import CustomAccordion from "../accordion/accordion";


export default function PaymentDetails() {
  const {step, expDate, selectedOption} = useAppContext() as AppContextType

  const first = selectedOption?.value as number
  const term = selectedOption?.instalment as number
  const totalInstallment = first / term / 100
  const formatedInstallment = formatToBRL(totalInstallment || 0);
  const total = formatToBRL(totalInstallment * term)

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
                <Typography style={styles.expTime}>{formatedInstallment}</Typography>
              </span>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel>
              <span style={styles.labelStep}>
                <Typography style={styles.term}>Restante em {term-1}x de:</Typography>
              </span>
              <span style={styles.valueStep}>
                <Typography style={styles.expTime}>{formatedInstallment}</Typography>
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

    </div>
  )
}