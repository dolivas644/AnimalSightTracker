import { useEffect, useState } from "react";
import React from "react";

const SightingsInfo = () =>{
    const [sightings, setSightings] = useState([]);
    
    //get sightings data table
    const getSightings = async () =>{
        const response = await fetch(
            `http://localhost:4040/sightings`
        );
        const sighting = await response.json();
        console.log(sighting );
        setSightings(sighting );
    };

    useEffect(() => {
        getSightings();
    }, []);

    return(
<>
<header> Sightings Data Table </header>
<table>
    <thead>
        <th>ID: </th>
        <th>Date Time:  </th>
        <th>Location: </th>
        <th>Healthy: </th>
        <th>Individual ID: </th>
        <th>Created On: </th>
        <th>Email: </th>
    </thead>
    <tbody>
    {sightings.map((sighting, index) => {
        return(
        <tr key={index}>
<td>{sighting.id}</td>
<td>{sighting.date_time}</td>
<td>{sighting.location}</td>
<td>{sighting.healthy}</td>
<td>{sighting.individual_id}</td>
<td>{sighting.created_on}</td>
<td>{sighting.email}</td>
        </tr>
   ) 
   })}
   </tbody>
</table>
</>
    );
}
export default SightingsInfo;