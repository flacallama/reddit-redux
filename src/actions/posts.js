import axios from 'axios';


export const getPosts = (posts) => {
  return {
    type: "GET_POSTS",
    payload: axios.get('http://localhost:9001/posts')
  }
}
