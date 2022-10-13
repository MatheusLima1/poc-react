import { combineReducers } from "@reduxjs/toolkit";
import userData from "./userData/userData";

const allReducers = combineReducers({
    userData: userData
})

export default allReducers