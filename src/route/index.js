import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from '../views/App'

// function onEntry(e,replace,back){               //拦截
//     // console.log(e)
//     if(e.location.pathname.indexOf('system')===-1){
//         back()
//     }else{
//         replace({ pathname: '/login' })
//         setTimeout(()=>{
//             back()                              //跳转  否则 阻塞
//         },2000)
//     }
// }

export default () => (                          //路由
    <BrowserRouter>
        <App></App>
    </BrowserRouter>
)