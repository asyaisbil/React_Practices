/*Aşağıdaki React bileşeninde, useMutation hook'unda başarılı bir işlemden sonra courses query'sini geçersiz kıl(invalide et). - useQueryClient hook'unu kullanarak queryClient isimli bir değişkende queryClient'ı sakla. - mutation başarılı olduğunda courses isimli queryKey'e sahip query'leri invalide et. (invalidateQueries'i kullan ve argüman olarak bir obje ver. içinde queryKey property'si olsun ve değeri array olsun.) - İpucu: tanstack query dokümantasyonu quick start'daki örneğe bakabilirsin.
*/

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";


function CreateCourse() {
 const [courseName, setCourseName] = useState("");




 const createCourseMutation = useMutation({
   mutationFn: async (newCourse) => {
     const response = await axios.post("/api/courses", newCourse, {
       headers: { "Content-Type": "application/json" },
     });
     return response.data;
   },
   onSuccess: () => {
      setCourseName("");
   },
 });


 const handleSubmit = async () => {
   createCourseMutation.mutate({ name: courseName });
 };


 return (
   <div>
     <input
       type="text"
       value={courseName}
       onChange={(e) => setCourseName(e.target.value)}
       placeholder="Kurs Adı"
     />
     <button onClick={handleSubmit} disabled={createCourseMutation.isLoading}>
       Kurs Oluştur
     </button>
     {createCourseMutation.isLoading && <p>Yükleniyor...</p>}
     {createCourseMutation.isError && (
       <p>Hata: {createCourseMutation.error?.message}</p>
     )}
     {createCourseMutation.isSuccess && <p>Kurs başarıyla oluşturuldu.</p>}
   </div>
 );
}


export default CreateCourse;
