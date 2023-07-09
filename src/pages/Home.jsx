import { useState, useEffect } from "react";
import { GetInformation, GetSearch } from "../api/getData"
import Main from "../components/Main";

const Home = () => {
  const [data,setData] = useState()

  useEffect(()=>{
    const data = async () =>{
      const response = await GetSearch();
      const data_response = await Promise.all(response.map(async (item)=> {
        const itemData = await GetInformation(item.api_link)
        return itemData;
      }))
      setData(data_response)
      return data_response;
    }
    data()
  },[])
 
  
  return (
    <section>
      <Main data={data}/>
    </section>
  )
}

export default Home