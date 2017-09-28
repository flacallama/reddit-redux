import axios from 'axios';


export const getPosts = (posts) => {
  console.log("hit actions");
  return {
    type: "GET_POSTS",
    payload: axios.get('http://localhost:9001/posts')
  }
}
