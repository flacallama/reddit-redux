import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import posts from './posts'
import comments from './comments'
import togglePostInput from './togglePost'


const rootReducer = combineReducers({

  form: formReducer,
  posts,
  comments,
  togglePostInput
})

export default rootReducer;
