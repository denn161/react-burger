import {Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useInView } from 'react-intersection-observer';
import { ingredientsSelector } from '../services/selectors/ingredientsSelector'
import { mutationArr,IMutationArrEl } from '../utils/data'

  
 
interface IUseIngredintsReturn{
      refs:Array<any>
      dataResult:Array<IMutationArrEl>
      setCurrentTab:Dispatch<SetStateAction<string>>
      currentTab:string
      loading:boolean
}
 


const useIngredients = ():IUseIngredintsReturn => {

  const [currentTab, setCurrentTab] = useState<string>('bun')

  const { ingredients, loading } = useSelector(ingredientsSelector)

  const inViewOptions = {
    threshold: 0.1,
    trackVisibility: true,
    delay: 100
  };

  const [bunsRef, inViewBuns] = useInView(inViewOptions);
  const [saucesRef, inViewSauces] = useInView(inViewOptions);
  const [mainsRef, inViewFillings] = useInView(inViewOptions);

  const refs = [bunsRef, saucesRef, mainsRef] as Array<any>

  const dataResult =  mutationArr(ingredients) 
      

  useEffect(() => {
    if (inViewBuns) {
      setCurrentTab("bun");
    } else if (inViewSauces) {
      setCurrentTab("sauce");
    } else if (inViewFillings) {
      setCurrentTab("main");
    }
  }, [inViewBuns, inViewFillings, inViewSauces]);


  return {
    refs,
    dataResult,
    setCurrentTab,
    currentTab,
    loading
  }
}

export default useIngredients