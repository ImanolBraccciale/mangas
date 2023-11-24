"use client"
import React from "react";
import { useAppDispatch } from "../hooks/hooks";
import { postUser } from "../redux/actions";
import { Role } from "@prisma/client";
import { userSchema } from "../components/validation/validation";
import { useUserState } from "../hooks/hooks";


const User: React.FC = () => {
    const dispatch = useAppDispatch();

    const {
        userName,
        setUserName,
        userEmail,
        setUserEmail,
        userPassword,
        setUserPassword,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
    } = useUserState();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
         
            console.log(userEmail);
            console.log(userPassword);

            await userSchema.validate({
                name: userName,
                email: userEmail,
                password: userPassword,
            }, { abortEarly: false });
 
            
            const newUser = {
                name: userName,
                email: userEmail,
                password: userPassword,
                role:Role.USER,
            };
       
            console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa");

            dispatch(postUser(newUser));

    
            setUserName("");
            setUserEmail("");
            setUserPassword("");
            setEmailError("");
            setPasswordError("");

        } catch (error: any) {
 
            
            if (error.name === "ValidationError") {
                error.inner.forEach((validationError: any) => {
                    const { path, message } = validationError;
                    if (path === "email") {
                        setEmailError(message);
                    } else if (path === "password") {
                        setPasswordError(message);
                    }
                })
            }
        }

    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input
                    value={userName}
                    placeholder="Nombre..."
                    type="text"
                    onChange={(event) => setUserName(event.target.value)}
                />

                <label>Correo</label>
                <input
                    value={userEmail}
                    placeholder="Correo..."
                    type="text"
                    onChange={(event) => setUserEmail(event.target.value)}
                />
                {emailError && <span>{emailError}</span>}

                <label>Contraseña</label>
                <input
                    value={userPassword}
                    placeholder="Contraseña..."
                    type="password"
                    onChange={(event) => setUserPassword(event.target.value)}
                />
                {passwordError && <span>{passwordError}</span>}

                <button type="submit">Enviar</button>
            </form>
        </section>
    );
};

export default User;