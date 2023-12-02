"use client"

import { useAppDispatch, useUserState } from "../hooks/hooks"

const Login = () => {
    const dispatch = useAppDispatch()
    const {
        userEmail,
        setUserEmail,
        userPassword,
        setUserPassword,
    } = useUserState()



const handleSubmit= ()=>{

}


    return (
        < >
            <form>
                <h1>Ingreso</h1>
                <div>
                    <label>Email</label>
                    <input
                        placeholder="Email..."
                        type="email"
                        value={userEmail}
                        onChange={(event)=>{setUserEmail(event.target.value)}}
                    />
                </div>
                <div>
                    <label>Contraseña</label>
                    <input
                        placeholder="Contraseña..."
                        type="Contraseña"
                        value={userPassword}
                        onChange={(event)=>{setUserPassword(event.target.value)}}
                    />
                </div>

            </form>
        </ >
    )
}

export default Login