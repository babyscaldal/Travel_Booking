import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/root.saga";
import loginReducer from "../reducers/login.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import provincesReducer from "../reducers/ProvincesReducer";
import { IProvince } from "../types/provinceType";

export interface RootState {
  loginReducer: any;
  provincesReducer: {
    listProvinces: IProvince[];
  };
}

const allReducers = combineReducers({
  loginReducer,
  provincesReducer,
});

const sagaMiddleware = createSagaMiddleware();
const mainStore = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export { mainStore };
