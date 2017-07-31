import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import TodoListComponent from '../components/TodoListComponent';  // 引入子组件
import { connect } from 'react-redux';    // 引入 react-redux
// 这里，HomePage不再是默认export
 class HomePage extends Component {
  constructor (props){
    super(props);
  }
  render(){
    return(
      <View>
        {/* <Text>QQ:738816656</Text> */}
         {/* <TodoListComponent todoList={[{title:'测试数据'}]} /> */}
            <TodoListComponent todoList={this.props.todoList} />
      </View>
    );
  }
}
// 基于全局 state ，哪些 state 是我们想注入的 props
function mapStateToProps(state){
    return {
        todoList: state.todos,  // 将全局的 state 的其中一个 key(即todos) 作为 props 注入
    }
}
export default connect(mapStateToProps)(HomePage);  // 连接组件并export
