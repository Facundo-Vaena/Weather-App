import React from 'react';
import './Card.css';
import {Link, NavLink} from "react-router-dom";

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="card">
        <div className='cardCloseTitle'>
        <div id="closeIcon">
            <button onClick={onClose} className="btn btn-sm btn-danger closeCard">X</button>
        </div>
         <NavLink className='cardNavLink' to={`/ciudad/${id}`} >
            <h3 className="cardTitle">{name}</h3>
         </NavLink>
         </div>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4 cardValue">
              <p>Min:</p>
              <p>{min}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 cardValue">
              <p>Max:</p>
              <p>{max}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};
