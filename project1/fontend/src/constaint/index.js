import { combineReducers } from "redux";
import filmList from "./filmList";
import filmAll from "./filmAll";
export * from "./constaint";
// export * from "./hihi";
export const reducer = combineReducers({ filmAll, filmList });
