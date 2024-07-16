import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/nunito/300.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/500.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/700.css';
import '@fontsource/nunito/800.css';
import { ThemeProvider } from '@mui/material/styles';
import Final from "./routes/final/final";
import {theme} from "./theme";
import {AppProvider} from "./contexts/AppContext";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Header/>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/final" element={<Final/>}/>
          </Routes>
        </Router>
        <Footer/>
      </ThemeProvider>
    </AppProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
