import { createStore } from 'redux';
import cartReducer from './ducks/cartReducer';


const store = createStore(cartReducer);

export default store;