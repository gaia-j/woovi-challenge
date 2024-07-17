import React, {useEffect} from 'react';
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
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    document.title = "Woovi Challenge - Hugo Gaia"
  }, [])

  const navigate = useNavigate();
  const handleNext = () => {
    const expTime = getExpTime()
    setExpDate(expTime)
    setStep(0)
    if (!name || name === '') {
      setError('Por favor, insira seu nome')
      return
    }
    navigate('/select-terms')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(error) setError(null)
    setName(e.target.value)
  }

  return (
    <div style={styles.container}>
      <title>ugo</title>
      <Logo style={styles.logo}/>
      <Challenge style={styles.challenge}/>
      <div style={styles.content}>
        <Typography style={styles.title} >Olá! Para começar digite seu nome</Typography>
        <TextField
          sx={styles.input}
          error={!!error}
          value={name} label="Nome"
          variant="outlined"
          onChange={handleChange}
          helperText={error}/>
        <Button style={styles.button} variant="outlined" onClick={handleNext}>Começar</Button>
      </div>
    </div>
  );
}

export default App;
