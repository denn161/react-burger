import React, { useState } from 'react'


export const useInput = (intial: string, required: boolean) => {

   const [value, setValue] = useState(intial)

   const [error, setError] = useState<string | null>(null)

   return {
      value,
      error,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
      onBlur: (e: React.ChangeEvent<HTMLInputElement>) => {
         const target = e.target.value
         if (!target && required) setError('Required field')
         else setError(null)
      }

   }


}


