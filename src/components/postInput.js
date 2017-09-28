import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostInput extends Component {

  addNewPost = (val) => {
    console.log(val)
  }

  render () {
    let { handleSubmit } = this.props;
    return (
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={ handleSubmit(this.addNewPost) }>
            <div>
              <label htmlFor="title">Title</label>
              <Field className="form-control" name="title" component="input" type="text" />
            </div>
            <div>
              <label htmlFor="body">Body</label>
              <Field className="form-control" name="body" component="input" type="textarea" />
            </div>
            <div>
              <label htmlFor="author">Author</label>
              <Field className="form-control" name="author" component="input" type="text" />
            </div>
            <div>
              <label htmlFor="image-url">Image URL</label>
              <Field className="form-control" name="image-url" component="input" type="text" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Create Post
              </button>
            </div>
          </form>

        </div>
      </div>
    )
  }
}

PostInput = reduxForm({
  // a unique name for the form
  form: 'postInput'
})(PostInput)

export default PostInput;
