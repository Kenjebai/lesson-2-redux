import { types } from "./types";

const initialState = {
    data1: []
}

export default function dataReducer(state = initialState, action) {
    switch(action.type) {
        case types.DATA:
            return {data1: action.payload}
        default: return state
    }
}