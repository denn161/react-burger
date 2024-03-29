import * as yup from 'yup'
import { RequiredStringSchema } from 'yup/lib/string';
import { AnyObject } from 'yup/lib/types';


export const nameShema = yup.string().min(3).max(12).required()
export const emailSchema = yup.string().email().required()
export const passSchema = yup.string().min(6).max(16).required()
export const restCodeSchema = yup.string().min(6).max(36).required()


export const checkValidate = async (
  schema: RequiredStringSchema<string | undefined, AnyObject>,
  setFunc: (isValid: boolean) => void,
  inputValue: string |undefined) => {
  const isValid = await schema.isValid(inputValue);
  !isValid ? setFunc(true) : setFunc(false);
};