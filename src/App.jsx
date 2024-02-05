import { Form, Button, FormControl } from "react-bootstrap";
import "./App.css";
import { useState } from "react";

function App() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (verificarFormulario()) {
      alert("Datos enviados");
      setFormulario({
        nombre: "",
        apellido: "",
        dni: "",
        email: "",
      });
    } else {
      alert("Completar los datos");
    }
  };

  const verificarFormulario = () => {
    if (
      verificarInputText(formulario.nombre, 3, 30) &&
      verificarInputText(formulario.apellido, 3, 30) &&
      verificarInputText(formulario.email, 5, 320) &&
      verificarInputNumber(formulario.dni, 500000, 100000000)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const verificarInputText = (input, minlength, maxlength) => {
    if (input.trim().length >= minlength && input.trim().length <= maxlength) {
      return true;
    } else {
      return false;
    }
  };

  const verificarInputNumber = (input, min, max) => {
    if (parseInt(input) >= min && parseInt(input) <= max) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <section>
      <div className="p-3 bg-light">
        <h2>Formulario</h2>
      </div>
      <div className="bg-primary text-white w-100 d-flex justify-content-center py-4">
        <Form className="w-75" onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre</label>
          <FormControl
            id="nombre"
            name="nombre"
            placeholder="Ingrese nombre"
            required
            minLength={3}
            maxLength={30}
            onChange={handleChange}
            value={formulario.nombre}
          />
          <label htmlFor="apellido">Apellido</label>
          <FormControl
            id="apellido"
            name="apellido"
            placeholder="Ingrese apellido"
            required
            minLength={3}
            maxLength={30}
            onChange={handleChange}
            value={formulario.apellido}
          />
          <label htmlFor="dni">D.N.I</label>
          <FormControl
            id="dni"
            name="dni"
            placeholder="Ingrese DNI"
            type="number"
            required
            min={500000}
            max={100000000}
            onChange={handleChange}
            value={formulario.dni}
          />
          <label htmlFor="email">Correo</label>
          <FormControl
            id="email"
            name="email"
            placeholder="correo@ejemplo.com"
            type="email"
            required
            minLength={5}
            maxLength={320}
            onChange={handleChange}
            value={formulario.email}
          />
          <Button variant="dark" className="mt-3" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    </section>
  );
}

export default App;
