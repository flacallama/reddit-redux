import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addNewComment } from '../actions/comments'

class Comment extends Component {

  render () {

    return (
      <div >
        <div >
          <div className="row">
            <div className="col-md-offset-1">
              <hr />
              <p>
                <ul>
                  {this.props.matchingComments.map(comment => {
                    return (
                      <li>{comment.content}</li>
                    )})}

                </ul>
              </p>



              <form
                className="form-inline"
                onSubmit={e => { this.props.addNewComment(
                  this.props.postId, e.target.comment.value
                )
                e.preventDefault();
                e.target.reset();
              }}
              >
                <div className="form-group">
                  <input className="form-control" name="comment"/>
                </div>
                <div className="form-group">
                  <input type="submit" className="btn btn-primary" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNewComment: bindActionCreators(addNewComment, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Comment);
