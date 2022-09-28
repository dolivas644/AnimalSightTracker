import { useEffect, useState } from "react";
import React from "react";
import { useReducer } from "react";

// create useReducer for changing values
const reducer = (state, action) => {
    console.log(action, 'this is the action');
    switch (action.type) {
        case 'editID':
            console.log('Logged if the editName action is being dispatched');
            //it updates the name to the input value
            return { ...state, id: action.payload };

        case 'editDateTime':
            return { ...state, date_time: action.payload };

        case 'editLocation':
            return { ...state, location: action.payload };

        case 'editHealthy':
            return { ...state, healthy: action.payload };

        case 'editEmail':
            return { ...state, email: action.payload };
            case 'editIndividualId':
                return { ...state, individual_id: action.payload };
        case 'editCreatedOn':
            return { ...state, created_on: action.payload };
        case 'clearForm':
            return { id: "" , date_time: '', location: '',  healthy: '', email: '',individual_id:'', created_on: '' };
        default:
            return state;
    }
};

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

       //initialistate of the form will be empty
       const initialState = {
        id: "",
        date_time: '',
        location: '',
        healthy: '',
        email: '',
        individual_id:'',
        created_on: ''
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    const handleAddSighting = async (e) => {
        e.preventDefault();

        const newSighting = {
            id: state.id,
            date_time: state.date_time,
            location: state.location,
            healthy: state.healthy,
            email: state.email,
            individual_id: state.individual_id,
            created_on: state.created_on
        }
        console.log(newSighting);
        const response = await fetch('http://localhost:4040/sightings',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSighting)
        });
        const content = await response.json();
        setSightings([...sightings, content])
        dispatch({type:'clearForm'});
    }
    return(
<>
<header> Sightings Data Table </header>
<table>
    <thead>
        <th>ID: </th>
        <th>Date Time:  </th>
        <th>Location: </th>
        <th>Healthy: </th>
        <th>Email: </th>
        <th>Individual ID: </th>
        <th>Created On: </th>
    </thead>
    <tbody>
    {sightings.map((sighting, index) => {
        return(
        <tr key={index}>
<td>{sighting.id}</td>
<td>{sighting.date_time}</td>
<td>{sighting.location}</td>
<td>{sighting.healthy}</td>
<td>{sighting.email}</td>
<td>{sighting.individual_id}</td>
<td>{sighting.created_on}</td>
        </tr>
   ) 
   })}
   </tbody>
</table>

<div className="addSightings">
                <form id="add-sightings" action="#" onSubmit={handleAddSighting}>
                    <fieldset>
                        <br></br>
                        <label>ID: </label>
                        <br></br>
                        <input
                            type="number"
                            id="add-sighting-id"
                            placeholder="Sighting ID"
                            value={state.id}
                            onChange={(e) =>
                                dispatch({
                                    type: 'editID',
                                    payload: e.target.value
                                })
                            }
                        />
                        <br></br>
                        <label>Date Time: </label>
                        <br></br>
                        <input
                            type="datetime-local"
                            id="add-sighting-date_time"
                            placeholder="Date Time Local"
                            value={state.date_time}
                            onChange={(e) =>
                                dispatch({
                                    type: 'editDateTime',
                                    payload: e.target.value
                                })
                            }
                        />
                        <br></br>
                        <label>Location: </label>
                        <br></br>
                        <input
                            type="text"
                            id="add-sighting-location"
                            placeholder="location"
                            value={state.location}
                            onChange={(e) =>
                                dispatch({
                                    type: 'editLocation',
                                    payload: e.target.value
                                })
                            }
                        />
                        <br></br>
                        <label>Healthy: </label>
                        <br></br>
                        <input
                            type="text"
                            id="add-sighting-healthy"
                            placeholder="True/False"
                            value={state.healthy}
                            onChange={(e) =>
                                dispatch({
                                    type: 'editHealthy',
                                    payload: e.target.value
                                })
                            }
                        />
                        <br></br>
                        <label>Email: </label>
                        <br></br>
                        <input
                            type="email"
                            id="add-sighting-email"
                            placeholder="email@email.com"
                            value={state.email}
                            onChange={(e) =>
                                dispatch({
                                    type: 'editEmail',
                                    payload: e.target.value
                                })
                            }
                        />
                        <br></br>
                        <label>Individual Id: </label>
                        <br></br>
                        <input
                            type="number"
                            id="add-sighting-individualId"
                            placeholder="ID"
                            value={state.individual_id}
                            onChange={(e) =>
                                dispatch({
                                    type: 'editIndividualId',
                                    payload: e.target.value
                                })
                            }
                        />
                        <br></br>
                        <label>Created On: </label>
                        <br></br>
                        <input
                            type="datetime-local"
                            id="add-sighting-createdOn"
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
export default SightingsInfo;