// Action Value
const ADD_TODO = "ADD_TODO";

// Action Creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

// Initial State
const initialState = [{ title: "리액트 잼나요!" }];

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [...state, { title: action.payload }];
    }
    default:
      return state;
  }
};
export default todos;
