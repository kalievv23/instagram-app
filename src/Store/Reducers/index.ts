import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
