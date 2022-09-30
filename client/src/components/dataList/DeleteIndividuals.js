import { useState } from "react";
 
const DeleteIndividual = ({handleDeleteSighting: handleDeleteIndividual}) => {

    //stores the sightingID that will be deleted
    const [deleteIndividualId, setDeleteIndividualId] =useState('');

    const handleDeleteIndividual = (e) =>{
        e.preventDefault();
        //function callback
        handleDeleteIndividual(deleteIndividualId);
        setDeleteIndividualId('');
    }

    return (
        <div>
            <h3>Delete Individual</h3>
            <form id="delete-individual" action="#" onSubmit={handleDeleteIndividual}>
                <fieldset>
                    <label>Individual ID</label>
                    <input type="number"
                     id="delete-individual-id" 
                     value={deleteIndividualId}
                    onChange={(e) => setDeleteIndividualId(e.target.value)}/>
                </fieldset>
                <input type="submit" />
            </form>
        </div>
    )
}

export default DeleteIndividual;