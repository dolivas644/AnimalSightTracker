import { useEffect, useState } from "react";
import React from "react";

const IndividualsInfo = () =>{
    const [individuals, setIndividuals] = useState([]);
    
    //get species data table
    const getIndividuals = async () =>{
        const response = await fetch(
            `http://localhost:4040/individuals`
        );
        const individual = await response.json();
        console.log(individual );
        setIndividuals(individual );
    };

    useEffect(() => {
        getIndividuals();
    }, []);

    return(
<>
<header> Individuals Data Table </header>
<table>
    <thead>
        <th>ID: </th>
        <th>Nickname:  </th>
        <th>Seen On: </th>
        <th>Species ID: </th>
    </thead>
    <tbody>
    {individuals.map((individual, index) => {
        return(
        <tr key={index}>
<td>{individual.id}</td>
<td>{individual.nick_name}</td>
<td>{individual.seen_on}</td>
<td>{individual.species_id}</td>
        </tr>
   ) 
   })}
   </tbody>
</table>
</>
    );
}
export default IndividualsInfo;