import React, { SetStateAction, useState } from "react"

   
interface IT{
      [name:string]:string
}

interface UseFormReturns{
       values:IT 
       handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
       setValues:React.Dispatch<SetStateAction<IT>>
}

export const useForm=(inputValues:IT):UseFormReturns=>{
   
    const [values,setValues]=useState(inputValues) 

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
            const {name,value} = event.target 
            setValues({...values,[name]:value})

    }

    return {values,handleChange,setValues}


}