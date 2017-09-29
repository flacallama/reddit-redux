import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class Comment extends Component {

  addNewPost = (val) => {
    console.log(val)
  }

  render () {
    let {handleSubmit} = this.props

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


              <form onSubmit={ handleSubmit(this.addNewPost) } className='form-inline'>
                <div>
                  <label htmlFor="title">Title</label>
                  <Field className="form-control" name="title" component="input" type="text" />
                </div>
              </form>





              <form className="form-inline">
                <div className="form-group">
                  <input className="form-control" />
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

Comment = reduxForm({
  // a unique name for the form
  form: 'postInput'
})(Comment)

export default Comment
