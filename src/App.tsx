import React from 'react';
import InstalmentBox from "./components/installmentBox/installmentBox";
import BadgeTitle from "./components/badgeTitle/badgeTitle";
import InstalmentBoxes from "./components/installmentBoxes/installmentBoxes";
import { ReactComponent as Logo} from "./assets/logo.svg";
import {Typography} from "@mui/material";
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';


function App() {
  const [selected, setSelected] = React.useState<null | number>(null)
  const instalments = [
    {
      "instalment": 1,
      "value": 3451294,
      "highlightText": "de volta no seu Pix na hora"
    },
    {
      "instalment": 2,
      "value": 3451294,
      "highlightText": ""
    },
    {
      "instalment": 3,
      "value": 3512212,
      "highlightText": ""
    },
    {
      "instalment": 4,
      "value": 3612132,
      "highlightText": "-3% de juros: Melhor opção de parcelamento"
    },
    {
      "instalment": 5,
      "value": 3412412,
      "highlightText": ""
    },
    {
      "instalment": 6,
      "value": 3531243,
      "highlightText": ""
    },
    {
      "instalment": 7,
      "value": 3835612,
      "highlightText": ""
    },
  ]


  return (
    <div className="App" style={{padding: '20px', textAlign: 'center'}}>
      <Logo/>
      <Typography fontWeight={800} >João, como você quer pagar?</Typography>
      <div style={{position: 'relative'}}>
        <BadgeTitle>Pix</BadgeTitle>
        <InstalmentBox
          active={selected === 0 ? 1 : 0}
          index={0}
          selected={selected}
          instalment={instalments[0]}
          onClick={setSelected}
          single
        />
      </div>
      <div style={{position: 'relative', marginTop: '40px'}}>
        <BadgeTitle>Pix parcelado</BadgeTitle>
        <InstalmentBoxes
          instalments={instalments}
          selected={selected}
          onClick={setSelected}
        />
      </div>
      <div style={{marginTop: '10px', color: '#AFAFAF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
        <GppGoodOutlinedIcon style={{}}/>
        <Typography style={{fontSize: '1rem',paddingTop:'2px'}} >Pagamento 100% seguro via:</Typography>
        <Logo style={{width: '3.5rem', marginLeft: '5px', filter: 'grayscale(100%)'}}/>
      </div>
    </div>
  );
}

export default App;
