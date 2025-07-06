import { createStore } from "redux";

const initialState = { age: 0 };

function myReducer(state = initialState, action) {
  switch (action.type) {
    case "yas_arttir":
      return { ...state, age: state.age + 1 };
    case "yas_azalt":
      return { ...state, age: state.age - 1 };
    case "yas_sifirla":
        return {...state, age: initialState.age};
    default:
      return state;
  }
}

export const myStore = createStore(myReducer);