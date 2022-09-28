import { useState } from "react";

//pass the function deleteUser as a prop(function comes from Users) 
const DeleteSighting = ({handleDeleteSighting}) => {

    //stores the specieID that will be deleted
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
                    <label>Event ID</label>
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