
import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () =>{
    
    const [city,setCity] = useState(null);
    const [search, setSearch] = useState("mumbai");

    useEffect( () => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b64d873cc1d6dcb499c2435abe38b361 `;
            const response = await fetch(url);
            
            const resJson = await response.json();
            //console.log(resJson);
            setCity(resJson.main);
        };
        
        fetchApi();
    }, [search])

    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search"  className="inputFeild" onChange={ (event) =>{setSearch(event.target.value) }

                    } />
                </div>
        
        
        {!city ? (
            <p> No data found</p>

        ) : (
            <div>
            <div className="info">
                 <h2 className="location">
                 <i className="fa fa-street-view" aria-hidden="true"></i>{search}
                 </h2>
                 <h1 className="temp">
                 {city.temp}°Cel  
                 </h1>
                 <h3 className="tempmin_max">Min : {city.temp_min}°Cel | Max : {city.temp_max} °Cel  </h3>
            </div>
            <div className="wave1"></div>
            <div className="wave2"></div>
            <div className="wave3"></div> 
            </div> 
        )}

            
            </div>
        </>
    )
}

export default Tempapp;