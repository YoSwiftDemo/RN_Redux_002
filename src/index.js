import React,{Component} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import HomePage from './pages/HomePage'
import reducers from './reducers/index'
import { createStore ,applyMiddleware} from 'redux';        // 引入 redux 以创建 store
import { Provider } from 'react-redux';  //引入 react-redux,使用 Provider
 // 定义中间件
let thunkMiddleware = function ({ dispatch, getState }) {
    return function(next) {
        return function (action) {
            return typeof action === 'function' ?
                action(dispatch, getState) :
                next(action)
        }
    }
}
// 这是初始数据
const initState = {
  todos:[
    {id:1,title:'吃饭饭',status:true},
    {id:2,title:'打游戏',status:false},
    {id:3,title:'撸代码',status:false},
       ],
  filter: 'All', // 'All'|'Undo'|'Finish'    // 添加新的初始 `state`
}
  // 创建 store
const finalCreateStore = applyMiddleware(thunkMiddleware)(createStore);   // applyMiddleware 将中间件与 createStore 应用在一起，并返回一个 createStore
let store = finalCreateStore(reducers, initState);                        // 使用新的 createStore 创建 store
//let store = createStore(reducers, initState);

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
