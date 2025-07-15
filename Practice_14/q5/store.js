import { createStore } from "redux";

const initialState = { age: 10, error: "" };

function myReducer(state = initialState, action) {
  switch (action.type) {
    case "yas_arttir":
      return { ...state, age: state.age + 1, error: null };
    case "yas_azalt":
      return { ...state, age: state.age - 1, error: state.age === 0 ? "Yaş 0'ın altına düşemez!" : null};
    case "yas_sifirla":
      return { ...state, age: 0, error: null  };
    default:
      return state;
  }
}

export const myStore = createStore(myReducer);
