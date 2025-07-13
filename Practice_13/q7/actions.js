
export const ADD_COMPLETED_COURSE = "ADD_COMPLETED_COURSE";

export const addCompletedCourse = (courseName) => {
    return { type: "ADD_COMPLETED_COURSE", payload: courseName }
}