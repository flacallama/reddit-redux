import React, { Component } from 'react';
import Comment from './comment';


class Post extends Component {
  render () {
    let post = this.props.post
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
                10
              </h4>
              <div className="text-right">
                {post.author}
              </div>
              <p>
                {post.content}
              </p>
              <div>
                {post.created_at}
              |







                <i className="glyphicon glyphicon-comment"></i>
                <a>
                  Some comments
                </a>
              </div>
              <div className="row">
                <div className="col-md-offset-1">
                  <hr />
                  <Comment />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default Post;
