import './App.css';
import Home from './pages/Home';

function App() {
  let name = "Pablo";
  
  let PersonaObject = {
    nombre: "Agustin",
    edad: 25,
    estudios: "Programacion",
    presente: false
  };

  let PersonasArray = [
    { nombre: "Carlos", edad: 25 },
    { nombre: "Natalia", edad: 20 },
  ];

  return (
    <div className="App">
      <Home name={name} PersonaObject={PersonaObject} PersonasArray={PersonasArray} />
    </div>
  );
}

export default App;
