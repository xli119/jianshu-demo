import React, { PureComponent } from 'react';
import { TopicWrapper, TopicItem } from '../style';
import { connect } from 'react-redux';

class Topic extends PureComponent {
  render() {
    return (
      <TopicWrapper>
        {this.props.list.map( (item) => 
          <TopicItem key={item.get('id')}>
            <img src={item.get('imgUrl')} alt={item.get('title')} className='topic-img'/>
            {item.get('title')}
          </TopicItem>
        )}
      </TopicWrapper>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'topicList'])
});

export default connect(mapState, null)(Topic);