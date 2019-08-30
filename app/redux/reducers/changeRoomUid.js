import * as ActionTypes from '../actions/ActionTypes';

// 纯函数 没有任何副作用 完全依赖输入 生成一个输出 过程中不修改任何
const changeRoomUid = (state = 'e1f48d2d-4209-41cb-8111-a85525f5cb18' ,action)=>{
  switch(action.type){
    case ActionTypes.COLLAPSED_SIADER_MENU:
      console.log('enter room');
      console.log('state');
      console.log(state);
      console.log('action');
      console.log(action);
      //返回一个深复制对象 使用...obj 或者 object.assgin()
      /*
      let newAppState = { // 新建一个 newAppState
        ...appState, // 复制 appState 里面的内容
        title: { // 用一个新的对象覆盖原来的 title 属性
          ...appState.title, // 复制原来 title 对象里面的内容
          text: '《React.js 小书》' // 覆盖 text 属性
        }
      }
       */
      return {
        ...state,room__uuid__exact: action.room__uuid__exact
      }
    default:
      return state
  }
}
export default changeRoomUid