import { useEffect, useState } from "react";
import React from "react";
import { useReducer } from "react";
// import DeleteSpecies from "./DeleteSpecies";
import deleteIcon from "./deleteIcon.png"

// create useReducer for changing values
const reducer = (state, action) => {
    console.log(action, 'this is the action');
    switch (action.type) {
        case 'editID':
            console.log('Logged if the editName action is being dispatched');
            //it updates the name to the input value
            return { ...state, id: action.payload };

        case 'editCommon_name':
            return { ...state, common_name: action.payload };

        case 'editScientificName':
            return { ...state, scientific_name: action.payload };

        case 'editPopulation':
            return { ...state, population: action.payload };

        case 'editConservationStatus':
            return { ...state, conservation_status: action.payload };
        case 'editCreatedOn':
            return { ...state, created_on: action.payload };
        case 'clearForm':
            return { id: "", common_name: '', scientific_name: '', population: '', conservation_status: '', created_on: '' };
        default:
            return state;
    }
};
const SpeciesInfo = () => {
    const [species, setSpecies] = useState([]);

    //get species data table
    const getSpecies = async () => {
        const response = await fetch(
            `http://localhost:4040/species`
        );
        const specie = await response.json();
        console.log(specie);
        setSpecies(specie);
    };

    useEffect(() => {
        getSpecies();
    }, []);

    //initialistate of the form will be empty
    const initialState = {
        id: "",
        common_name: '',
        scientific_name: '',
        population: '',
        conservation_status: '',
        created_on: ''
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    const handleAddSpecie = async (e) => {
        e.preventDefault();

        const newSpecie = {
            id: state.id,
            common_name: state.common_name,
            scientific_name: state.scientific_name,
            population: state.population,
            conservation_status: state.conservation_status,
            created_on: state.created_on
        }
        console.log(newSpecie);
        const response = await fetch('http://localhost:4040/species', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSpecie)
        });
        const content = await response.json();
        setSpecies([...species, content])
        dispatch({ type: 'clearForm' });
    }

    //delete specie handler
    const handleDeleteSpecie = async(deleteId) =>{
        const response = await fetch(`http://localhost:4040/species/${deleteId}`,{
            method: 'DELETE',
        })
        await response.json();
        const deleteSpecieFunction = species.filter((specie) => specie.id !== deleteId);
        setSpecies(deleteSpecieFunction);
    };

    return (
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
                        return (
                            <tr key={index}>
                                <td>{specie.id}</td>
                                <td>{specie.common_name}</td>
                                <td>{specie.scientific_name}</td>
                                <td>{specie.population}</td>
                                <td>{specie.conservation_status}</td>
                                <td>{specie.created_on}</td>
                                <td><img src={deleteIcon} alt="trash" onClick={() => handleDeleteSpecie(specie.id)}></img></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="addSpecies">
            <header>Add a new Species</header>
                <br></br>
                <form id="add-species" action="#" onSubmit={handleAddSpecie}>
                    <fieldset>
                        <br></br>
                        <label>ID: </label>
                        <br></br>
                        <input
                            type="number"
                            id="add-specie-id"
                            placeholder="Specie ID"
                            value={state.id}
                            onChange={(e) =>
                                dispatch({
                                    type: 'editID',
                                    payload: e.target.value
                                })
                            }
                        />
                        <br></br>
                        <label>Common Name: </label>
                        <br></br>
                        <input
                            type="text"
                            id="add-specie-common_name"
                            placeholder="Common Name"
                            value={state.common_name}
                            onChange={(e) =>
                                dispatch({
                                    type: 'editCommon_name',
                                    payload: e.target.value
                                })
                            }
                        />
                        <br></br>
                        <label>Scientific Name: </label>
                        <br></br>
                        <input
                            type="text"
                            id="add-specie-scientificName"
                            placeholder="scientific name"
                            value={state.scientific_name}
                            onChange={(e) =>
                                dispatch({
                                    type: 'editScientificName',
                                    payload: e.target.value
                                })
                            }
                        />
                        <br></br>
                        <label>Population: </label>
                        <br></br>
                        <input
                            type="number"
                            id="add-specie-population"
                            placeholder="number"
                            value={state.population}
                            onChange={(e) =>
                                dispatch({
                                    type: 'editPopulation',
                                    payload: e.target.value
                                })
                            }
                        />
                        <br></br>
                        <label>Conservation Status: </label>
                        <br></br>
                        <input
                            type="text"
                            id="add-specie-conservationStatus"
                            placeholder=""
                            value={state.conservation_status}
                            onChange={(e) =>
                                dispatch({
                                    type: 'editConservationStatus',
                                    payload: e.target.value
                                })
                            }
                        />
                        <br></br>
                        <label>Created On: </label>
                        <br></br>
                        <input
                            type="datetime-local"
                            id="add-specie-createdOn"
                            placeholder="datetime-local"
                            value={state.created_on}
                            onChange={(e) =>
                                dispatch({
                                    type: 'editCreatedOn',
                                    payload: e.target.value
                                })
                            }
                        />
                        <br></br>
                    </fieldset>
                    {/* Add more form fields here */}
                    <input type="submit" />
                </form>
            </div>
        </>
    );
}
export default SpeciesInfo;