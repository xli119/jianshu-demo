import React, { PureComponent } from 'react';
import { RecommendWrapper, RecommendItem } from '../style';
import { connect } from 'react-redux';

class Recommend extends PureComponent {
  render() {
    return (
      <RecommendWrapper>
        {this.props.list.map(item => (
          <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}></RecommendItem>
        ))}
      </RecommendWrapper>
    );
  }
}

const mapState = state => ({
  list: state.getIn(['home', 'recommendList'])
});

export default connect (mapState, null) (Recommend);