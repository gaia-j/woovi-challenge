import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {AppContextType, InstallmentInterface} from "../interfaces/interfaces";

const AppContext = createContext<AppContextType|undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode}) => {


  const selectedRef = localStorage.getItem('selectedOption') as string
  const storedSelected = selectedRef !== 'null' ? JSON.parse(selectedRef) : null
  const storedStep = localStorage.getItem('step') ? Number(localStorage.getItem('step')) : 0
  const storedName = localStorage.getItem('name') ? localStorage.getItem('name') : ''
  const storedExpDate = localStorage.getItem('expDate') ? localStorage.getItem('expDate') : ''

  const [selectedOption, setSelectedOption] = useState<InstallmentInterface | null>(storedSelected);
  const [step, setStep] = useState<number>(storedStep as number);
  const [name, setName] = useState<string>(storedName as string);
  const [expDate, setExpDate] = useState<string>(storedExpDate as string);

  useEffect(() => {
    localStorage.setItem('selectedOption', JSON.stringify(selectedOption));
  }, [selectedOption]);

  useEffect(() => {
    localStorage.setItem('step', step.toString());
  }, [step]);

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  useEffect(() => {
    localStorage.setItem('expDate', expDate);
  }, [expDate]);

  return (
    <AppContext.Provider value={{
      selectedOption, setSelectedOption,
      step, setStep, name, setName,
      expDate, setExpDate
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};