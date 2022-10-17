import React,{useState} from 'react'


const useInput = (intial,required)=>{

   const [value,setValue] =useState(intial)

   const [error,setError]=useState(null)

   return {
      value,
      error,
      onChange:e=>setValue(e.target.value),
      onBlur:e=>{
         const target=e.target.value
        if(!target && required) setError('Required field')
        else setError(null)
      }

   }


}