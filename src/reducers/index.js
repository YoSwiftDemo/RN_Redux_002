import { combineReducers } from 'redux';
import {CLICK_TODO_STATUS,IN_PUT_ADD_FORM_TODO} from '../actions/actionIndex';
// // 匹配响应 action，创建并返回新的 state (注意，不能修改state)
//   // 在没有匹配到 action 时，返回原始stat
//   // 这是一个空的 reducer , 不做任何处理，返回原始 state
function todoList(state=[], action){
  switch (action.type) {
    case CLICK_TODO_STATUS:
      var todo = state[action.index];
      return [
          ...state.slice(0,action.index),
          Object.assign({},todo,{
            status:!todo.status,
          }),
          ...state.slice(action.index + 1)
      ];
      case IN_PUT_ADD_FORM_TODO:
       // 定义了新的匹配类型，以响应新的 action
              return [
                  ...state,
                  {
                      title: action.text,
                      status: false,
                  }
              ];

    default:
           return state;

  }
}
// 这里的 key 要与初始数据的 key 一致
const reducers = combineReducers({
    todos: todoList
});
export default reducers;
