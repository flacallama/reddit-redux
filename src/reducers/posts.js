export default(state = [], action ) => {
  switch (action.type) {

    case "GET_POSTS_PENDING":
    console.log('action pending in reducer')
      return state;
    case "GET_POSTS_FULFILLED":
    console.log("get posts fulfilled in reducer")
      return [...action.payload.data]
    default:
      return state;
  }
}
