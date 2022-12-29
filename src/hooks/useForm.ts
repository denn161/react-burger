import React, { SetStateAction, useState } from "react"


interface IUFMControlsProps {
    [name: string]: string
}


interface UseFormReturns {
    values: IUFMControlsProps
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    setValues: React.Dispatch<SetStateAction<IUFMControlsProps>>
    clearForm: (inputValues: IUFMControlsProps) => void
}

export const useForm = (inputValues: IUFMControlsProps): UseFormReturns => {

    const [values, setValues] = useState(inputValues)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setValues({ ...values, [name]: value })

    }

    const clearForm = (): void => {
        setValues(inputValues)
    }




    return { values, handleChange, setValues, clearForm }


}


