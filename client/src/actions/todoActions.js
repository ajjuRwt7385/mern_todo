import { GET_TODOS, ADD_TODO, DELETE_TODO, TODOS_LOADING } from "./types";
import axios from "axios";

export const getTodos = () => dispatch => {
  dispatch(todosLoading());
  axios
    .get("/api/todos")
    .then(res => {
      dispatch({
        type: GET_TODOS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const addTodo = userData => dispatch => {
  dispatch(todosLoading());
  axios
    .post("/api/todos", { title: userData.title })
    .then(res => {
      dispatch({
        type: ADD_TODO,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const deleteTodo = userId => dispatch => {
  dispatch(todosLoading());
  axios
    .delete(`/api/todos/${userId}`)
    .then(res => {        
      if (res.data && JSON.parse(res.data.success)) {
        dispatch({
          type: DELETE_TODO,
          payload: userId
        });
      }
    })
    .catch(err => console.log(err));
};

export const todosLoading = () => ({
  type: TODOS_LOADING
});
