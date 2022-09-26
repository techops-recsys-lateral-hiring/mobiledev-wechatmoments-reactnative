import { createStore, combineReducers } from 'redux';
import countReducer from '../features/Counter/reducer/CountReducers';
const rootReducer = combineReducers(
{ count: countReducer }
);
const configureStore = () => {
return createStore(rootReducer);
}
export default configureStore;