import React from "react";
import { Link } from "react-router-dom";

 
const Card = ({ dentist }) => {

  const detailLink = `/detail/${dentist.id}`;

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">

      
      <Link to={detailLink}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <div className="card">
          <h2>{dentist.name}</h2>
          <p>Username: {dentist.username}</p>
          <p>Id: {dentist.id}</p>
        </div>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
      </Link>

    </div>
  );
};

export default Card;
