import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../styles/home.css";
import Card from "./Card.jsx";
import { getlist } from "../services/getlist.js";

export const App = () => {
	const [characters, setCharacters] = useState([]);
	const [species, setSpecies] = useState([]);
	const [vehicles, setVehicles] = useState([]);
	useEffect(() => {
		getlist("people").then((respuestajson) => {
			setCharacters(respuestajson);
		})
		getlist("species").then((respuestajson) => {
			setSpecies(respuestajson);
		})
		getlist("vehicles").then((respuestajson) => {
			setVehicles(respuestajson);
		})
	}, [])
	
	return(
		<div className="container-fluid px-5">			
			<h2 className="text-danger mt-5 mb-3">Characters</h2>
				<div className="row scrolling flex-row flex-nowrap">
			{characters.map(character => <Card name={character.name} uid={character.uid}/>)}
				</div>			
			<h2 className="text-danger mt-5 mb-3">Species</h2>
				<div className="row">
			{species.map(species => <Card name={species.name} uid={species.uid}/>)}
				</div>
			<h2 className="text-danger mt-5 mb-3">Vehicles</h2>
				<div className="row">
			{vehicles.map(vehicle => <Card name={vehicle.name} uid={vehicle.uid}/>)}
				</div>
		</div>
	);
}

export default App;