import React, { PureComponent, Fragment } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from '../store/actionCreators';

class List extends PureComponent {
  render() {
    const { list, page, getMoreList } = this.props;
    return (
      <Fragment>
        {list.map((item, index) => (
        <Link key={index} to={`/detail/${item.get('id')}`}>
          <ListItem>
            <img className='img' alt='photography' src={item.get('imgUrl')} />
            <ListInfo>
              <h3 className='title'>{item.get('title')}</h3>
              <p className='desc'>{item.get('desc')}</p>
            </ListInfo> 
          </ListItem>
          </Link>))}
        <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
      </Fragment>
    );
  }
}

const mapDispatch = dispatch => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  }
});

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
});

export default connect(mapState, mapDispatch)(List);