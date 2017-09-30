import React, { Component } from 'react';
import Comment from './comment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commentActions from '../actions/comments'
import Moment from 'react-moment';

class Post extends Component {

  componentWillMount(){
    this.props.actions.getComments()
  }

  render () {

  let post = this.props.post

  let matchingComments = this.props.comments.filter (comment => comment.post_id === post.id ? comment : '')


    return (

      <div className="row">
        <div className="col-md-12">

          <div className="well">
            <div className="media-left">
              <img className="media-object" src='https://www.axure.com/c/attachments/forum/7-0-general-discussion/3919d1401387174-turn-placeholder-widget-into-image-maintain-interactions-screen-shot-2014-05-29-10.46.57-am.png' alt='blah'/>
            </div>
            <div className="media-body">
              <h4 className="media-heading">
                {post.title}
                |
                <a><i className="glyphicon glyphicon-arrow-up"></i></a>
                <a><i className="glyphicon glyphicon-arrow-down"></i></a>
                {post.votes}
              </h4>
              <div className="text-right">
                {post.author}
              </div>
              <p>
                {post.content}
              </p>
              <div>
                <Moment fromNow>{post.created_at}</Moment>
              |
              </div>
              <div>
              <i className="glyphicon glyphicon-comment"></i>
               <a>
                 {matchingComments.length}
               </a>
              </div>
              <Comment
                postId={post.id}
                matchingComments={matchingComments}
              />
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, matchDispatchToProps)(Post)
