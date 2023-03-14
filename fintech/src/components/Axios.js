import React, {useState} from 'react'
import axios from "axios"

function Axios() {
    const [news,setNews] = useState();
    const handleClick = () =>{
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-02-14&sortBy=publishedAt&apiKey=c7d69e0ea54e4c4e913573095d8afef4").then((response)=>{
            console.log(response.data);
            setNews(response.data)
        });
    };

  return (
    <div>
        {news}
        <button onClick={handleClick}>통신 발생</button>
    </div>
  )
}

export default Axios