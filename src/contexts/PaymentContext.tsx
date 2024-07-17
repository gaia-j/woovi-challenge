import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { PaymentContextInterface} from "../interfaces/interfaces";

const PaymentContext = createContext<PaymentContextInterface|undefined>(undefined);

export const PaymentProvider = ({ children }: { children: ReactNode}) => {

  const fields = {
    name: '',
    cpf: '',
    cardNumber: '',
    cardExpDate: '',
    cardCvv: ''
  }

  const [data, setData] = useState(fields)
  const [errors, setErrors] = useState(fields)


  return (
    <PaymentContext.Provider value={{
      errors,setErrors,
      data,setData
    }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePaymentContext = () => {
  return useContext(PaymentContext);
};