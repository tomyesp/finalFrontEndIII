import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from '../Components/utils/global.context'


 
const Card = ({ dentist }) => {

  const {state} = useContext(ContextGlobal)

  const detailLink = `/detail/${dentist.id}`;

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const currentFavs = JSON.parse(localStorage.getItem("favs"))  || [];

    const inFavs = currentFavs.some((fav)=> fav.id === dentist.id)

    if(!inFavs){
      const newFav = {id: dentist.id, name: dentist.name, username: dentist.username};

      currentFavs.push(newFav);
      
      localStorage.setItem("favs", JSON.stringify(currentFavs));

      alert("Dentist added successfully")
    }
  }

  return (
    <div className={`card ${state.theme}`}>

      
      <Link to={detailLink}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <div className="cardDiv">
        <img className="doctorIMG" src="/images/doctor.jpg" alt="doctor" />
          <h2>{dentist.name}</h2>
          <p>Username: {dentist.username}</p>
          <p>Id: {dentist.id}</p>
        </div>
      </Link>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
