import React from "react";
import {Stepper} from "@mui/material";
import {styles} from "./paymentStepper.style";
import {colors} from "../../theme";
import {styled} from "@mui/material/styles";



const StyledStepper = styled(Stepper)(({ theme }) => ({
  position: "relative",
  width: "100%",
  '& .MuiStepIcon-root': {
    color: colors.white,
    border: `2px solid ${colors.lightGray}`,
    borderRadius: "50%",
    width: 14,
    height: 14,
    '&.Mui-completed': {
      color: colors.mainGreen,
      borderColor: colors.mainGreen,
    },
    '&.Mui-active': {
      color: colors.white,
      borderColor: colors.mainGreen,
    },
  },
  '& .MuiStepIcon-text': {
    display: 'none',
  },
  '& .MuiStepConnector-root': {
    position: "absolute",
    top: "29px",
    left: "-4px",
    [theme.breakpoints.down(334)]: {
      height: "46px",
    },
    '&.Mui-active .MuiStepConnector-line': {
      borderColor: colors.mainGreen,
    },
    '&.Mui-completed .MuiStepConnector-line': {
      borderColor: colors.mainGreen,
    },
  },
  '& .MuiStepConnector-line': {
    borderWidth: "2px",
    borderColor: colors.lightGray,
    height: "100%",
  },
  '& .MuiStepLabel-label':{
    display: "flex",
  }
}));

export default function PaymentStepper({children, step}: {children: React.ReactNode, step: number}) {
  return (
    <StyledStepper style={styles.stepper} activeStep={step} orientation="vertical">
      {children}
    </StyledStepper>
  )
}