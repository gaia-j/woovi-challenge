import { ReactComponent as Logo} from "../../assets/logo.svg";

import React from "react";
import { styles } from "./header.style";


export default function Header() {
  const paymentRoutes = ['/select-terms', '/payment-card', 'payment-pix']
  const pathname = window.location.pathname
  if (!paymentRoutes.includes(pathname)) {
    return null
  }
  return (
    <div style={styles.container}>
      <Logo/>
    </div>
  )
}