import { createStore } from 'redux';
import defaultReducer from './Reducers/DefaultReducer';

export const store = createStore(defaultReducer);
