import sidermenu from './sidermenu';
import { combineReducers } from 'redux';
import changeRoomUid from './changeRoomUid'
export default combineReducers({
  sidermenu,
  changeRoomUid
})