import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../actions/posts';
import Post from './post'

class Posts extends Component {
  componentWillMount(){
    this.props.actions.getPosts();
  }



  render () {
    let theposts = this.props.posts.map(post => {
      return (
        <Post
          key={post.id}
          post={post}
          />

      )

    })
    return (

      <div>
        {theposts}
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    posts: state.posts

  }
}

function matchDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(postActions, dispatch)
  }
}


export default connect(mapStateToProps, matchDispatchToProps)(Posts);
