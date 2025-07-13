import { ADD_COMPLETED_COURSE } from "./actions.js"

export function reducer(state, action) {
    switch (action.type) {
      case ADD_COMPLETED_COURSE:
        return {
      ...state,
      completedCourses: [...state.completedCourses, action.payload],
    };
      default:
        return state;
    }
  }
