
/*----------------------action 类型常量 --------------------*/
/*
 * 更改 TODO 状态
 * @type {String}
 */
export const CLICK_TODO_STATUS = 'CLICK_TODO_STATUS';
export const IN_PUT_ADD_FORM_TODO = 'ADD_TODO_FORM';
export const FILTER_TODO_LIST = 'FILTER_TODO_LIST';         // 添加新的 action 类型
/*----------------------action 创建函数 --------------------*/
/**
 * 更改 TODO 状态
 * @param  {Number} index TODO索引
 * @return {Object}       action
 */
// export function changeTodoStatus(index){
//     return {type: CLICK_TODO_STATUS, index};
//     }
//return 一个 function
//延迟执行
//action 内部 dispatch 了 action
export function changeTodoStatus(id){
    return function (dispatch){
        setTimeout(()=>{
            dispatch({type: CLICK_TODO_STATUS, id});
        }, 2000);
    }
    // return {type: TOGGLE_TODO_STATUS, id};
}

export function inPutAddFormTodo(text){                        // 定义 action 创建函数
    return {type: IN_PUT_ADD_FORM_TODO, text};
    }

export function filterTodoList(filter){      // 添加新的 action 创建函数
    return {type: FILTER_TODO_LIST, filter};
};
