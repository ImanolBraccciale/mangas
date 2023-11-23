"use client"
import React, { useState } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { postUser } from "../redux/actions";
import { Role } from "@prisma/client";

const User: React.FC = () => {
    const dispatch = useAppDispatch()
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log("asdasd");
        event.preventDefault()
        
        const newUser = {
            ID_USER:"",
            name: userName,
            email: userEmail,
            password: userPassword,
            role:Role.USER
           
        }
        
        dispatch(postUser(newUser))

        setUserName('');
        setUserEmail('');
        setUserPassword('');
    }

    return (
        <section onSubmit={handleSubmit}>
            <form>
                <label>Nombre</label>
                <input
                    value={userName}
                    placeholder="Nombre..."
                    type="text"
                    onChange={(event) => setUserName(event.target.value)}
                />
                <label>correo</label>
                <input
                    value={userEmail}
                    placeholder="correo..."
                    type="text"
                    onChange={(event) => setUserEmail(event.target.value)}
                />
                <label>Contraeña</label>
                <input
                    value={userPassword}
                    placeholder="Contraeña..."
                    type="text"
                    onChange={(event) => setUserPassword(event.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}

export default User


