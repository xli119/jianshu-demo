import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Write extends Component {
  render() {
    const { loginStatus } = this.props;
    if (loginStatus) {
      return (
        <div>Write an article</div>
      );
    } else {
      return (
        <Redirect to='/login'></Redirect>
      );
    }
  }
}

const mapState = (state) => ({
  isAdminLogin: state.isAdminLogin
});

export default connect(mapState, null)(Write);