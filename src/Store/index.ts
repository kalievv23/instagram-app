import { createStore } from "redux";
import rootReducer from "./Reducers";
import { useDispatch } from "react-redux";
const store = createStore(rootReducer);

export default store;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
