import React, { Component } from 'react';
import { Route,Redirect,Switch } from 'react-router-dom'
import Login from '@/views/login/login'
import Register from '@/views/login/register'
// import HomePage from '../views/homePage'
import Frame from '../views/frame'
import Errors from '../views/errors'
import '../assets/scss/App.scss';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Switch>
            <Route path="/" exact render={ ()=><Redirect to="/frame" />} />
            <Route path="/frame" component={Frame} />
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/error" exact component={Errors}/>
            <Redirect to="/error" />
          </Switch>
        </div>
    );
  }
}


export default App;
