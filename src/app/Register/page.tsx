"use client"
import React from "react";
import { useAppDispatch } from "../hooks/hooks";
import { postUser } from "../redux/actions";
import { Role } from "@prisma/client";
import { userSchema } from "../components/validation/validation";
import FormGeneric from "../components/formGenerinc/page";
 
const Register = () => {
  const dispatch = useAppDispatch();

  const handleRegister = (formData:any) => {
    // Validar los datos del formulario
    
        const newUser = {
          name: formData.userName,
          email: formData.userEmail,
          password: formData.userPassword,
          confirmPassword:formData.userConfirmPassword,
          role: Role.USER,
        };
        console.log(newUser);
        dispatch(postUser(newUser));
      
 
  };

  const formFields = [
    {
      label: "Nombre",
      name: "userName",
      type: "text",
    },
    {
      label: "Correo",
      name: "userEmail",
      type: "text",
    },
    {
      label: "Contraseña",
      name: "userPassword",
      type: "password",
    },
  {
    label: "Confirmar contraseña",
    name: "userConfirmPassword",
    type: "password",
  }
  ];

  const initialFormState = {
    userName: "",
    userEmail: "",
    userPassword: "",
    userConfirmPassword:""
  };

  return (
    <>
      <h1>Registro</h1>
      <FormGeneric
        fields={formFields}
        initialState={initialFormState}
        onSubmit={handleRegister}
      />
    </>
  );
};

export default Register;