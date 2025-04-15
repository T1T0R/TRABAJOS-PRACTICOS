import React from 'react'

const Estudios = ({estudios}) => {
  return (
    <div className='main-content'>
        <h2 className='titulo-main'>Estudios</h2>
        <p className='texto-main'>
        {estudios}
        </p>
    </div>
  )
}

export default Estudios