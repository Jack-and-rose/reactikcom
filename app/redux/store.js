import {toggleSiderMenu} from '@redux/actions';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import rootReducer from '@redux/reducers/index';
const initStore = {
  id:'root',
  collapsed:true,
  room__uuid__exact:'e1f48d2d',
  blackHoleSys:{
    id:'blackHoleSys',
    traction:{
      id:'traction',

    }
  }

};
console.log('toggleSiderMenu');
const store = createStore(rootReducer,initStore);
console.log(store.getState());
// const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(toggleSiderMenu('Learn about actions'));
console.log(store.getState());

export default store
// unsubscribe()