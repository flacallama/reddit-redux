export default(state = [], action ) => {
  switch (action.type) {
    case "GET_COMMENTS_PENDING":
      return state;
    case "GET_COMMENTS_FULFILLED":
      return [...action.payload.data]
    case "ADD_COMMENTS_PENDING":
      return state;
    case "ADD_COMMENTS_FULFILLED":
      return [...state, ...action.payload.data]
    default:
      return state;
  }
}
