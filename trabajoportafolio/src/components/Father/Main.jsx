import React from 'react'
import Presentacion from '../Presentacion';
import Estudios from '../Estudios';
import Softskills from '../SoftSkills';
import Proyectos from '../Proyectos';
import Experiencialaboral from '../Experiencialaboral';
import Idiomas from '../Idiomas';
import perfil from '../../sources/fotoperfil.jpeg'
import '../../styles/main-styles/Main.css';

const Main = () => {
  
  const InformacionPersonas = {

    Tito: {

      nombre: "Thiago Robles",
      fotoperfil: perfil,

      hablando_sobre_mi: "Soy un apasionado desarrollador de software con experiencia en diversas tecnologías. Me destaco en el uso de lenguajes como C#, JavaScript, HTML y CSS, así como en el manejo de bases de datos relacionales como SQL Server, MySQL, SQLite y no relacionales como MongoDB. Tengo experiencia trabajando con frameworks como React y .NET, y he desarrollado múltiples aplicaciones utilizando Windows Forms. Mi objetivo es seguir aprendiendo y creciendo en el mundo del desarrollo de software.",

      estudios: "Soy estudiante de la Tecnicatura Universitaria en Programación dictada por la UTN-FRT. Completé mis estudios primarios y secundarios en el Instituto Concepcionista San Cayetano, donde me gradué con el titulo de Bachiller en Economía.",

      habilidades: "Lenguajes: C#, JavaScript, HTML, CSS. Bases de datos: SQL Server, MySQL, SQLite, MongoDB. Frameworks: React, .NET. Desarrollo de aplicaciones: Windows Forms. Aprendizaje continuo y crecimiento en desarrollo de software.",

      proyectos: "He trabajado en varios proyectos, incluyendo aplicaciones de escritorio y web. Algunos de mis proyectos destacados incluyen una aplicación de gestión de tareas y un sistema de reservas para un restaurante. Estoy siempre buscando nuevos desafíos y oportunidades para aplicar mis habilidades.",

      experiencia: "He realizado prácticas profesionales en empresas locales, donde he podido aplicar mis conocimientos en proyectos reales. He trabajado en equipos ágiles y he aprendido a colaborar eficazmente con otros desarrolladores y diseñadores.",
      
      idiomas: "Español (nativo), Inglés (intermedio). Estoy en proceso de mejorar mis habilidades en inglés para poder comunicarme más eficazmente en entornos internacionales luego de recibirme."
    },

    //* Agregando a Arnold Schwarzenegger como ejemplo de otra persona */
    // Puedes agregar más personas siguiendo este formato
    Arnold: {

      nombre: "Arnold Schwarzenegger",

      fotoperfil: "https://www.arnoldschwarzenegger.com/images/arnold.jpg",

      hablando_sobre_mi: "Soy un actor, productor y ex culturista austriaco-estadounidense. Fui gobernador de California y he tenido una exitosa carrera en el cine de acción. Mi vida ha sido una búsqueda constante de superación personal y profesional.",

      estudios: "Estudié en la Universidad de Wisconsin-Superior y tengo un título en negocios. También he tomado cursos de actuación y oratoria a lo largo de mi carrera.",

      habilidades: "Soy conocido por mi disciplina y ética de trabajo. Tengo habilidades en actuación, producción cinematográfica y oratoria. También tengo experiencia en el mundo del fitness y la nutrición.",

      //Arnold no tiene proyectos de Programacion

      experiencia: "Comencé mi carrera como culturista y gané el título de Mr. Olympia en varias ocasiones. Luego, me convertí en actor y he protagonizado películas icónicas como 'Terminator', 'Predator' y 'Total Recall'. También fui gobernador de California desde 2003 hasta 2011.",

      idiomas: "Soy nativo en alemán y hablo inglés con fluidez. También tengo conocimientos básicos de español."

    }



  };



  return (
    <div>
      <Presentacion hablando_sobre_mi={InformacionPersonas.Tito.hablando_sobre_mi} />
      <Estudios estudios={InformacionPersonas.Tito.estudios} />
      <Softskills habilidades={InformacionPersonas.Tito.habilidades} />
      <Proyectos proyectos={InformacionPersonas.Tito.proyectos} />
      <Experiencialaboral experiencia={InformacionPersonas.Tito.experiencia} />
      <Idiomas idiomas={InformacionPersonas.Tito.idiomas} />
    </div>
  );
}

export default Main
