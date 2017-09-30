import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import TopNav from './components/TopNav';
import PostInput from './components/postInput';
import Posts from './components/posts';
import Filter from './components/filter';
import NewPostButton from './components/newPostButton';


class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="container">
          <TopNav />

          <NewPostButton />

          <Filter />


          <div>
            { console.log('togglehit')}
              {(this.props.togglePostInput === true ) ? <PostInput /> : '' }
          </div>
          <Posts />

        </main>
      </div>
    );
  }
}

let mapStateToProps = (state, props) => {
  return {
    togglePostInput: state.togglePostInput
  }
}


export default connect(mapStateToProps, null)(App);
