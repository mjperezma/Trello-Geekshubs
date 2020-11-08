import {createStore} from 'redux';
import reducerList from './Reducer';

const store = createStore(reducerList);

export default store;
