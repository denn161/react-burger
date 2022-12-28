import { useState, useEffect, useCallback } from "react";

  interface IInitState{
       loading:boolean 
       error:boolean 
       data:Array<any>
  }

  interface IUseFetchReturn{
        storeData:IInitState
        getData:(url:string,options:{[name:string]:string})=>Promise<any>
  }

 
const useFetch = (url:string,options:{[name:string]:string}):IUseFetchReturn => {

  const [storeData, setStoreData] = useState<IInitState>({
    loading: false,
    error: false,
    data: []

  })
  const getData =useCallback( async (url: string, options: { [name: string]: string }) => {
    setStoreData({ ...storeData, loading: true, error: false })
    try {
      const res = await fetch(url, options)
      if (!res.ok) {
        return Promise.reject(`Error:${res.status}`)
      }
      const { data } = await res.json()
      setStoreData({ ...storeData, loading: false, error: false, data })


    } catch (error) {
        const er = error as ErrorEvent
      console.log(er.message)
      setStoreData({ ...storeData, error: true, loading: false })
    }

  },[url,options])

  useEffect(() => {
    if (url) {
      getData(url, options);
    }

  }, [url, options])


 return {storeData,getData}

}

export default useFetch;