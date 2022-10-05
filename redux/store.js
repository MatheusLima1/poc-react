import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from './userData/userData';

export const store = configureStore({
    reducer:{
        userData: userDataReducer
    }
})