import { useState } from "react";

const EditSpecies = (props) => {

    const {initialSpecie = {
        id: null,
        common_name: '',
        scientific_name: '',
        population: '',
        conservation_status: '',
        created_on: ''
    }} =props;

const [specie, setSpecie] = useState(initialSpecie);

const handleCommonNameChange = (e) =>{
    const commonname= e.target.value;
    setSpecie((specie) => ({...specie, commonname}));
};

const handleScientificNameChange = (e) =>{
    const scientificname= e.target.value;
    setSpecie((specie) => ({...specie, scientificname}));
};

const handlePopulationChange = (e) =>{
    const population= e.target.value;
    setSpecie((specie) => ({...specie, population}));
};

const handleConservationStatusChange = (e) =>{
    const conservationStatus= e.target.value;
    setSpecie((specie) => ({...specie, conservationStatus}));
};

const handleCreatedOnChange = (e) =>{
    const createdOn= e.target.value;
    setSpecie((specie) => ({...specie, createdOn}));
};

//put request
  //A function to handle the post request
  const postSpecie = (newSpecie) => {
    return fetch("http://localhost:4040/speciess", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSpecie),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("From the post ", data);
        props.saveSpecie(data);
      });
  };

    //A function to handle the Update request
    const updateSpecie = (existingSpecie) =>{
      return fetch(`http://localhost:4040/species/${existingSpecie.id}`, {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'}, 
          body: JSON.stringify(existingSpecie)
        }).then((response) => {
            return response.json()
        }).then((data) => {
          console.log("From put request ", data);
          props.saveSpecie(data);
      });

  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if(specie.id){
      updateSpecie(specie);
    } else{
      postSpecie(specie);
    }
    
  };
    return(
        <>
                <form id="add-species" action="#" onSubmit={handleSubmit}>
                    <fieldset>
                        <label>Common Name: </label>
                        <input
                            type="text"
                            id="add-specie-common_name"
                            placeholder="Common Name"
                            value={specie.common_name}
                            onChange={handleCommonNameChange}
                        />
                        <label>Scientific Name: </label>
                        <input
                            type="text"
                            id="add-specie-scientificName"
                            placeholder="scientific name"
                            value={specie.scientific_name}
                            onChange={handleScientificNameChange}
                        />
                        <label>Population: </label>
                        <input
                            type="number"
                            id="add-specie-population"
                            placeholder="number"
                            value={specie.scientific_name}
                            onChange={handlePopulationChange}
                        />
                        <label>Conservation Status: </label>
                        <input
                            type="text"
                            id="add-specie-conservationStatus"
                            placeholder=""
                            value={specie.conservation_status}
                            onChange={handleConservationStatusChange}
                        />
                        <label>Created On: </label>
                        <input
                            type="datetime-local"
                            id="add-specie-createdOn"
                            placeholder="datetime-local"
                            value={specie.created_on}
                            onChange={handleCreatedOnChange}
                        />
                    </fieldset>
                    {/* Add more form fields here */}
                    <button type="submit">{!specie.id ? "ADD": "SAVE"}</button>
                </form>
            </>
    );
}
export default EditSpecies;