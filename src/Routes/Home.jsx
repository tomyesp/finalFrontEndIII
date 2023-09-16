import React,{ useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { state } = useContext(ContextGlobal);

  if(state.loading){
    return <p>Cargando datos...</p>
  }

  if (state.error){
    return <p>Error al cargar los datos: {state.error.message} </p>
  }
  


  return (
    <main className={state.theme} >
      <h1>Home</h1>
      <div className='card-grid'>
        {!state.data || state.data.length === 0 ? (
          <p>No hay datos disponibles</p>
        ) : (
          state.data.map((dentist) => (
            <Card key={dentist.id} dentist={dentist} />
          ))
        )}
      </div>
    </main>
  )
}

export default Home