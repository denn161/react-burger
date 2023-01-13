import React, { SetStateAction, useState } from "react"


interface IUFMControlsProps {
    [name: string]: string
}


interface UseFormReturns {
    values: IUFMControlsProps
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    setValues: React.Dispatch<SetStateAction<IUFMControlsProps>>
    clearForm: (inputValues: IUFMControlsProps) => void
    emailErr:boolean 
    passErr:boolean 
    isShowPass:boolean 
    nameErr:boolean
    loginErr:boolean
    setEmailErr:React.Dispatch<SetStateAction<boolean>>
    setPassErr:React.Dispatch<SetStateAction<boolean>>
    setShowPass:React.Dispatch<SetStateAction<boolean>>
    setNameErr:React.Dispatch<SetStateAction<boolean>>
    setLoginErr:React.Dispatch<SetStateAction<boolean>>
}

export const useForm = (inputValues: IUFMControlsProps): UseFormReturns => {

    const [values, setValues] = useState(inputValues)

    const [emailErr, setEmailErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [isShowPass, setShowPass] = useState(false);
    const [nameErr, setNameErr] = useState(false);
    const [loginErr, setLoginErr] = useState(false);
 

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setValues({ ...values, [name]: value })

    }

    const clearForm = (): void => {
        setValues(inputValues)
    }


    return { values, handleChange,
         setValues, clearForm,emailErr,
         passErr,isShowPass,setEmailErr,setPassErr,setShowPass,nameErr,loginErr,setLoginErr,setNameErr }


}


