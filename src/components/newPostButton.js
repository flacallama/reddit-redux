import React, { Component } from 'react';
class NewPostButton extends Component {

  render () {
    return (
      <div>
        <div className="pull-right">
          <p><a className="btn btn-info">New Post</a></p>
        </div>
      </div>
    )
  }
}
export default NewPostButton;
