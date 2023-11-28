import React, { useEffect, useState } from "react";
import PageStructure from "./PageStructure";

function MyData() {
  const [iState, updateState] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products', { method: 'GET' })
      .then((stringresponse) => stringresponse.json())
      .then((jsonResponse) => updateState(jsonResponse))
      
  }, []);
 
  return (
    <div>
      <div>
   
        {iState.map((res) => ( 
      <PageStructure 
            key={res.id}
             img={res.images}
               mytitle={res.title}
               dis={res.description}
               />
          
        ))}
      </div>
    </div>
  );
}

export default MyData;
