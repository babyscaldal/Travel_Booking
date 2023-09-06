import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/root.saga";
import loginReducer from "../reducers/login.reducer";

const allReducers = combineReducers({
  loginReducer,
});

const sagaMiddleware = createSagaMiddleware();
const mainStore = createStore(allReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export { mainStore };
