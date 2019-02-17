import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  TODOS_LOADING
} from "../actions/types";

const initState = {
  todos: [],
  loading: false
};
export default (state = initState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: action.payload, loading: false };
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
        loading: false
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo._id !== action.payload),
        loading: false
      };
    case TODOS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
