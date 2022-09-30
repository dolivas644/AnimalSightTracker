import React, { useState } from "react";
import { useEffect } from "react";
import css from "../App.css";
import HomeCss from "./home.css"

const Home = () => {
    const [joins, setJoins] = useState([]);

    //get joined data table
    const getJoins = async (searchTerm = null) => {
        let url = `http://localhost:4040/joined`;

        console.log('search term ', searchTerm);
        if (searchTerm) {
            url = url + `?q=${searchTerm}`;
            console.log('url ', url);
        }
        const response = await fetch(url);
        const join = await response.json();
        setJoins(join);
    };
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        getJoins(searchTerm);
    }, [searchTerm]);

    return (
        <>
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
                    {joins.map((join, index) => {
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
