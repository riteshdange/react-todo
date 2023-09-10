import { combineReducers } from "redux";
import todoReducers from "./todoReducers.js";

const rootReducer = combineReducers({
    todoReducers,
});

export default rootReducer;