/*Aşağıdaki React bileşeninde, useQuery'e queryFn ekle. - queryFn axios isteği atmalı. - /api/posts adresine get isteği atacak. - axios başarılı olduğunda response'dan gelen data'yı return edecek.
*/

import { useQuery } from "@tanstack/react-query";
import axios from "axios"


function Posts() {
 const {data, isLoading, error } = useQuery({
     queryKey: ["posts"],
     queryFn: axios.get("/api/posts").then(response => response.data)
   });


 if (isLoading) return "Loading...";
 if (error) return "An error has occurred: " + error.message;


 return (
   <ul>
     {data?.map((post) => (
       <li key={post.id}>{post.message}</li>
     ))}
   </ul>
 );
}


export default Posts;
