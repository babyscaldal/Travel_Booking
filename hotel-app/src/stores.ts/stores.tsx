import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/root.saga";
import loginReducer from "../reducers/login.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import provincesReducer from "../reducers/ProvincesReducer";
import { IProvince } from "../types/provinceType";
import sortHotel from "../reducers/hotelList.reducer";
import { IHotel } from "../types/hotelType";
import hotelsByLocationReducer from "../reducers/getHotels.reducer";

export interface RootState {
  loginReducer: any;
  provincesReducer: {
    listProvinces: IProvince[];
    selectedProvince: IProvince;
  };
  hotelsByLocationReducer: {
    hotelsListByLocation: IHotel[];
  };
}

const allReducers = combineReducers({
  loginReducer,
  provincesReducer,
  sortHotel,
  hotelsByLocationReducer,
});

const sagaMiddleware = createSagaMiddleware();
const mainStore = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export { mainStore };
