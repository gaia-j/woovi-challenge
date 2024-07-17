import React, {useEffect} from 'react';

import {useNavigate} from "react-router-dom";

import { ReactComponent as Logo} from "../../assets/logo.svg";
import { ReactComponent as Challenge} from "../../assets/challenge.svg";
import {Button, Typography} from "@mui/material";
import {styles} from "./final.style";



export default function Final() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Obrigado!!"
  }, [])

  const handleNext = () => {
    navigate('/')
  }

  return (
    <div style={styles.container}>
      <Logo style={styles.logo}/>
      <Challenge style={styles.challenge}/>
      <div style={styles.content}>
        <Typography style={styles.title} >Obrigado por chegar até aqui!</Typography>
        <Button style={styles.button} variant="outlined" onClick={handleNext}>Voltar ao início</Button>
      </div>
    </div>
  );
}
