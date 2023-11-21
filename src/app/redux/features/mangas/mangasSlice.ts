import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Manga from "@/app/types/types";

interface MangasState {
    mangasAll: Manga[];
    mangaID: string | null;
    mangaName: string;
}

const initialState: MangasState = {
    mangasAll: [],
    mangaID: null,
    mangaName: "",
};

export const mangasSlice = createSlice({
    name: "mangas",
    initialState,
    reducers: {
        setAllMangas: (state, action: PayloadAction<Manga[]>) => {
            state.mangasAll = action.payload;
        },
        setMangasID: (state, action: PayloadAction<string>) => {
            state.mangaID = action.payload;
        },
        setMangasName: (state, action: PayloadAction<string>) => {
            state.mangaName = action.payload;
        },
        addManga: (state,action: PayloadAction<Manga>)=>{
            state.mangasAll.push(action.payload)
        }
    }
})
export const { addManga,setAllMangas, setMangasID, setMangasName } = mangasSlice.actions;
export default mangasSlice.reducer