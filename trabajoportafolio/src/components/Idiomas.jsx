import React from 'react'

const Idiomas = ({idiomas}) => {
  return (
    <div className='main-content'>
        <h2 className='titulo-main'>IDIOMAS</h2>
        <p className='texto-main'>
            {idiomas}
        </p>
    </div>
  )
}

export default Idiomas