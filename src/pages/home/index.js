import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import bannerImg from '../../static/homeleft.jpg';
import Topic from './components/Topic';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import List from './components/List';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src={bannerImg} alt='540'/>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend>
          </Recommend>
          <Writer></Writer>
        </HomeRight>
        {this.props.showScroll?
        <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>: null }
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.initHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }
}
const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
});
const mapDispatch = (dispatch) => ({
  initHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow(e) {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    };
  }
});

export default connect(mapState, mapDispatch)(Home);