import React,{Component} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import HomePage from './pages/HomePage'
import reducers from './reducers/index'
import { createStore } from 'redux';        // 引入 redux 以创建 store
import { Provider } from 'react-redux';  //引入 react-redux,使用 Provider
// 这是初始数据
const initState = {
  todos:[
    {title:'吃饭饭',status:true},
    {title:'打游戏',status:false},
    {title:'撸代码',status:false},
  ],
}
  // 创建 store
let store = createStore(reducers, initState);

export default class RootContainer extends Component{
  render (){
    return (
      <Provider store = {store}>
          <View style = {styles.container}>
            <HomePage />
          </View>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container:
  {
    flex:1,
    marginTop:20,
  },
})
