import React from 'react';
import './App.css';
import InstalmentBox from "./components/installmentBox/installmentBox";
import BadgeTitle from "./components/badgeTitle/badgeTitle";
import InstalmentBoxes from "./components/installmentBoxes/installmentBoxes";


function App() {
  const [selected, setSelected] = React.useState<null | number>(null)
  const instalments = [
    {
      "instalment": 1,
      "value": 3451294
    },
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

  return (
    <div className="App" style={{padding: '10px'}}>
      <div style={{position: 'relative'}}>
        <BadgeTitle>Pix</BadgeTitle>
        <InstalmentBox
          active={selected === 0 ? 1 : 0}
          index={0}
          selected={selected}
          instalment={instalments[0]}
          onClick={setSelected} single
        />
      </div>
      <div style={{position: 'relative'}}>
        <BadgeTitle>Pix parcelado</BadgeTitle>
        <InstalmentBoxes
          instalments={instalments}
          selected={selected}
          onClick={setSelected}
        />
      </div>

    </div>
  );
}

export default App;
