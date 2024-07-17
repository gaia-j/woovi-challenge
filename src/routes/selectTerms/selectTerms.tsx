import React, {useEffect} from 'react';
import InstalmentBox from "../../components/installmentBox/installmentBox";
import BadgeTitle from "../../components/badgeTitle/badgeTitle";
import InstalmentBoxes from "../../components/installmentBoxes/installmentBoxes";
import {Button, Typography} from "@mui/material";
import {installments} from "../../utils/installments";
import {useAppContext} from "../../contexts/AppContext";
import {AppContextType} from "../../interfaces/interfaces";
import {useNavigate} from "react-router-dom";
import {getExpTime} from "../../utils/getExpTime";
import {styles} from "./selectTerms.style";
import Header from '../../components/header/header';
import Footer from "../../components/footer/footer";


export default function SelectTerms() {
  const {name,selectedOption, setSelectedOption, setExpDate }: AppContextType = useAppContext() as AppContextType

  useEffect(() => {
    document.title = "Selecionar parcelas"
  }, [])

  const navigate = useNavigate();
  const handleNext = () => {
    const expTime = getExpTime()
    setExpDate(expTime)
    navigate('/payment-pix')
  }

  return (
    <>
      <Header/>
      <div style={styles.container}>
        <Typography style={styles.title} >{name}, como você quer pagar?</Typography>
        <div style={styles.pix}>
          <BadgeTitle>Pix</BadgeTitle>
          <InstalmentBox
            selected={selectedOption}
            instalment={installments[0]}
            onClick={setSelectedOption}
            single
          />
        </div>
        <div style={styles.termOptions}>
          <BadgeTitle>Pix parcelado</BadgeTitle>
          <InstalmentBoxes
            instalments={installments}
            selected={selectedOption}
            onClick={setSelectedOption}
          />
        </div>
        <Button style={styles.button} variant="contained" onClick={handleNext}>Próximo</Button>
      </div>
      <Footer/>
    </>
  );
}
