"use client"
import React, { useEffect } from "react"
import { postMangaState, useAppDispatch, useAppSelector } from "../hooks/hooks"
import { postMangas } from "../redux/actions"
import {  Status } from "@prisma/client"
import { Generes } from "../types/types"
import { allGeneres } from "../redux/actions"

const formManga: React.FC = () => {
    const dispatch = useAppDispatch();
    const generes = useAppSelector((state)=>state.generes.allGeneres)
    const {
        tittle,
        setTittle,
        description,
        setDescription,
        allSelectedGeneres,
        setAllSelectedGeneres
    } = postMangaState()

    const handleSubmit = () => {

        const newManga = {
            tittle: tittle,
            description: description,
            status: Status.SOON,
            ID_Generes: allSelectedGeneres,
            author: "sasd",
            ID_USER: "f9965d9d-f31d-4823-89c5-747c63364f05"
        }

        dispatch(postMangas(newManga))
        setTittle("")
        setDescription("")
    }

    const handleGenreChange= (event: React.ChangeEvent<HTMLInputElement>)=>{
        const genreId = event.target.value;
        setAllSelectedGeneres([...allSelectedGeneres, genreId])
    }

    useEffect(
        () => {
            dispatch(allGeneres())
        }, [dispatch]
    )

    return (
        <section >
            <form onSubmit={handleSubmit}>
                <label>Titulo</label>
                <input
                    value={tittle}
                    placeholder="Titulo..."
                    type="text"
                    onChange={(event) => setTittle(event.target.value)}
                />

                <label>Descriptcion</label>
                <textarea
                    value={description
                    }
                    placeholder="Descriptcion..."
                    onChange={(event) => setDescription(event.target.value)}
                />
                {generes.map((genre:Generes) => (
                    <div key={genre.ID_Generes}>
                        <input
                            type="checkbox"
                            value={genre.ID_Generes}
                            checked={allSelectedGeneres .includes(genre.ID_Generes)}
                            onChange={handleGenreChange}
                        />
                        <span>{genre.name}</span>
                    </div>
                ))}

                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}

export default formManga