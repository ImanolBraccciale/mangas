import { createSlice, PayloadAction } from "@reduxjs/toolkit";
 import {User} from "@/app/types/types"

interface UserState{
    userAll:User[];
    userID:string;
}

const initialState:UserState ={
    userAll:[],
    userID:""
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        setAllUser: (state,action:PayloadAction<User[]>)=>{
            state.userAll = action.payload;
        },
        setUserID: (state,action:PayloadAction<string>) => {
            state.userID = action.payload
        },
        addUser: (state,action:PayloadAction<User>)=>{
            state.userAll.push(action.payload)
        }
    }
})
export const {addUser, setUserID ,setAllUser } = userSlice.actions
export default userSlice.reducer