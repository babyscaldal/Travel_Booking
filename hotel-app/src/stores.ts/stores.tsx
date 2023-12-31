import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/root.saga";
import loginReducer, { UserState } from "../reducers/login.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import provincesReducer from "../reducers/ProvincesReducer";
import { IProvince } from "../types/provinceType";
import sortHotel, { IInitHotelState } from "../reducers/hotelList.reducer";
import darkModeReducer from "../reducers/changeTheme.reducer";

export interface RootState {
  loginReducer: UserState;
  provincesReducer: {
    listProvinces: IProvince[];
    selectedProvince: IProvince;
  };
  sortHotel: IInitHotelState;
  darkModeReducer: {
    isDark: boolean;
  };
}

const allReducers = combineReducers({
  loginReducer,
  provincesReducer,
  sortHotel,
  darkModeReducer,
});

const sagaMiddleware = createSagaMiddleware();
const mainStore = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export { mainStore };
