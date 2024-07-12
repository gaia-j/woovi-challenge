import React from 'react';
import './App.css';
import InstalmentBox from "./components/instalmentBox/instalmentBox";
import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";


type InstalmentType = {
  instalment: number
  value: number
}


function App() {
  const [active, setActive] = React.useState<null | number>(null)
  const instalments = [
    {
      "instalment": 2,
      "value": 3451294
    },
    {
      "instalment": 3,
      "value": 3512212
    },
    {
      "instalment": 4,
      "value": 3612132
    },
    {
      "instalment": 5,
      "value": 3412412
    },
    {
      "instalment": 6,
      "value": 3531243
    },
    {
      "instalment": 7,
      "value": 3835612
    },
  ]


  const Title = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    top: '0px',
    left: '30px',
    color: '#4D4D4D',
    fontWeight: '800',
    backgroundColor: '#E5E5E5',
    padding: `0 1rem`,
    fontSize: '1rem',
    borderRadius: '100px',
    zIndex: 10
  }));

  return (
    <div className="App" style={{padding: '10px'}}>
      <Title variant="h6">Pix parcelado</Title>
        {instalments.map((instalment: InstalmentType ,index: number)=>{
          let position: 'top' | 'middle' | 'bottom' = 'middle'
          if (index === 0) {
            position = 'top'
          } else if (index === instalments.length - 1) {
            position = 'bottom'
          }
          return (
            <InstalmentBox
              key={index} instPosition={position} active={index === active}
              instalment={instalment.instalment} instalmentValue={instalment.value}
              onClick={()=>setActive(index)}
          />)
        })}

    </div>
  );
}

export default App;
