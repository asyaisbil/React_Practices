/*Bir görev yönetim uygulamasında, görevlerin listesini yöneten reducer fonksiyonuna, 
belirli bir görevi listeden silme işlevselliği ekle. 
- Reducer, `REMOVE_TASK` aksiyonu aldığında ve bu aksiyonun `payload`'unda 
silinecek görevin `id`'si gönderildiğinde, bu görevi görevler listesinden immutable bir şekilde çıkarsın. 
- İpucu: .filter()
*/


const initialState = {
    tasks: [
      { id: 1, text: "Alışveriş yap", completed: false },
      { id: 2, text: "Kitap oku", completed: true },
    ],
   };
   
   
   function taskReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_TASK":
        return { ...state, tasks: [...state.tasks, action.payload] };
      case "TOGGLE_TASK_COMPLETED":
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload
              ? { ...task, completed: !task.completed }
              : task
          ),
        };
       case "REMOVE_TASK":
           return {
               tasks: state.tasks.filter((task) => {
                   return task.id !== action.payload 
               })
           }
   
   
      default:
        return state;
    }
   }
   