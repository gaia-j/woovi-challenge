import React, {useEffect} from 'react';


import { ReactComponent as Logo} from "../../assets/logo.svg";
import { ReactComponent as Challenge} from "../../assets/challenge.svg";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import {styles} from "./404.style";



export default function NotFound() {
  useEffect(() => {
    document.title = "????"
  }, [])
  return (
    <div style={styles.container}>
      <Logo style={styles.logo}/>
      <Challenge style={styles.challenge}/>
      <QuestionMarkIcon style={styles.question}/>
      <QuestionMarkIcon style={styles.question2}/>
      <QuestionMarkIcon style={styles.question3}/>
    </div>
  );
}
