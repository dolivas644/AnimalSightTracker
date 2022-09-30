import React from "react";
const ReadOnlyRow = ({specie}) =>{
    return (
        <tr>
            <td>{specie.id}</td>
            <td>{specie.common_name}</td>
            <td>{specie.scientific_name}</td>
            <td>{specie.population}</td>
            <td>{specie.conservation_status}</td>
            <td>{specie.created_on}</td>
        </tr>
    )
}

export default ReadOnlyRow;