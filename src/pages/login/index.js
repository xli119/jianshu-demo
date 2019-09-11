import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actionCreators from './store/actionCreators';
import { LoginWrapper, LoginBox, Input, Button } from './style';

class Login extends Component {
  render() {
    const { loginStatus } = this.props;
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='username' ref={(input) =>{this.username = input}}></Input>
            <Input placeholder='password' type='password' ref={(input) =>{this.password = input}}></Input>
            <Button onClick={() => this.props.login(this.username, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return (
        <Redirect to='/'></Redirect>
      );
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
  login(usernameElem, passwordElem) {
    dispatch(actionCreators.login(usernameElem.value, passwordElem.value));
  }
});

export default connect(mapState, mapDispatch)(Login);