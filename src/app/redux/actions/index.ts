"use client"
import axios from "axios";
import { addManga, setAllMangas,setMangasID,setMangasName } from "../features/mangas/mangasSlice";
import { Manga } from "@prisma/client";

export const fetchAllMangas = () => {
    return async function (dispatch: any) {
        try {
            console.log("!aaaa");
            const response = await axios.get("/api/Manga")
            console.log(response,"aa");
            return dispatch(setAllMangas(response.data))
        } catch (error) {
            throw new Error('Failed to search allMangas in client');
        }
    }
}

export const fetchMangasID = () => {
    return async function (dispatch: any) {
        try {
            const response = await axios.get("/api/Manga")
            return dispatch(setMangasID(response.data))
        } catch (error) {
            throw new Error('Failed to search mangasID in client');
        }
    }
}

export const fetchMangasName = (name: string) => {
    return async function (dispatch: any) {
        try {
            const response = await axios.get(`/api/Manga?name=${name}`)
            return dispatch(setMangasName(response.data))
        } catch (error) {
            throw new Error('Failed to search mangasName in client');
        }
    }
}

export const postMangas = (manga:Manga) => {
    return async function (dispatch: any) {
        try {
            const response = await axios.post("/api/Manga",manga)
            return dispatch(addManga(response.data))
        } catch (error) {
            throw new Error('Failed to search postMangas in client');
        }
    }
}

