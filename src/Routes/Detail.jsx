import React,{ useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams(); // Captura el id de la URL
  const [dentist, setDentist] = useState(null);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  

  useEffect(() => {
    // Aquí puedes realizar una búsqueda en tus datos para encontrar el dentista con el id correspondiente
    // Supongamos que tus datos están en un array llamado 'dentists'
    axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => {
      setDentist(response.data)
    })
    .catch((error) => {
      console.error('Error al obtener dentistas:', error);
    });

  }, [id]);

  if(!dentist){
    return <div>Cargando...</div>
  }

  return (
    <>
      <h1>Detail Dentist id </h1>
      <div className="card">
          <h2>{dentist.name}</h2>
          <p>Email: {dentist.email}</p>
          <p>Telefono: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail