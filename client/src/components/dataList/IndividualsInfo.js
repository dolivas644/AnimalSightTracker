import { useEffect, useState } from "react";
import React from "react";
import { useReducer } from "react";
import deleteIcon from "./deleteIcon.png";

// create useReducer for changing values
const reducer = (state, action) => {
    console.log(action, 'this is the action');
    switch (action.type) {
        case 'editID':
            console.log('Logged if the editName action is being dispatched');
            //it updates the name to the input value
            return { ...state, id: action.payload };

        case 'editNickName':
            return { ...state, nick_name: action.payload };

        case 'editSpeciesId':
            return { ...state, species_id: action.payload };

        case 'editSeenOn':
            return { ...state, seen_on: action.payload };

        case 'clearForm':
            return { id: "", nick_name: '', species_id: '', seen_on: '' };
        default:
            return state;
    }
};

const IndividualsInfo = () => {

    const [individuals, setIndividuals] = useState([]);

    //get individuals data table
    const getIndividuals = async () => {
        const response = await fetch(
            `http://localhost:4040/individuals`
        );
        const individual = await response.json();
        console.log(individual);
        setIndividuals(individual);
    };

    useEffect(() => {
        getIndividuals();
    }, []);


    //initialistate of the form will be empty
    const initialState = {
        id: "",
        nick_name: '',
        species_id: '',
        seen_on: '',
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    const handleAddIndividual = async (e) => {
        e.preventDefault();

        const newIndividual = {
            id: state.id,
            nick_name: state.nick_name,
            species_id: state.species_id,
            seen_on: state.seen_on,
        }
        console.log(newIndividual);
        const response = await fetch('http://localhost:4040/individuals', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newIndividual)
        });
        const content = await response.json();
        setIndividuals([...individuals, content])
        dispatch({ type: 'clearForm' });
    }

            //delete individual handler
            const handleDeleteIndividual = async(deleteId) =>{
                const response = await fetch(`http://localhost:4040/individuals/${deleteId}`,{
                    method: 'DELETE',
                })
                await response.json();
                const deleteIndividualFunction = individuals.filter((individual) => individual.id !== deleteId);
                setIndividuals(deleteIndividualFunction);
            };
            const [searchTerm, setSearchTerm]=useState('');

    return (
        <>
            <header> Individuals Data Table </header>
            <br></br>
            <input type="text"
            placeholder="Search..."
            className="search"
            onChange={(e) => setSearchTerm(e.target.value)} />
            <br></br>
            <table>
                <thead>
                    <th>ID: </th>
                    <th>Nickname:  </th>
                    <th>Seen On: </th>
                    <th>Species ID: </th>
                </thead>
                <tbody>
                    {individuals.filter((val)=>{
                        if(searchTerm === ''){
                            return val;
                        }else if(val.nick_name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }else if(val.seen_on.toString().includes(searchTerm.toString())){
                            return val
                        }else if(val.species_id.toString().includes(searchTerm.toLowerCase())){
                            return val
                        }else if(val.id.toString().includes(searchTerm.toString())){
                            return val
                        }
                    }).map((individual, index) => {
                        return (
                            <tr key={index}>
                                <td>{individual.id}</td>
                                <td>{individual.nick_name}</td>
                                <td>{individual.seen_on}</td>
                                <td>{individual.species_id}</td>
                                <td><img src={deleteIcon} alt="trash" onClick={() => handleDeleteIndividual(individual.id)}></img></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div className="addIndividuals">
            <header>Add a new Individual</header>
                <br></br>
                <form id="add-individuals" action="#" onSubmit={handleAddIndividual}>
                    <fieldset>
                        <br></br>
                        <label>ID: </label>
                        <br></br>
                        <input
                            type="number"
                            id="add-individuals-id"
                            placeholder="Individuals ID"
                            value={state.id}
                            onChange={(e) =>
                                dispatch({
                                    type: 'editID',
                                    payload: e.target.value
                                })
                            }
                        />
                        <br></br>
                        <label>Nick Name: </label>
                        <br></br>
                        <input
                            type="text"
                            id="add-individuals-nick_name"
                            placeholder="Nick Name"
                            value={state.nick_name}
                            onChange={(e) =>
                                dispatch({
                                    type: 'editNickName',
                                    payload: e.target.value
                                })
                            }
                        />
                        <br></br>
                        <label>Species Id: </label>
                        <br></br>
                        <input
                            type="number"
                            id="add-individuals-speciesId"
                            placeholder="species ID"
                            value={state.species_id}
                            onChange={(e) =>
                                dispatch({
                                    type: 'editSpeciesId',
                                    payload: e.target.value
                                })
                            }
                        />
                        <br></br>
                        <label>Seen on: </label>
                        <br></br>
                        <input
                            type="datetime-local"
                            id="add-individuals-seenOn"
                            placeholder=""
                            value={state.seen_on}
                            onChange={(e) =>
                                dispatch({
                                    type: 'editSeenOn',
                                    payload: e.target.value
                                })
                            }
                        />
                    </fieldset>
                    {/* Add more form fields here */}
                    <input type="submit" />
                </form>
            </div>
        </>
    );
}
export default IndividualsInfo;