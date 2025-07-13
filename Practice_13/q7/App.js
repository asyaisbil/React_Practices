import React, { useReducer, useState } from "react";
import {reducer} from "./reducer.js";
import { addCompletedCourse } from "./actions.js";

const initialState = { completedCourses: [] };

export default function App() {
   const [state, dispatch] = useReducer(reducer, initialState);
  const [courseName, setCourseName] = useState("");

  const handleAddCourse = () => {
    dispatch(addCompletedCourse(courseName));
    setCourseName("");
  };

  return (
    <div>
      <ul>
        {state.completedCourses.map((course, index) => (
          <li key={index}>{course} -completed</li>
        ))}
      </ul>
      <input
        type="text"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />
      <button onClick={handleAddCourse}>
        Dersi Tamamlandı Olarak İşaretle
      </button>
    </div>
  );
}
