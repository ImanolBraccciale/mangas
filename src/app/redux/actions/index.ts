"use client"
import axios from "axios";
import { addManga, setAllMangas,setMangasID,setMangasName } from "../features/mangas/mangasSlice";
import { addUser } from "../features/user/userSlice";
import { Manga,User } from "@/app/types/types";
import { setAllGenenes } from "../features/generes/generesSlice";

export const fetchAllMangas = () => {
    return async function (dispatch: any) {
        try {
 
            const response = await axios.get("/api/Manga")
   
            return dispatch(setAllMangas(response.data))
        } catch (error) {
            throw new Error('Failed to search allMangas in client');
        }
    }
}

export const fetchMangasID = (id:string) => {
    return async function (dispatch: any) {
        try {
 
            const response = await axios.get(`/api/Manga?id=${id}`)
 
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

export const postUser = (newUser:User) => {
    return async function (dispatch: any) {
        try {

            const response = await axios.post("/api/Auth/User",newUser)
            return dispatch(addUser(response.data))
        } catch (error) {
            throw new Error('Failed to search POSTUSER in client');
        }
    }
}
export const forgetPassword = (newUser:any) => {
    return async function (dispatch: any) {
        try {
            const response = await axios.post("/api/Auth/reUser",newUser)
            return dispatch(addUser(response.data))
        } catch (error) {
            throw new Error('Failed to search forgetPassword in client');
        }
    }
}
export const changePassword = (newUser: any, token: any) => {
    return async function (dispatch: any) {
      try {
        
        const response = await axios.post(
          "/api/Auth/changePassword",
          newUser,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return dispatch(addUser(response.data));
      } catch (error) {
        throw new Error("Failed to change password in client");
      }
    };
  };


export const allGeneres = ()=>{
    return async function (dispatch:any) {
        try {
            const response = await axios.get("/api/Generes")
            return dispatch(setAllGenenes(response.data))
        } catch (error) {
            throw new Error("failed to seatch allGeneres in client")
        }
    }
}
