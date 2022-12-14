import { useState, useEffect, useCallback } from "react";


const useFetch = (url, options) => {

  const [storeData, setStoreData] = useState({
    loading: false,
    error: false,
    data: []

  })
  const getData = useCallback(async (url, options) => {
    setStoreData({ ...storeData, loading: true, error: false })
    try {
      const res = await fetch(url, options)
      if (!res.ok) {
        return Promise.reject(`Error:${res.status}`)
      }
      const { data } = await res.json()
      setStoreData({ ...storeData, loading: false, error: false, data })


    } catch (error) {
      console.log(error.message)
      setStoreData({ ...storeData, error: true, loading: false })
    }

  }, [storeData])



  useEffect(() => {
    if (url) {
      getData(url, options);

    }

  }, [url, options])


  return { ...storeData, getData }



}

export default useFetch;