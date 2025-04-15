import React from 'react'
import Header from '../components/Father/Header'
import Main from '../components/Father/Main'
import Footer from '../components/Father/Footer'
import fotopersonal from '../sources/fotoperfil.jpeg'





const Home = () => {
  return (
    <div className='home'>
      
        <Header nombre="Thiago Robles" fotoperfil={fotopersonal} />
        <Main />
        <Footer  />
    </div>
  )
}

export default Home