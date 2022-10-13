import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        user: {}
    },
    reducers:{
        addUserData: (state, action) => {
            state.user = action.payload
        },
        removeUserData: (state, action) => {
            state.user.splice(0, 1)
        }
    }
});

export const addUserData = userDataSlice.actions.addUserData;
export const removeUserData = userDataSlice.actions.removeUserData;
export default userDataSlice.reducer;