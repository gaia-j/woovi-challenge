import { ReactComponent as Logo} from "../../assets/logo.svg";

import React from "react";
import { styles } from "./header.style";

export default function Header() {
  return (
    <div style={styles.container}>
      <Logo/>
    </div>
  )
}