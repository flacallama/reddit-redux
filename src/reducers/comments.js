export default(state = [], action ) => {
  switch (action.type) {
    case "GET_COMMENTS_PENDING":
      return state;
    case "GET_COMMENTS_FULFILLED":
    console.log('action.type', action.type)
      return [...action.payload.data]
    // case "POST_COMMENTS_PENDING":
    //   return state;
    // case "POST_COMMENTS_FULFILLED":
    // console.log("hit post comments fulfilled");
    //   return [state, ...action.payload.data]
    default:
      return state;
  }
}
