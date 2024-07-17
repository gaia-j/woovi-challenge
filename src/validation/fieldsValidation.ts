import {validateCpf} from "./validateCpf";
import isValidCreditCard from "./validateCard";
import {FieldsValidationInterface} from "../interfaces/interfaces";

export const fieldsValidation = ({
  value,
  mask,
  setData,
  field,
  errors,
  setErrors,
}: FieldsValidationInterface) => {
  let input = value

  if(mask){
    const rawValue = input.replace(/\D/g, '');
    let maskedValue = '';
    let maskIndex = 0;
    let rawValueIndex = 0;

    while (maskIndex < mask.length && rawValueIndex < rawValue.length) {
      if (mask[maskIndex] === '9') {
        maskedValue += rawValue[rawValueIndex];
        rawValueIndex++;
      } else {
        maskedValue += mask[maskIndex];
      }
      maskIndex++;
    }
    input = maskedValue;
  }

  setData((prev: any) => ({...prev, [field]: input}))
  if (errors[field]!=='') setErrors((prev: any) => ({...prev, [field]: ''}))

  const raw = input.replace(/\D/g, '');
  switch (field) {
    case 'cpf':
      if(raw.length === 11){
        const valid = validateCpf(raw);
        if (!valid) setErrors((prev: any) => ({...prev, [field]: 'CPF inválido'}))
      }
      break
    case 'cardNumber':
      if(raw.length === 16){
        const valid = isValidCreditCard(raw)
        if (!valid) setErrors((prev: any) => ({...prev, [field]: 'Cartão inválido'}))
      }
      break
    case 'cardExpDate':
      if(input.length === 5){
        const [month, year] = input.split('/');
        const fullYear = Number(`20${year}`);
        const date = new Date(fullYear, Number(month) - 1, 1);
        const today = new Date();
        if (date < today) {
          setErrors((prev: any) => ({...prev, [field]: 'Data de expiração inválida'}))
        }
      }
      break
  }
}