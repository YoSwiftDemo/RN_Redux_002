import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default class TodoListComponent extends Component{
    constructor(props){
        super(props);

    }
    //点击事件，通过 props.method 调用容器组件的方法
    clickTodo(index){
      this.props.clickTodo&&this.props.clickTodo(index);
    }
    render(){
        return (
            <View style={styles.container}>
            {this.props.todoList.map((todo, index)=>{
              let finishStyle = {textDecorationLine:'line-through', color:'gray'};
                return (
                          <TouchableOpacity
                            // 并添加了点击事件
                            onPress = {()=>{
                                this.clickTodo(index)
                              }
                            }
                            >
                           <Text style={[styles.todo,todo.status&&finishStyle]}
                              >{todo.title}
                            </Text>
                      </TouchableOpacity>
                );
            })}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:
    {
        paddingHorizontal: 20,
    },
    todo:
    {
        paddingVertical: 5,
    },
});
