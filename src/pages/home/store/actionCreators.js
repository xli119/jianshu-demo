import axios from 'axios';
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const initHomeData = (result) => ({
  type: actionTypes.INIT_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});

const addHomeList = (list, nextPage) => ({
  type: actionTypes.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home-data.json').then(res => {
      const result = res.data.data;
      dispatch(initHomeData(result));
    })
    .catch(() => console.log('cannot get home-data.json'));
  }
};

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/home-list.json')
      .then((res) => {
        const result = res.data.data;
        dispatch(addHomeList(result, page + 1));
      })
      .catch(() => console.log('cannot get home-data.json'));
  }
}

export const toggleTopShow = show => ({
  type: actionTypes.TOGGLE_SCROLL_TOP,
  show
});
