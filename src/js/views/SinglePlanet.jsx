import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const SinglePlanet = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      {store.singlePlanet.uid ? (
        <div className="card m-5">
          <div className="row g-0">
            <div className="col-md-4">
             <img className="img-fluid" src={store.baseImgUrl + "/planets/" + store.singlePlanet.uid + ".jpg"} />
            </div>
            <div className="col-md-8 py-5">
              <div className="px-3">
                <h5 className="card-title">
                  {store.singlePlanet.properties.name}
                </h5>
                <p className="card-text">{store.singlePlanet.description}</p>
              </div>
              <div className="px-3 my-5">
                <Link to="/">
                  <button className="btn btn-outline-dark">Go back</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Link to="/" className="mx-auto p-5">
          <button className="btn btn-outline-dark">Go back</button>
        </Link>
      )}
    </>
  );
};