import * as ActionTypes from '../actions/ActionTypes';

const sidermenu = (state = false ,action)=>{
  switch(action.type){
    case ActionTypes.COLLAPSED_SIADER_MENU:
        console.log('enter sidermenu');
        console.log('state');
        console.log(state);
        console.log('action');
        console.log(action);
      return {
        ...state,collapsed: !action.collapsed
      }
    default:
      return state
  }
}
export default sidermenu