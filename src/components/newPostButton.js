import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { togglePostInput } from '../actions/togglePost'


class NewPostButton extends Component {

  render () {
    return (
      <div>
        <div className="pull-right">
          <p><a
            className="btn btn-info"
            onClick={() => this.props.togglePostInput()}
          >New Post</a></p>
        </div>
      </div>
    )
  }
}

let matchDispatchToProps = (dispatch) => {
  return {
    togglePostInput: bindActionCreators(togglePostInput, dispatch)
  }
}

export default connect(null, matchDispatchToProps)(NewPostButton);
