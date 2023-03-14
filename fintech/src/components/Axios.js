import React, {useState} from 'react'
import axios from "axios"

function Axios() {
    const [searchInput, setSearchInput] = useState("");
    const [news,setNews] = useState();

    const handleClick = () =>{
        let url = `https://newsapi.org/v2/everything?q=${searchInput}&from=2023-02-14&sortBy=publishedAt&apiKey=c7d69e0ea54e4c4e913573095d8afef4`

        axios.get(url).then((response)=>{
            console.log(response.data);
            setNews(response.data)
        });
    };

    function handleChange({target}){
        const {value} = target;
        setSearchInput(value);
    }
    
  return (
    <div>
        <input onChange={handleChange}></input>
        <button onClick={handleClick}>통신 발생</button>
    </div>
  )
}

export default Axios