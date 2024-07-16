import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import {Typography} from "@mui/material";
import React from "react";
import { ReactComponent as Logo} from "../../assets/logo.svg";
import {styles} from "./footer.style";


export default function Footer(){
  const paymentRoutes = ['/select-terms', '/payment-card', 'payment-pix']
  const pathname = window.location.pathname
  if (!paymentRoutes.includes(pathname)) {
    return null
  }
  return (
    <div style={styles.container}>
      <GppGoodOutlinedIcon style={{}}/>
      <Typography style={styles.text}>Pagamento 100% seguro via:</Typography>
      <Logo style={styles.logo}/>
    </div>
  )
}