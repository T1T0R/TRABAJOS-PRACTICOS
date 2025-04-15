import React from 'react'

const Proyectos = ({proyectos}) => {
  return (
    <div className='main-content'>
        <h2 className='titulo-main'>PROYECTOS</h2>
        <p className='texto-main'>
            {proyectos}

        </p>

    </div>
  )
}

export default Proyectos;