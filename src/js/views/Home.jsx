import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory();
  return (
    <>
    <div className="container p-5">
    <h2 className="pb-3">CHARACTERS</h2>
      <div className="row scrolling flex-row flex-nowrap">
        {store.characters.map((characters) => {
          return (
            <div className="col mb-5 mx-5 p-0 border rounded bg-light" key={characters.uid}>
              <div className="card card-holder">
                <img src={store.baseImgUrl + "characters/" + characters.uid + ".jpg"} className="card-img-top m-0 p-0" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{characters.name}</h5>
                </div>
                <div className="row px-3 pb-3">
                  <div className="d-flex justify-content-start col-10">
                    <button className="btn btn-outline-dark" onClick={() => {actions.getSingleCharacter(characters.url); history.push("/singleCharacter");}}>
                      Learn more!
                    </button>
                  </div>
                  <div className="d-flex justify-content-end col-2">
                    <button className="btn btn-outline-warning" onClick={() => {actions.addFavorite(characters);}}>
                      <i class="fa fa-heart" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="mt-5 py-3">PLANETS</h2>
      <div className="row scrolling flex-row flex-nowrap">
        {store.planets.map((planets) => {
          return (
            <div className="col mb-5 mx-5 p-0 border rounded bg-light" key={planets.uid}>
              <div className="card card-holder">
                <img src={store.baseImgUrl + "planets/" + planets.uid + ".jpg"} className="card-img-top m-0 p-0" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{planets.name}</h5>
                </div>
                <div className="row px-3 pb-3">
                  <div className="d-flex justify-content-start col-10">
                    <button className="btn btn-outline-dark" onClick={() => {actions.getSinglePlanet(planets.url); history.push("/singlePlanet");}}>
                      Learn more!
                    </button>
                  </div>
                  <div className="d-flex justify-content-end col-2">
                    <button className="btn btn-outline-warning" onClick={() => {actions.addFavorite(planets);}}>
                      <i class="fa fa-heart" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <h2 className="mt-5 py-3">VEHICLES</h2>
      <div className="row scrolling flex-row flex-nowrap">
        {store.vehicles.map((vehicles) => {
          return (
            <div className="col mb-5 mx-5 p-0 border rounded bg-light" key={vehicles.uid}>
              <div className="card card-holder">
                <img src={store.baseImgUrl + "vehicles/" + vehicles.uid + ".jpg"} className="card-img-top m-0 p-0" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{vehicles.name}</h5>
                </div>
                <div className="row px-3 pb-3">
                  <div className="d-flex justify-content-start col-10">
                    <button className="btn btn-outline-dark" onClick={() => {actions.getSingleVehicle(vehicles.url); history.push("/singleVehicle");}}>
                      Learn more!
                    </button>
                  </div>
                  <div className="d-flex justify-content-end col-2">
                    <button className="btn btn-outline-warning" onClick={() => {actions.addFavorite(vehicles);}}>
                      <i class="fa fa-heart" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Home;