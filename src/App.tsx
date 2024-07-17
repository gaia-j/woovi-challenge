import React from 'react';
import {useAppContext} from "./contexts/AppContext";
import {AppContextType} from "./interfaces/interfaces";
import {useNavigate} from "react-router-dom";
import {getExpTime} from "./utils/getExpTime";
import {styles} from "./App.style";
import { ReactComponent as Logo} from "./assets/logo.svg";
import { ReactComponent as Challenge} from "./assets/challenge.svg";
import {Button, TextField, Typography} from "@mui/material";



function App() {
  const {setExpDate, setName, name,setStep}: AppContextType = useAppContext() as AppContextType

  const navigate = useNavigate();
  const handleNext = () => {
    const expTime = getExpTime()
    setExpDate(expTime)
    setStep(0)
    navigate('/select-terms')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <div style={styles.container}>
      <Logo style={styles.logo}/>
      <Challenge style={styles.challenge}/>
      <div style={styles.content}>
        <Typography style={styles.title} >Olá! Para começar digite seu nome</Typography>
        <TextField sx={styles.input} value={name} label="Nome" variant="outlined" onChange={handleChange} />
        <Button style={styles.button} variant="outlined" onClick={handleNext}>Começar</Button>
      </div>
    </div>
  );
}

export default App;
