import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory();
  return (
    <nav className="nav navbar sticky-top mb-3 py-5 align-center text-center" >
      <div className="mx-auto">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img width="200px" src="http://www.unioncosmos.com/wp-content/uploads/2017/01/Union-Cosmos-Star-Wars-Logo-Amarillo-PNG.png"></img>
          </span>
        </Link>
      </div>
      <div className="mx-auto py-3">
        <div className="dropdown">          
          <button className="btn btn-warning dropdown-toggle favourites" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites <span className="bg-black text-warning px-2 rounded">{store.favorites.length}</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
            {store.favorites.map((favorite, index) => {
              return (
                <li key={index} className="d-flex justify-content-between">
                  <a className="dropdown-item">
                    {favorite.name}
                  </a>
                  <button className="btn trash" onClick={() => actions.deleteFavorite(index)}>
                    <i className="fas fa-trash"></i>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};