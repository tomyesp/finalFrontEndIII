import React,{ useState, useEffect } from 'react'
import Card from '../Components/Card'
import axios from 'axios';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET a la API para obtener la lista de dentistas
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setDentists(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener dentistas:', error);
      });
  }, []);

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </main>
  )
}

export default Home