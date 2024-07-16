import React from 'react';
import InstalmentBox from "./components/installmentBox/installmentBox";
import BadgeTitle from "./components/badgeTitle/badgeTitle";
import InstalmentBoxes from "./components/installmentBoxes/installmentBoxes";
import {Button, Typography} from "@mui/material";
import {installments} from "./utils/installments";
import {useAppContext} from "./contexts/AppContext";
import {AppContextType} from "./interfaces/interfaces";
import {useNavigate} from "react-router-dom";
import {getExpTime} from "./utils/getExpTime";


function App() {
  const {selectedOption, setSelectedOption, setExpDate }: AppContextType = useAppContext() as AppContextType

  const navigate = useNavigate();
  const handleNext = () => {
    const expTime = getExpTime()
    setExpDate(expTime)
    navigate('/final')
  }

  return (
    <div className="App" style={{padding: '30px 20px', textAlign: 'center'}}>
      <Typography fontWeight={800} >João, como você quer pagar?</Typography>
      <div style={{position: 'relative'}}>
        <BadgeTitle>Pix</BadgeTitle>
        <InstalmentBox
          selected={selectedOption}
          instalment={installments[0]}
          onClick={setSelectedOption}
          single
        />
      </div>
      <div style={{position: 'relative', marginTop: '40px'}}>
        <BadgeTitle>Pix parcelado</BadgeTitle>
        <InstalmentBoxes
          instalments={installments}
          selected={selectedOption}
          onClick={setSelectedOption}
        />
      </div>
      <Button variant="contained" onClick={handleNext}>Próximo</Button>
    </div>
  );
}

export default App;
