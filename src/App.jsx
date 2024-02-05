import { Form, Button, FormControl } from "react-bootstrap";
import "./App.css";
import { useState } from "react";

function App() {

  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    correo: ""
  })

  

  return (
    <section>
      <div className="p-3 bg-light">
        <h2>Formulario</h2>
      </div>
      <div className="bg-primary text-white w-100 d-flex justify-content-center py-4">
        <Form className="w-75">
          <label htmlFor="nombre">Nombre</label>
          <FormControl id="nombre" name="nombre" placeholder="Ingrese nombre" required minLength={3} maxLength={30}/>
          <label htmlFor="apellido">Apellido</label>
          <FormControl id="apellido" name="apellido" placeholder="Ingrese apellido" required minLength={3} maxLength={30}/>
          <label htmlFor="dni">D.N.I</label>
          <FormControl id="dni" name="dni" placeholder="Ingrese DNI" type="number" required minLength={6} maxLength={8}/>
          <label htmlFor="email">Correo</label>
          <FormControl id="email" name="dni" placeholder="correo@ejemplo.com" type="email" required minLength={5} maxLength={320}/>
          <Button variant="dark" className="mt-3">Enviar</Button>
        </Form>
      </div>
    </section>
  );
}

export default App;
