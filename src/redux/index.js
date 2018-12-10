import { createStore } from 'redux'
import App from './reducer'
let obj={
    Token:'',
    isLogin:false,
    userInfo:{
      id:-1,
    }
}
export const store = createStore(App,obj)