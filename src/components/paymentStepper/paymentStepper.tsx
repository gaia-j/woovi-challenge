import React from "react";
import {Stepper} from "@mui/material";
import {styled} from "@mui/material/styles";
import {styles} from "./paymentStepper.style";




const StyledStepper = styled(Stepper)(({ theme }) => (styles.stepper));

export default function PaymentStepper({children, step}: {children: React.ReactNode, step: number}) {
  return (
    <StyledStepper activeStep={step} orientation="vertical">
      {children}
    </StyledStepper>
  )
}