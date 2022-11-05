const getState = ({ getStore, setStore }) => {
	return {
		store: {
			 baseUrl: 'https://www.swapi.tech/api/',
			 baseImgUrl: 'https://starwars-visualguide.com/assets/img/',
			 characters: [],
			 planets: [],
			 vehicles: [],
			 singleCharacter: [],
			 singlePlanet: [],
			 singleVehicle: [],
			 favorites: [],
			 getSingle: [],
		},
		actions: {
			getCharacters: () => {
				fetch(getStore().baseUrl + 'people')
					.then((res) => res.json())
					.then((data) => setStore({characters: data.results }))
					.catch((error) => console.log(error));
				},

			getSingleCharacter: (characterUrl) => {
					fetch(characterUrl)
					.then((res) => res.json())
					.then((data) => setStore({ singleCharacter: data.result }));
				},

			getPlanets: () => {
				fetch(getStore().baseUrl + 'planets')
					.then((res) => res.json())
					.then((data) => setStore({planets: data.results }))
					.catch((error) => console.log(error));
				},
				
			getSinglePlanet: (planetUrl) => {
					fetch(planetUrl)
					.then((res) => res.json())
					.then((data) => setStore({ singlePlanet: data.result }));
				},

			getVehicles: () => {
				fetch(getStore().baseUrl + 'vehicles')
					.then((res) => res.json())
					.then((data) => setStore({vehicles: data.results }))
					.
					catch((error) => console.log(error));
				},

			getSingleVehicle: (vehicleUrl) => {
					fetch(vehicleUrl)
					.then((res) => res.json())
					.then((data) => setStore({ singleVehicle: data.result }));
				},

			addFavorite: (favorite) => {
			 		const newFavorites = getStore().favorites;
			 		newFavorites.push(favorite);
					setStore({ favorites: newFavorites });
			 	},	

			deleteFavorite: (favoriteIndex) => {
				setStore({
				favorites: getStore().favorites.filter(
				(favorite, index) => index !== favoriteIndex
				),
			});
			},
		
		},
  };
};

export default getState;