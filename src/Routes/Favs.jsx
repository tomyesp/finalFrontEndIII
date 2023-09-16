import React,{useContext} from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  const favs = JSON.parse(localStorage.getItem("favs")) || [];

  return (
    <div className={state.theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.length > 0 ? (
          favs.map((dentist) => (
            <Card key={dentist.id}
            dentist={{
              id: dentist.id,
              name: dentist.name,
              username: dentist.username
            }}/>
          ))
        ) : (
          <p>No hay dentistas favoritos.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
