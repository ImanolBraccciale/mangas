import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
    value: string;
};

const initialState: UserState = {
    value: "",
};


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {}
})

export default userSlice.reducer;