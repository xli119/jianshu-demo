import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeLogin = () => ({
  type: actionTypes.CHANGE_LOGIN,
  value: true
});

export const logout = () => ({
  type: actionTypes.LOGOUT,
  value: false
});

export const login = (username, password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?username=${username}&password=${password}`)
      .then((res) => {
        const result = res.data.data;
        if (result) {
          dispatch(changeLogin());
        } else {
          alert('登录失败，请稍后重试');
        }
      });
  }; 
};
