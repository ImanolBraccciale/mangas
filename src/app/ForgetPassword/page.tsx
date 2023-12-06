"use client"
import React from "react";
import { useAppDispatch } from "../hooks/hooks";
import { Role } from "@prisma/client";
import FormGeneric from "../components/formGenerinc/page";
import { forgetPassword } from "../redux/actions";
 
const ForgetPassword = () => {
  const dispatch = useAppDispatch();

  const handleRegister = (formData:any) => {
        const newUser = {
          email: formData.userEmail,
          role: Role.USER,
        };
        dispatch(forgetPassword(newUser));
      
  };

  const formFields = [
    {
      label: "Correo",
      name: "userEmail",
      type: "text",
    },
  ];

  const initialFormState = {
    userEmail: "",
  };

  return (
    <>
      <h1>Recuperar Contraseña</h1>
      <FormGeneric
        fields={formFields}
        initialState={initialFormState}
        onSubmit={handleRegister}
      />
    </>
  );
};

export default ForgetPassword;