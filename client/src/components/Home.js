import React, { useState } from "react";
import { useEffect } from "react";

const Home = () => {
    const [joins, setJoins] = useState([]);

    //get joined data table
    const getJoins = async () => {
        const response = await fetch(
            `http://localhost:4040/joined`
        );
        const join = await response.json();
        console.log(join);
        setJoins(join);
    };

    useEffect(() => {
        getJoins();
    }, []);

    const [searchTerm, setSearchTerm]=useState('');

    return (
        <>
            <header> Animal Sighting Tracker</header>
            <header> List all Sightings of Individuals Data Table </header>
            <br></br>
            <input type="text"
                placeholder="Search..."
                className="search"
                onChange={(e) => setSearchTerm(e.target.value)} />
            <br></br>
            <table>
                <thead>
                    <td>ID: </td>
                    <td>Date Time: </td>
                    <td> Location:</td>
                    <td> Healthy:</td>
                    <td>Individual Id:</td >
                    <td> Created On:</td >
                    <td> Email:</td >
                    <td> Nickname:</td >
                    <td> Seen On:</td >
                    <td> Species Id:</td >
            </thead >
    <tbody>
        {joins.filter((val) => {
            if (searchTerm === '') {
                return val;
            } else if (val.location.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            } else if (val.email.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            } else if (val.date_time.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            } else if (val.nick_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            } else if (val.created_on.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            } else if (val.id.toString().includes(searchTerm.toString())) {
                return val
            }else if (val.seen_on.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            } else if (val.healthy.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            } else if (val.species_id.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }
        }).map((join, index) => {
            return (
                <tr key={index}>
                    <td>{join.id}</td>
                    <td>{join.date_time}</td>
                    <td>{join.location}</td>
                    <td>{join.healthy === true ? "true" : "false"}</td>
                    <td>{join.individual_id}</td>
                    <td>{join.created_on}</td>
                    <td>{join.email}</td>
                    <td>{join.nick_name}</td>
                    <td>{join.seen_on}</td>
                    <td>{join.species_id}</td>
                </tr>
            )
        })}
    </tbody>
        </table >
        </>
    )
}
export default Home;