import axios from 'axios';


export const getComments = (comments) => {
  return {
    type: "GET_COMMENTS",
    payload: axios.get('http://localhost:9001/comments')
  }
}

export const addNewComment = (postId, comment) => {
  return {
    type: 'ADD_COMMENT',
    payload: axios.post(`http://localhost:9001/comments/${postId}`,
      {
        content: comment
      }
    )
  }
}
