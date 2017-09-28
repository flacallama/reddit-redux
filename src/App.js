import React, { Component } from 'react';
import './App.css';
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

          <PostInput />
          <Posts />

        </main>
      </div>
    );
  }
}




export default App;
