import * as ActionTypes from '../actions/ActionTypes';

export const toggleSiderMenu = (collapsed) => {
  return {
    type: ActionTypes.COLLAPSED_SIADER_MENU,
    id:'root',
    collapsed
  }
}

export const changeRoomId = (room__uuid__exact) => {
 return {
  type: ActionTypes.ROOM_UUID_EXACT,
  id,
  room__uuid__exact
 }
}