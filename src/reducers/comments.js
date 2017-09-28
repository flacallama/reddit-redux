export default(state = [], action ) => {
  switch (action.type) {

    case "GET_COMMENTS_PENDING":
    console.log('action pending in reducer')
      return state;
    case "GET_COMMENTS_FULFILLED":
    console.log("get comments fulfilled in reducer")
      return [...action.payload.data]
    default:
      return state;
  }
}
