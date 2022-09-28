import { useState } from "react";
 
const DeleteSpecie = ({handleDeleteSpecie}) => {

    //stores the specieID that will be deleted
    const [deleteSpecieId, setDeleteSpecieId] =useState('');

    const handleDeleteSpecie = (e) =>{
        e.preventDefault();
        //function callback
        handleDeleteSpecie(deleteSpecieId);
        setDeleteSpecieId('');
    }

    return (
        <div>
            <h3>Delete Specie</h3>
            <form id="delete-specie" action="#" onSubmit={handleDeleteSpecie}>
                <fieldset>
                    <label>Species ID</label>
                    <input type="number"
                     id="delete-specie-id" 
                     value={deleteSpecieId}
                    onChange={(e) => setDeleteSpecieId(e.target.value)}/>
                </fieldset>
                <input type="submit" />
            </form>
        </div>
    )
}

export default DeleteSpecie;