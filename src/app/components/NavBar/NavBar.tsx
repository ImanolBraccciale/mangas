"use client"
import React from "react"
import Link from "next/link"

const NavBar: React.FC = () => {
    return (
        <section>
            <nav>
                <ul>
                    <li>
                        <Link href="/Library">Biblioteca</Link>
                    </li>
                    <li>
                        <Link href="/Register">Registrarse</Link>
                    </li>
                    <li>
                        <Link href="/formManga">Crear Manga</Link>
                    </li>
                    <li>
                        <Link href="/Login">Login</Link>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default NavBar