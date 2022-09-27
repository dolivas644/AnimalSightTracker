import { useEffect, useState } from "react";
import React from "react";

const SpeciesInfo = () =>{
    const [species, setSpecies] = useState('');
    
    //get species data table
    const getSpecies = async () =>{
        const response = await fetch(
            `http://localhost:4040/species`
        );
        const specie = await response.json();
        console.log(specie );
        setSpecies(specie );
    };

    useEffect(() => {
        getSpecies();
    }, []);

    return(
<>
<header> Species Data Table </header>
<table>
    <thead>
        <th>ID: </th>
        <th>Common Name:  </th>
        <th>Scientific Name: </th>
        <th>Population: </th>
        <th>Conservation Status: </th>
        <th>Created On: </th>
    </thead>
    <tbody>
    {species.map((specie, index) => {
        return(
        <tr key={index}>
<td>{specie.id}</td>
<td>{specie.common_name}</td>
<td>{specie.scientific_name}</td>
<td>{specie.population}</td>
<td>{specie.conservation_status}</td>
<td>{specie.created_on}</td>
        </tr>
   ) 
   })}
   </tbody>
</table>
</>
    );
}
export default SpeciesInfo;