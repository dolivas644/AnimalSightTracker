import { useEffect, useState } from "react";
import React from "react";
import { useReducer } from "react";
// import DeleteSpecies from "./DeleteSpecies";
import deleteIcon from "./deleteIcon.png"
// create useReducer for changing values
import EditSpecies from "./edit/EditSpecies";

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
const [searchTerm, setSearchTerm]=useState('');

const [editSpecieId,setEditSpecieId] = useState(null);

const updateSpecie = (savedSpecie) =>{
    console.log("Line 29 savedStudent", savedSpecie);
    // This function should update the whole list of students - 
    setSpecies((species) => {
      const newArraySpecies = [];
      for(let specie of species){
        if(specie.id === savedSpecie.id){
          newArraySpecies.push(savedSpecie);
        } else {
          newArraySpecies.push(specie);
        }
      }
      return newArraySpecies;
    })
    // This line is only to close the form;
    setEditSpecieId(null);
  }
  
  const onEdit = (specie) =>{
    console.log("This is line 26 on student component", specie);
    const editingID = specie.id;
    console.log("Just the student id", specie.id)
    setEditSpecieId(editingID);

  }
    return (
        <>
            <header> Species Data Table </header>
            <br></br>
            <input type="text"
            placeholder="Search..."
            className="search"
            onChange={(e) => setSearchTerm(e.target.value)} />
             <br></br>
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
                    {species.filter((val)=>{
                        if(searchTerm === ''){
                            return val;
                        }else if(val.common_name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }else if(val.scientific_name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }else if(val.population.toString().includes(searchTerm.toString())){
                            return val
                        }else if(val.conservation_status.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }else if(val.created_on.toString().includes(searchTerm.toLowerCase())){
                            return val
                        }else if(val.id.toString().includes(searchTerm.toString())){
                            return val
                        }
                    }).map((specie, index) => {
                        if(specie.id ===editSpecieId){
                            return <EditSpecies initialSpecie={specie} saveSpecie={updateSpecie} />
                        }else{
                        return (
                            <tr key={index}>
                                <td>{specie.id}</td>
                                <td>{specie.common_name}</td>
                                <td>{specie.scientific_name}</td>
                                <td>{specie.population}</td>
                                <td>{specie.conservation_status}</td>
                                <td>{specie.created_on}</td>
                                <td><img src={deleteIcon} alt="trash" onClick={() => handleDeleteSpecie(specie.id)}></img></td>
                                <td><button type="button" onClick={() => {onEdit(specie)}}>Edit</button></td>        
                            </tr>
                        )
                        }
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