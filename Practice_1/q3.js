/* Eğitim platformunuzda aşağıdaki kodu gözden geçiriyorsunuz. 
İyi React uygulamaları (best practices) açısından hangi değişikliğin 
yapılması gerekir? */ 

function LessonList() {
 //let lessons = ["React", "JavaScript", "CSS"];
  const [lessons, setLessons] = useState(["React", "JavaScript", "CSS"]);

 return (
   <div>
     <ul>
       {lessons.map((lesson) => (
         <li key={lesson}>{lesson}</li>
       ))}
     </ul>
     <span>{lessons.length}</span>
   </div>
 );
}

