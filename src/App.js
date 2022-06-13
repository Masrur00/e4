import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ButtonComponent from "./components/ButtonComponent";
import "./styles.css";
import CityRow from "./components/CityRow";

export default function App() {
  const [data, setData] = useState([{}]);
  const [page,setPage] = useState(1);
  const [limit,setLimit] = useState(10);
  const myRef = useRef(null);
  const myRef2 = useRef(null);
  
  const handlepage = (id) => {      
      if(id === "PREV")
      setPage(prev => prev - 1)
      else
      setPage(prev => prev + 1)
  }

  const disabled = (id) =>{
       if (page <= 1 && id === "PREV") 
         myRef.current.disabled= true;

       if (page >= 5 && id === "NEXT")
       myRef2.current.disabled= true;
  }

 
  
  useEffect(()=>{
     getData();
  },[page,limit]);

 const getData = () => {
    return axios.get(`https://json-server-mocker-masai.herokuapp.com/cities/?_limit=${limit}&_page=${page}`)
    .then(function (res) {
      // handle success      
      setData(res.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    }); 
 }
  
  return (
    <div className="App">
      <div id="loading-container"></div>
      <table>   
        <thead>
        <tr>
          <th>
            ID
          </th>
          <th>
            CITY NAME
          </th>
          <th>
            COUNTRY NAME
          </th>
          <th>
            POPULATION
          </th>
          </tr>
          </thead>     
          <tbody>         
        
          {
            data.map((city)=> {
              return <CityRow city={city} key={city.id}  />
            })
          } 
         </tbody>
      </table>

      <div>
        <ButtonComponent id="SORT_BUTTON" title={`Sort by Increasing Population`} />
        <ButtonComponent title="PREV" id="PREV" text="Previous" handlepage={handlepage} ref={myRef} disabled={disabled} />
        <ButtonComponent id="NEXT" title="NEXT" text="Next"      handlepage={handlepage}  ref={myRef2} disabled={disabled} />
      </div>
    </div>
  );
}
