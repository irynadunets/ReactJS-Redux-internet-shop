import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import rootReducer from './reducers'


export default () => {
  const store = createStore(rootReducer, applyMiddleware(logger));
  return store;
};

/*function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}*/

//const store = create();

/*store.dispatch({
  type: 'ADD_TODO',
  text: 'Hello'
})

console.log(store.getState())*/
