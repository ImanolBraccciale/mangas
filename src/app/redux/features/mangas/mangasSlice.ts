import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Manga, postManga} from "@/app/types/types";

interface MangasState {
    mangasAll: Manga[];
    mangaID: string | null;
    mangaName: string;
    newManga:postManga[]
}

const initialState: MangasState = {
    mangasAll: [],
    mangaID: null,
    mangaName: "",
    newManga:[]
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
        addManga: (state,action: PayloadAction<postManga>)=>{
            state.newManga.push(action.payload)
        }
    }
})
export const { addManga,setAllMangas, setMangasID, setMangasName } = mangasSlice.actions;
export default mangasSlice.reducer