import { useState } from "react";
 
const DeleteSighting = ({handleDeleteSighting}) => {

    //stores the sightingID that will be deleted
    const [deleteSightingId, setDeleteSightingId] =useState('');

    const handleDeleteSighting = (e) =>{
        e.preventDefault();
        //function callback
        handleDeleteSighting(deleteSightingId);
        setDeleteSightingId('');
    }

    return (
        <div>
            <h3>Delete Spighting</h3>
            <form id="delete-sighting" action="#" onSubmit={handleDeleteSighting}>
                <fieldset>
                    <label>Sighting ID</label>
                    <input type="number"
                     id="delete-sighting-id" 
                     value={deleteSightingId}
                    onChange={(e) => setDeleteSightingId(e.target.value)}/>
                </fieldset>
                <input type="submit" />
            </form>
        </div>
    )
}

export default DeleteSighting;