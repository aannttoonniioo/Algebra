import { createStore } from "redux";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_ALL_COMLPETED = "REMOVE_ALL_COMPLETED";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { todos: [...state, action.payload] };
    case DELETE_TODO:
      const newTodo1 = state.todos.filter((todo) => todo.id !== action.payload);
      return { todos: newTodo1 };
    case TOGGLE_TODO:
      const newTodos2 = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );

      return { todos: newTodos2 };
    case REMOVE_ALL_COMLPETED:
      const newTodos3 = state.todos.filter((todo) => !todo.completed);
      return { todos: newTodos3 };
    default:
      return state;
  }
};
const store = createStore(reducer);
export default store;
