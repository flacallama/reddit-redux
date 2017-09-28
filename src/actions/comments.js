import axios from 'axios';


export const getComments = (comments) => {
  console.log("hit actions");
  return {
    type: "GET_COMMENTS",
    payload: axios.get('http://localhost:9001/comments')
  }
}
