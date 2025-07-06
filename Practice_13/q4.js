/*Bir eğitim platformunda, öğrencinin tamamladığı ders sayısını yönetmek için bir reducer fonksiyonu oluştur. 
Reducer, COURSE_COMPLETED aksiyonu aldığında, completedCourses dizisine aksiyonun payload'unda gönderilen 
dersin ID'sini eklesin. 
- switch case kullan. 
- COURSE_COMPLETED case'ini tanımla. 
- state'i spread ile kopyala. 
- competedeCourses'ı ile kopyala ve payload'u içine koy. 
- default case'i unutma.
*/



const initialState = {
    completedCourses: [ ],
   };
   
   
   function courseReducer(state = initialState, action) {
       switch(action.type) {
           case "COURSE_COMPLETED":
               return {
                   ...state,
                   completedCourses: [...state.completedCourses, action.payload]
               }
           default: 
               return state
       }
   }