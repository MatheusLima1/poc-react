import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        userId: []
    },
    reducers:{
        addUserData: (state, action) => {
            state.userId.push(action.payload)
        },
        removeUserData: (state, action) => {
            state.userId.splice(0, 1)
        }
    }
});

export const addUserData = userDataSlice.actions.addUserData;
export const removeUserData = userDataSlice.actions.removeUserData;
export default userDataSlice.reducer;