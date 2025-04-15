import React from 'react'
import '../../styles/main-styles/Header.css'

//Thiago Benjamin Robles Cordoba
// 61315 

const Header = ({nombre,fotoperfil}) => {
  return (
    <div className=' header'>
        <h2 className='nombre'>{nombre}</h2>
        <img className='foto-de-perfil' src={fotoperfil} alt="Foto de perfil" />
    </div>
  )
}

export default Header