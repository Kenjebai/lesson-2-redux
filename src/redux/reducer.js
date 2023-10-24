import { combineReducers } from "redux";
import titleReducer from './titleReducer'
import usersReducer from "./usersReducer";
import dataReducer from "./dataReduser";

export const rootReducer = combineReducers({
    titleReducer,
    usersReducer,
    dataReducer
})

