


import { IIngredientElement } from "../types/constructor";
import { getCookie } from "./cookies";

function filtered(data: Array<IIngredientElement>, type: string): Array<IIngredientElement> {
   return data.filter((item) => item.type === type);
}

export interface IMutationArrEl {
   title: string
   products: Array<IIngredientElement>
   id: string
}


export const mutationArr = (data: Array<IIngredientElement>): Array<IMutationArrEl> => {


   const types: Array<string> = ['bun', 'sauce', 'main']

   return types.map((type, index) => {
      return {
         title: type === 'bun' ? 'Булки' : (type === 'sauce' ? 'Соусы' : 'Начинки'),
         products: filtered(data, type),
         id: type

      }
   })
}


export const getConstructorData = (data: Array<IIngredientElement>, id: string): Array<any> => {

   const bun = data.filter((item) => item.type === 'bun').find((item) => item._id === id)

   const sauces = data.filter((item) => item.type === 'sauce')

   const mains = data.filter((item) => item.type === 'main')

   const result = [bun, sauces[1], mains[2], mains[3], mains[4], mains[4], bun]

   return result

}


export const checkResponse = (res: Response) => {
   if (!res.ok) {
      throw new Error('Что то пошло не так ....')
   }
}




function options(method: string, body?: { [name: string]: string }) {
   const opt = {
      method: method,
      headers: {
         "Content-Type": "application/json",
         Authorization: getCookie('accessToken')
            ? `Bearer ${getCookie('accessToken')}`
            : ''
      },
      body: JSON.stringify(body)
   }

   return opt

} 

interface IOptionsApi{
      method:string,
      headers:{
         [name:string]:string
      },
      body:string
}


export const getData = (url: string, options?:IOptionsApi) => new Promise(async (resolve, reject) => {

   try {
      const res = await fetch(url, options);
      checkResponse(res);
      const data = await res.json();
      return resolve(data);
   } catch (err) {
      return reject(err);
   }

}

)


