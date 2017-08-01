import React, { Component } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
} from 'react-native';

export default class TodoFormComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      todo:null,
    };
  }
  addTodo(){
    this.props.addTodo&&this.props.addTodo(this.state.todo);//调用父组件方法
  }

  setTodo(text){
    this.setState({
      todo:text,
    });
  }

  render(){
    return(
      <View
                   style = {styles.container}>
          <TextInput
                   style = {styles.input}
                   onChangeText = {(text)=>{
                             this.setTodo(text)
                       }}
          />
        <Button
                 title = 'Add'
                  onPress ={()=>{
                    this.addTodo()
                  }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:
     {
        paddingHorizontal: 10,
        flexDirection: 'row',
         width:300,
     },
    input:
    {
        flex: 1,
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,

    },
});
