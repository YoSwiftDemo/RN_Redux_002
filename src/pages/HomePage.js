import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import TodoListComponent from '../components/TodoListComponent';  // 引入子组件
import { connect } from 'react-redux';    // 引入 react-redux
// 这里，HomePage不再是默认export
//引入 action
import {changeTodoStatus,inPutAddFormTodo,filterTodoList} from '../actions/actionIndex'
import TodoFormComponent from '../components/TodoFormComponent'
import TodoFilterComponent from '../components/TodoFilterComponent'

class HomePage extends Component {
  constructor (props){
    super(props);
  }
  clickTodo(index)
  {
    let { dispatch } = this.props;   //从 props 里解构出 dispatch
    dispatch(changeTodoStatus(index)); // 执行 dispatch(action)
  }

  addTodo(text){
    let { dispatch } = this.props;             // 从 props 里解构出 dispatch
    dispatch(inPutAddFormTodo(text));         // 执行 dispatch(action)
  }

  filterTodo(filter){
    let { dispatch } = this.props;             // 从 props 里解构出 dispatch
    dispatch(filterTodoList(filter));          // 执行过滤方法
  }

  render(){
    return(
      <View>
        {/* <Text>QQ:738816656</Text> */}
         {/* <TodoListComponent todoList={[{title:'测试数据'}]} /> */}
         <TodoFormComponent
              //  渲染组件
                addTodo = {(text)=>{
                  this.addTodo(text)
          }}/>
          <TodoListComponent
              todoList={this.props.todoList}
              clickTodo={(index)=>{
                  this.clickTodo(index)
                }
          } />
          <TodoFilterComponent
            filter = {this.props.currentFilter}
            filterTodo = {(filter)=>{
              this.filterTodo(filter)
            }}
          />
      </View>
    );
  }
}

// 定义 TODO 过滤方法，返回新的数据
const getFilterTodos = (todos, filter) => {
  switch (filter)
   {
    case 'All':
      return todos;
    case 'Undo':
      return todos.filter( todo => !todo.status);
    case 'Finish':
      return todos.filter( todo => todo.status);
    default:
      throw new Error('Unknown filter: ' + filter);
   }
}

// 基于全局 state ，哪些 state 是我们想注入的 props
function mapStateToProps(state){
    return {
        //todoList: state.todos,  // 将全局的 state 的其中一个 key(即todos) 作为 props 注入
        todoList: getFilterTodos(state.todos, state.filter),
        // 注入props时，调用 TODO 过滤方法
        currentFilter: state.filter, // 注入新的 state 到 props
    }
}
export default connect(mapStateToProps)(HomePage);  // 连接组件并export
