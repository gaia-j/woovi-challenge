import {Dispatch, SetStateAction} from "react";

export interface InstallmentInterface {
  instalment: number,
  value: number
}

export interface StyledProps {
  instposition: 'top' | 'middle' | 'bottom';
}

export interface InstalmentBoxProps {
  instposition?: 'top' | 'middle' | 'bottom';
  selected: InstallmentInterface | null
  onClick:(option: InstallmentInterface | null) => void
  instalment: InstallmentInterface
  single?: boolean
}

export interface InstalmentBoxesProps {
  instalments: InstallmentInterface[]
  selected: InstallmentInterface | null
  onClick: (option: InstallmentInterface | null) => void
}

export interface AppContextType {
  selectedOption: InstallmentInterface | null;
  setSelectedOption: (option: InstallmentInterface | null) => void;
  step: number;
  setStep: (step: number) => void;
  name: string;
  setName: (nome: string) => void;
  expDate: string;
  setExpDate: (expDate: string) => void;
}

export interface ModalProps {
  open: boolean,
  handleClose: () => void,
  pix?: boolean,
  errors?: PaymentData
}


export interface PaymentData {
  [key: string]: string;
  name: string;
  cpf: string;
  cardNumber: string;
  cardExpDate: string;
  cardCvv: string;
}

export interface PaymentContextInterface {
  errors: PaymentData;
  setErrors: Dispatch<SetStateAction<PaymentData>>;
  data: PaymentData;
  setData: Dispatch<SetStateAction<PaymentData>>;
}

export interface FieldsValidationInterface{
  value: string,
  mask?: string,
  setData: Dispatch<SetStateAction<PaymentData>>,
  field: string,
  errors: PaymentData,
  setErrors: Dispatch<SetStateAction<PaymentData>>
}
