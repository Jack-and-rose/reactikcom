import * as ActionTypes from '../actions/ActionTypes';

const room = (state = 'e1f48d2d-4209-41cb-8111-a85525f5cb18' ,action)=>{
  switch(action.type){
    case ActionTypes.COLLAPSED_SIADER_MENU:
      console.log('enter room');
      console.log('state');
      console.log(state);
      console.log('action');
      console.log(action);
      return {
        ...state,room__uuid__exact: !state.room__uuid__exact
      }
    default:
      return state
  }
}
export default room