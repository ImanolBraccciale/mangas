"use client"
import React from "react";
import { useAppDispatch } from "../hooks/hooks";
import { changePassword } from "../redux/actions";
import { Role } from "@prisma/client";
import FormGeneric from "../components/formGenerinc/page";
import { useSearchParams,useRouter } from "next/navigation";
import { NextResponse } from "next/server";
 

const ChangePassword = () => {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams()
  const token = searchParams?.get("token")
  const router = useRouter()
  const handleChangePassword = (formData: any) => {
    // Validar los datos del formulario

    const newUser = {
      email: formData.userEmail,
      password: formData.userPassword,
      confirmPassword: formData.userConfirmPassword,
      role: Role.USER,
    };
    dispatch(changePassword(newUser, token))
      .then(() => {
        return NextResponse.redirect('/Login');
      }
      )
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
    {
      label: "Confirmar contraseña",
      name: "userConfirmPassword",
      type: "password",
    }
  ];

  const initialFormState = {
    userEmail: "",
    userPassword: "",
    userConfirmPassword: ""
  };

  return (
    <>
      <h1>Cambiar contraseña</h1>
      <FormGeneric
        fields={formFields}
        initialState={initialFormState}
        onSubmit={handleChangePassword}
      />
    </>
  );
};

export default ChangePassword;