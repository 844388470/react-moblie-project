import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route,Switch,Redirect } from 'react-router-dom'
import Login from '../views/login'
class Frame extends Component {
  render() {
    return (
      <div className="Frame">
        <main>
            <Switch>
                <Route path="/frame" exact render={ ()=>{
                        return this.props.isLogin?<Redirect to="/frame/index" />:<Redirect to="/login" />
                    }
                } />
                <Route path="/frame/index" exact component={Login}/>
                <Redirect to="/error" />
            </Switch>
        </main>
      </div>
    );
  }
}

Frame=connect((state,ownProps)=>({isLogin:state.isLogin}))(Frame)

export default Frame;