import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeDetail = (title, content) => ({
  type: actionTypes.CHANGE_DETAIL,
  title,
  content
});

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json')
      .then((res) => {
        const result = res.data.data;
        dispatch(changeDetail(result.title, result.content))
      })
      .catch(() => {
        console.log('fail to get detail.json');
      });
  }
};