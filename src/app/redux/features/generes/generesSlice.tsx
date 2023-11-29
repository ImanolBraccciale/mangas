import { Generes } from "@prisma/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface UserState{
    allGeneres:Generes[];

}

const initialState:UserState ={
    allGeneres:[]

}

export const generesSlice = createSlice({
    name:"generes",
    initialState,
    reducers: {
        setAllGenenes: (state,action:PayloadAction<Generes[]>)=>{
            state.allGeneres = action.payload;
        }
    }
})
export const {setAllGenenes,  } = generesSlice.actions
export default generesSlice.reducer