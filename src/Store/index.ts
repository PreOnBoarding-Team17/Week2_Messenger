import { createStore } from 'redux';
import rootReducer from 'Store/Reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

export default store;
