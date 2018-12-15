import React, { Component } from 'react';

class Register extends Component {
  constructor(){
    super()
    this.state={
      username:'',
      password:''
    }
  }

  userNameChange(e){
    this.setState(() => ({
      username: e
    }));
  }

  render() {
    return (
      <header className="register App-header">
        <div className="Q_list">
          <div className="Q_list_left">
            账号:
          </div>
          <div className="Q_list_right">
            <input type="text" className="Q_list_right_input" onChange={(value) => this.userNameChange(value)} placeholder="请输入账号"/>
          </div>
        </div>
        <div className="Q_list">
          <div className="Q_list_left">
            密码:
          </div>
          <div className="Q_list_right">
            <input type="password" className="Q_list_right_input" onChange={(value) => this.userNameChange(value)} placeholder="请输入密码"/>
          </div>
        </div>
        <button className="login_button">注册</button>
        <div className="App-link"></div>
      </header>
    );
  }
}

export default Register;