import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commentActions from '../actions/comments'


class Comment extends Component {

  componentWillMount(){
    this.props.actions.getComments()
  }
  render () {
    console.log('props from comment', this.props.comments)
    return (
      <div>
        <p>
          Comment text
        </p>
        <form className="form-inline">
          <div className="form-group">
            <input className="form-control" />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    comments: state.comments
  }
}

function matchDispatchToProps(dispatch)
{
  return {
    actions: bindActionCreators(commentActions, dispatch)
  }

}

export default connect(mapStateToProps, matchDispatchToProps)(Comment)
