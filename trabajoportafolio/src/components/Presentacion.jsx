import React from 'react'

const Presentacion = ({hablando_sobre_mi}) => {
  return (
    <div className='main-content'>
    <h2 className='titulo-main'>Presentación</h2>
    <p className='texto-main'>
      {hablando_sobre_mi}
    </p>
    </div>
  )
}

export default Presentacion 