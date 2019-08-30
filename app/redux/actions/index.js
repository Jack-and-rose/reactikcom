import * as ActionTypes from '../actions/ActionTypes';

//
export const toggleSiderMenu = (id,collapsed) => {
  return {
    type: ActionTypes.COLLAPSED_SIADER_MENU,
    id,
    collapsed
  }
}

export const changeRoomUid = (room__uuid__exact) => {
 return {
  type: ActionTypes.ROOM_UUID_EXACT,
  id,
  room__uuid__exact
 }
}