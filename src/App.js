import React, { Component } from 'react';
import './App.css';
import TopNav from './components/TopNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <main className="container">

          <div className="pull-right">
            <p><a className="btn btn-info">New Post</a></p>
          </div>

          <ul className="nav nav-pills">
            <li role="presentation" className="active">
              <input type="search" className="form-control input-sm search-form" placeholder="Filter" />
            </li>
            <div className="form-inline">
              <label for="sort">  Sort by </label>
              <select className="form-control" id="sort">
                <option>Some text</option>
                <option>Some text</option>
              </select>
            </div>
          </ul>

          <div className="row">
            <div className="col-md-8">

              <form>
                <div>
                  <label for="title">Title</label>
                  <input id="title" className="form-control" />
                </div>
                <div>
                  <label for="body">Body</label>
                  <textarea id="body" className="form-control"></textarea>
                </div>
                <div>
                  <label for="author">Author</label>
                  <input id="author" className="form-control" />
                </div>
                <div>
                  <label for="image-url">Image URL</label>
                  <input id="image-url" className="form-control" />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Create Post
                  </button>
                </div>
              </form>

            </div>
          </div>

          <div className="row">
            <div className="col-md-12">

              <div className="well">
                <div className="media-left">
                  <img className="media-object" alt="blah" />
                </div>
                <div className="media-body">
                  <h4 className="media-heading">
                    Some Text
                    |
                    <a><i className="glyphicon glyphicon-arrow-up"></i></a>
                    <a><i className="glyphicon glyphicon-arrow-down"></i></a>
                    10
                  </h4>
                  <div className="text-right">
                    Some Author
                  </div>
                  <p>
                    Some text
                  </p>
                  <div>
                    Some time ago
                    |
                    <i className="glyphicon glyphicon-comment"></i>
                    <a>
                      Some comments
                    </a>
                  </div>
                  <div className="row">
                    <div className="col-md-offset-1">
                      <hr />
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
