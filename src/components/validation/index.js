import * as yup from 'yup'


export const nameShema = yup.string().min(3).max(12).required()
export const emailSchema = yup.string().email().required()
export const passSchema = yup.string().min(6).max(16).required()
export const restCodeSchema = yup.string().min(6).max(36).required()


export const checkValidate = async (schema, setFunc,inputValue) => {
    const isValid = await schema.isValid(inputValue);
    !isValid ? setFunc(true) : setFunc(false);
  };