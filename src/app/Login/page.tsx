"use client"
import React from "react";
import { useAppDispatch } from "../hooks/hooks";
import { postUser } from "../redux/actions";
import { Role } from "@prisma/client";
import { userSchema } from "../components/validation/validation";
import FormGeneric from "../components/formGenerinc/page";
 
const Login = () => {
  const dispatch = useAppDispatch();

  const handleRegister = (formData:any) => {
        const newUser = {
          email: formData.userEmail,
          password: formData.userPassword,
          role: Role.USER,
        };
        dispatch(postUser(newUser));
      
  };

  const formFields = [
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

  ];

  const initialFormState = {
    userEmail: "",
    userPassword: "",
  };

  return (
    <>
      <h1>Login</h1>
      <FormGeneric
        fields={formFields}
        initialState={initialFormState}
        onSubmit={handleRegister}
      />
    </>
  );
};

export default Login;