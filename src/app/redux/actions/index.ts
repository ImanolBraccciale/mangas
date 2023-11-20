import axios from "axios";
import { ALL_MANGAS, MANGAS_ID, MANGAS_NAME, POST_MANGAS, USERS } from "../actiontypes";

export const allMangas = () => {
    return async function (dispatch: any) {
        try {
            const response = await axios.get("/api/Mangas")
            return dispatch({
                type: ALL_MANGAS,
                payload: response.data
            })
        } catch (error) {
            throw new Error('Failed to search allMangas in client');
        }
    }
}

export const mangasID = () => {
    return async function (dispatch: any) {
        try {
            const response = await axios.get("/api/Mangas")
            return dispatch({
                type: MANGAS_ID,
                payload: response.data
            })
        } catch (error) {
            throw new Error('Failed to search mangasID in client');
        }
    }
}

export const mangasName = (name: string) => {
    return async function (dispatch: any) {
        try {
            const response = await axios.get(`/api/Mangas?name=${name}`)
            return dispatch({
                type: MANGAS_NAME,
                payload: response.data
            })
        } catch (error) {
            throw new Error('Failed to search mangasName in client');
        }
    }
}

export const postMangas = () => {
    return async function (dispatch: any) {
        try {
            const response = await axios.post("/api/Mangas")
            return dispatch({
                type: POST_MANGAS,
                payload: response.data
            })
        } catch (error) {
            throw new Error('Failed to search postMangas in client');
        }
    }
}

export const users = ()=>{
    return async (dispatch:any) => {
        try {
            const response = await axios.get("api/User")
            return dispatch({
                type: USERS,
                payload: response.data
            })
        } catch (error) {
            throw new Error(`Failed to search users in client ${error}`)
        }
    }
}