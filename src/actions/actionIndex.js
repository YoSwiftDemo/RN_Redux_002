
/*----------------------action 类型常量 --------------------*/
/*
 * 更改 TODO 状态
 * @type {String}
 */
export const CLICK_TODO_STATUS = 'CLICK_TODO_STATUS';
export const IN_PUT_ADD_FORM_TODO = 'ADD_TODO_FORM';
/*----------------------action 创建函数 --------------------*/
/**
 * 更改 TODO 状态
 * @param  {Number} index TODO索引
 * @return {Object}       action
 */
export function changeTodoStatus(index){
    return {type: CLICK_TODO_STATUS, index};
    }

export function inPutAddFormTodo(text){                        // 定义 action 创建函数
    return {type: IN_PUT_ADD_FORM_TODO, text};
    }
