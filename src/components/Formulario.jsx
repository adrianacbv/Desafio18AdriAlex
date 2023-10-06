import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormAlert from './FormAlert.jsx';
import { useState } from "react";
import * as EmailValidator from 'email-validator';

const Formulario = () => { 
  const [alertType, setAlertType] = useState("danger");
  const [alertText, setAlertText] = useState("Completa todos los campos!");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const validarInput = (e) => {
    e.preventDefault();

    if(name == "" || email == "") {
      setAlertText("Completa todos los campos!");
      setAlertType("danger");
    } else if(EmailValidator.validate(email) == false) {
      setAlertText("Debe ingresar un correo válido");
      setAlertType("danger");
    } else {
      setAlertText("Registro realizado con éxito");
      setAlertType("success");
    }
  };

  return (
  <>
    <Form onSubmit={validarInput}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="tuemail@ejemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Registrarse
      </Button>
    </Form>
    <FormAlert alertType={alertType} alertText={alertText}/>
  </>
  )
}

export default Formulario;