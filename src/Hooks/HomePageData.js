import { useEffect, useState } from "react"

const useHomePageData=()=>{
    const [homeData,setHomeData]=useState([])

    useEffect(()=>{
        fetch('https://guarded-cliffs-41354.herokuapp.com/products')
        .then(res =>res.json())
        .then(data=>setHomeData(data))
    },[])
    return [homeData,setHomeData]
}

export default useHomePageData