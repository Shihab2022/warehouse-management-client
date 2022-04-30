import { useEffect, useState } from "react"

const useHomePageData=()=>{
    const [homeData,setHomeData]=useState([])

    useEffect(()=>{
        fetch('fake.json')
        .then(res =>res.json())
        .then(data=>setHomeData(data))
    },[])
    return [homeData,setHomeData]
}

export default useHomePageData