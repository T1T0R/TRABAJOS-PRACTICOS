import React from 'react'


const SoftSkills = ({habilidades}) => {
  return (
    <div className ='main-content'>
        <h2 className='titulo-main'>SOFT SKILLS</h2>
        <p className='texto-main'>
            {habilidades}
        </p>
        
    </div>
  )
}

export default SoftSkills